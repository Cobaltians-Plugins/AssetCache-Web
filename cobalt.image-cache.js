(function(cobalt){
    var plugin = {
        'name': 'imageCache',
        init: function (settings) {
            // Create shortcuts
            cobalt.imageCache={
                download: this.download.bind(this),
				delete: this.delete.bind(this)
            };

            if (settings) {
                this.config(settings);
            }
        },

        config: function(settings){},
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
