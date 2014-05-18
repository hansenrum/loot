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
    interceptAPI = "http://l00t.newsradar.org:61080/geotrace/",
    AssetStorage = {
      stylesheet: 0,
      script: 0,
      image: 0,
    };


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


var interceptRequest = function(request) {
  var req = request;

  // Reset Counters if fresh URL
  if (req.type == "main_frame") {
    for (var key in AssetStorage) AssetStorage[key] = 0;
    mainURL = req.url;
  }

  console.log(req.url);

  // If valid Assets
  if (req && req.url && interceptTypes.indexOf(req.type) > -1) {

    if (req.url == interceptAPI) {
      console.log("is API call.");
      return;
    }
    
    // Catch unwanted activity
    if ((req.frameId != 0) && (req.parentFrameId != 0)) { return; }

    // Filter out hostnames to gather for batch processing via API
    req.hostname = req.url.match(/(?:http|ftp|https)+:\/\/([^/]*)/)[1];

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

    // Got five? Call API.
    if (tobeFlushed.length > 5) {
      console.log(tobeFlushed);
      // GET API => results to contentscript
      var payload = tobeFlushed;
      tobeFlushed = []; 

      $.getJSON(interceptAPI + payload.join(","))
        .done(function(data) {
          sendMessage(data);
      });
    }

  }

  // return { redirectUrl: chrome.extension.getURL("loot.html")};

}

// Listen on all requests
chrome.webRequest.onBeforeRequest.addListener(
  interceptRequest, {urls: ["*://*/*"]}, ['blocking']);

