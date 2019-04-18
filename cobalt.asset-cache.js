(function(cobalt) {
  var plugin = {
    name: 'CobaltAssetCachePlugin',
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
    download: function(params, callback) {
      cobalt.plugins.send(this, 'download', params, callback)
    },
    delete: function(params, callback) {
      cobalt.plugins.send(this, 'delete', params, callback)
    }
  };
  cobalt.plugins.register(plugin);
})(cobalt || {});
