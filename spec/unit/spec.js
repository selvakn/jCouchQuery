describe 'jCouchQuery'
  before_each
    $.jcouch.init({})
    responses = {
      database_exists : json_fixture("database_exists")
    }
  end
  
  describe 'couchDatabase'
    it 'should give the database string from the current windown location'
      $.jcouch.couchDatabase.connectionString().should.be "http://127.0.0.1"
    end
    
    it 'should do something'
      
    end
    
  end
end