
(function(window) {
  
  window.DevtoolsRedirect = {
    //Constants,
    
    //Vars,
    options: {},
    storageItems: null,
    storageOptions: null,
    
    //Functions,
    init: function(options) {
      this.options = $.extend(true, this.options, options);
      
      this.storageItems = $.merge([], ['rules'], this.options.storageOptions);
      
      //We'll use the chrome storage API,
      if(chrome.storage) this.storage = chrome.storage.sync;

      //Make sure we have storage,
      if(!this.storage) throw(new Error("No storage defined"));
      
    },
    
    getOptions: function(opts) {
      var def = new $.Deferred();
      this.storage.get(opts ? opts : this.options.storageOptions, function(items) { def.resolve(items); });
      return def;
    },
    
    /*
      setOptions()
        - params: opts -> {'option_name': theOptionValue}
    */
    setOption: function(opt) {
      var def = new $.Deferred();
      this.storage.set(opt, function() { def.resolve(); });
      return def;
    }
  };
  
  //Init DevtoolsRedirect w/ default store options,
  DevtoolsRedirect.init({
    storageOptions: [
      'root',
      'disabled',
      'rules'
    ]
  });
  
})(window);