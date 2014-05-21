/*
 * L.0.0.T. v0.1
 * http://github.com/xxx
 */

 "use strict";

var hosts = {},
    mainURL = "",
    maxAssets = 50,
    tobeFlushed = [],
    interceptTypes = ["script", "image", "stylesheet"],
    // interceptAPI = "http://l00t.newsradar.org:61080/geotrace/",
    interceptAPI = "http://127.0.0.1:61080/geotrace/",
    AssetStorage = {
      stylesheet: 0,
      script: 0,
      image: 0,
    },
    flush_timeout_ms = 2000,
    last_flush_date = new Date(); // now


var sendMessage = function(data) {
  // Sends loot to current tab
  console.log("got data.");

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello", data: data},
      function(response) {
        console.log(response);
      });
  });
}

function extract_hostname(url) {
    return url.match(/(?:http|ftp|https)+:\/\/([^/]*)/)[1];
}

var interceptRequest = function(request) {
  var req = request;

  // Reset Counters if fresh URL
  if (req.type == "main_frame") {
    for (var key in AssetStorage) AssetStorage[key] = 0;
    mainURL = req.url;

    // reset state
    hosts = {};
    tobeFlushed = [];
    last_flush_date = new Date(); // now
  }

  console.log(req.url);

  // If valid Assets
  if (req && req.url && interceptTypes.indexOf(req.type) > -1) {

    if (req.url.indexOf(interceptAPI) == 0) {  
	  console.log("is API call.");
	  return; // avoid recursion
    }
    if (req.url.indexOf("http://heimdash.com/") == 0) {  
	return; // loot assets
    }
    
    // Catch unwanted activity
    if ((req.frameId != 0) && (req.parentFrameId != 0)) { return; }

    // Filter out hostnames to gather for batch processing via API
    req.hostname = extract_hostname(req.url); 

    // Keep number of times a host is requested for weighing of highscore
    hosts[req.hostname] ? hosts[req.hostname].count++ : hosts[req.hostname] = {count:1,flushed:false};
    if (hosts[req.hostname] > 1) { return; }

    // Increment, Cap Asset Counter
    if (AssetStorage[request.type] > 15) return;
    else AssetStorage[request.type]++;

    // Detect new hosts
    for (var key in hosts) {
      if (hosts[key].count == 1 && !hosts[key].flushed) {
        hosts[key].flushed = true;
        tobeFlushed.push(key);
      }
    }
  }

  // return { redirectUrl: chrome.extension.getURL("loot.html")};

}

var flusher = setInterval(function() {
      // Got five or timeout? Call API.

      var is_timeout = last_flush_date && ((new Date()) - last_flush_date > flush_timeout_ms);
      if (tobeFlushed.length > 10 || tobeFlushed.length > 0 && is_timeout) {

        console.log("flushing now: " + tobeFlushed);

        // GET API => results to contentscript
        var payload = tobeFlushed;
        tobeFlushed = []; 
        last_flush_date = new Date();

        $.getJSON(interceptAPI + payload.join(","))
          .done(function(data) { sendMessage(refine(data)); });
      }

    }, 500);

function refine(data) {
  if (data) {
    if (mainURL) {
	    // mark route of main page
	    data.main_host = extract_hostname(mainURL);
	    for(var r in data.routes) {
    		if (data.routes[r].dest_host == data.main_host) {
    		    data.routes[r].is_main = true;
    		}
      }
    }
  }
  
  return data;
  
}

// Listen on all requests
chrome.webRequest.onBeforeRequest.addListener(
  interceptRequest, {urls: ["*://*/*"]}, ['blocking']);

