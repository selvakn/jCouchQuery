describe 'jCouchQuery'
  before_each
    stub(jQuery, 'ajax')
    $.jcouch.init(testDatabaseOptions);
    
    responses = {
      database_exists : json_fixture("databaseExists")
    };
  end
  
  describe 'login'
    it 'should post to _session with username and password'
      
      $.jcouch.init(testDatabaseOptions);
    end
  end
  
  describe 'couchDatabase'
    it 'should give the database string from the current windown location'
      $.jcouch.couchDatabase.connectionString().should.be "/couch_database"
    end
  end
    
  describe 'constructUrl'
    before_each 
      databaseStr = $.jcouch.couchDatabase.connectionString();
    end
    
    it 'should construct the url from the resource information passed'
      $.jcouch._constructUrl("resource1").should.be databaseStr + "/resource1"
    end
    
    it 'should construct from multiple arguments'
      $.jcouch._constructUrl("resource1", "subResource").should.be databaseStr + "/resource1/subResource"
    end
  end
  
end