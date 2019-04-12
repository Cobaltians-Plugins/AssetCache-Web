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
			this.send('download', params, callback)
		},
		delete: function(params, callback){
			this.send('delete', params, callback)
		},
        send:function(action, data, callback){
            cobalt.send({ type : "plugin", name : this.name, action : action, data : data }, callback);
        }
    };
    cobalt.plugins.register(plugin);
})(cobalt || {});
