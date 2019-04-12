(function(cobalt){
    var plugin = {
        'name': 'assetCache',
        init: function () {
            // Create shortcuts
            cobalt.assetCache={
                download: this.download.bind(this),
				delete: this.delete.bind(this)
            };
        },
        handleEvent:function(json){
            cobalt.log(this.name, ' plugin : unknown event received :', json)
        },
		download: function(params, callback){
			cobalt.plugins.send(this, 'download', params, callback)
		},
		delete: function(params, callback){
			cobalt.plugins.send(this, 'delete', params, callback)
		}
    };
    cobalt.plugins.register(plugin);
})(cobalt || {});
