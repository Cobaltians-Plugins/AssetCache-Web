(function(cobalt) {
  var plugin = {
    classes: {
      ios: "AssetCachePlugin",
      android: "io.kristal.assetcache.AssetCache"
    },
    init: function() {
      cobalt.assetCache = {
        download: this.download.bind(this),
        delete: this.delete.bind(this)
      };
    },
    callbacks: {},
    randomId : function(){
      return Math.random().toString(36).substr(2, 10);
    },
    download: function(params, callback) {
      params.callback = this.randomId();
      this.callbacks[params.callback] = callback;
      cobalt.plugins.send(this, 'download', params)
    },
    delete: function(params, callback) {
      params.callback = this.randomId();
      this.callbacks[params.callback] = callback;
      cobalt.plugins.send(this, 'delete', params)
    },
    handleEvent: function(json) {
      if (json.callback && typeof this.callbacks[json.callback] === 'function') {
        this.callbacks[json.callback](json.data);
      }
    }
  };
  cobalt.plugins.register(plugin);
})(cobalt || {});
