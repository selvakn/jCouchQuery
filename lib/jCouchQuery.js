(function($){
  
  var CouchDatabase = function(db_name){
    this.connectionString = function(){
      return "/" + db_name;
    }
  };
  
  $.jcouch = {
    login : function(name, password, callback, failure_callback){
      jQuery.ajax({
        url : this.couchDatabase.connectionString + "_session",
        data :{
          name : name,
          password : password
        },
        type : "POST",
        success : callback,
        failure : failure_callback
      });
    },
    
    createDatabase : function(name, callback, failure_callback){
      jQuery.ajax({
        url : _constructUrl(name),
        type : "POST",
        success : callback,
        failure : failure_callback
      });
    },

    getDocument : function(doc_options, callback, failure_callback){
      jQuery.ajax({
        url : couchDatabase.connectionString + _constructUrl(doc_options.name, doc_options.id),
        type : "GET",
        success : callback,
        failure : failure_callback
      });
    },

    // putDocument : function(doc_options, callback, failure_callback){},
    // 
    // deleteDocument : function(doc_options, callback, failure_callback){},
    // 
    // updateDocument : function(doc_options, callback, failure_callback){},
    
    _constructUrl : function(){
      if (typeof(arguments) === "object") {
        var str = this.couchDatabase.connectionString();
        $(arguments).each(function(index, arg){
           str += "/" + arg;
        });
        return str;
      } else {
        return this.couchDatabase.connectionString() + "/" + arguments;
      }
    },
    
    init: function(options){
      this.couchDatabase = new CouchDatabase(options.db);
      var username = options.username;
      var password = options.password;
      if(username !== null && password !== null){ this.login(username, password); }
    }
  }
})(jQuery);