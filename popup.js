
(function() {
  var currentTabId = null;
  
  var updateHTML = function(newHTML) {
    var list = $('#list-resources');

    if(newHTML && newHTML != '') {
      list.html(newHTML);
    } else {
      list.html('<li>No active redirects. <em>(Open the devtools and set redirects rules in the <strong>Redirect</strong> tab.)</em></li>');
    }
  };
  
  
  var port = chrome.extension.connect({name:"popup"});
  port.onMessage.addListener(function(msg) {
    if(msg.action == 'updateHTML' && typeof updateHTML == 'function' && currentTabId == msg.tabId) {
      updateHTML(msg.html);
    }
  });
  
  chrome.tabs.getSelected(null, function(tab) {
    currentTabId = tab.id;
    port.postMessage({action: 'getPopupHTML', tabId: currentTabId});
  });
  
  
  
})();

