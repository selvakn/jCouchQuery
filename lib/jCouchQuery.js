(function($){
  $.jcouch = {
    
    couchDatabase : {
      _options : {
        port : window.location.port,
        host : window.location.hostname,
        protocol :window.location.protocol
      },
      connectionString : function(){
        databaseString = this._options.protocol + "//" + this._options.host

        if("" !== this._options.port){
          databaseString += ":" + this._options.port;
        }
        return databaseString;
      },
      doesExists : function(){
        
      }
    },
    
    
    init: function(options){}
  }
})(jQuery);