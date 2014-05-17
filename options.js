
//options.js
(function() {
  var storage = chrome.storage.sync;
  
  // Saves options to localStorage.
  var save_options = function(event) {
    var checkbox = document.getElementById("opt-velocity-stacktrace");
    storage.set({'opt-velocity-stacktrace': checkbox.checked ? true : false}, function() {
      
      storage.get('opt-velocity-stacktrace', function(opts) { console.log(opts['opt-velocity-stacktrace']); });

      // Update status to let user know options were saved.
      var status = document.getElementById("status");
      status.innerHTML = "Options Saved.";
      setTimeout(function() {
        status.innerHTML = "";
      }, 750);
      
    });

    event.preventDefault();
  }

  // Restores select box state to saved value from localStorage.
  var restore_options = function() {
    
    storage.get('opt-velocity-stacktrace', function(opts) { console.log(opts['opt-velocity-stacktrace']); });
    
    var checkbox = document.getElementById("opt-velocity-stacktrace");
    storage.get('opt-velocity-stacktrace', function(opts) {
      checkbox.checked = opts['opt-velocity-stacktrace'] ? true : false;
    });

  }
  document.addEventListener('DOMContentLoaded', function() {
    restore_options();
    document.querySelector('#save').addEventListener('click', save_options);
  });
  
  
  
})();

