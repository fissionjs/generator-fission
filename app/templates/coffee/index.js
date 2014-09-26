'use strict';

//switching from this context and branching into self
module.exports = function(coffeeGenerator){
  var self = coffeeGenerator;

  var authFile;
  if(self.createWithServer){
    //populate server

    //populate directory
    self.directory('coffee/server/config', 'server/config');
    self.directory('coffee/server/db', 'server/db');
    //self.directory('coffee/server/http', 'server/http');
    self.directory('coffee/server/http/apis', 'server/http/apis');
    self.directory('coffee/server/http/express', 'server/http/express');

    self.directory('coffee/server/lib', 'server/lib');
    self.directory('coffee/server/models', 'server/models');
    self.directory('coffee/server/resources', 'server/resources');
    self.directory('coffee/server/seed', 'server/seed');
    self.directory('coffee/server/test', 'server/test');

    //populate individual files
    //Authentication file based on choice
    if(self.authChoice === 'Twitter'){
      authFile = 'twitter.coffee';
    }
    if(self.authChoice === 'Facebook'){
      authFile = 'facebook.coffee';
    }
    if(self.authChoice === 'email/username'){
      authFile = 'index.coffee';
    }

    self.src.copy('coffee/server/http/'+authFile, 'server/http/index.coffee');
    self.src.copy('coffee/server/http/passport/'+authFile, 'server/http/passport/'+authFile);
    self.src.copy('coffee/server/http/passport/createAuthScript.coffee', 'server/http/passport/createAuthScript.coffee');
    self.src.copy('coffee/server/http/passport/index.coffee', 'server/http/passport/index.coffee');

    self.src.copy('coffee/server/start.coffee', 'server/start.coffee');
    self.src.copy('coffee/server/start.js', 'server/start.js');

    self.src.copy('coffee/server/gulpfile.coffee', 'gulpfile.coffee');
    //client files
    self.src.copy('coffee/client/app.coffee', 'client/app.coffee');
    self.src.copy('coffee/client/start.coffee', 'client/start.coffee');
    self.src.copy('coffee/client/models/Item.coffee', 'client/models/Item.coffee');
    self.src.copy('coffee/client/pages/Index/Index.View.coffee', 'client/pages/Index/Index.View.coffee');
    self.src.copy('coffee/client/pages/NotFound/NotFound.View.coffee', 'client/pages/NotFound/NotFound.View.coffee');


  }

  else{
  //populat client (only)
    self.src.copy('coffee/client/gulpfile.coffee', 'gulpfile.coffee');
    self.src.copy('coffee/start.coffee', 'start.coffee');
    self.src.copy('coffee/client/app.coffee', 'client/app.coffee');
    self.src.copy('coffee/client/start.coffee', 'client/start.coffee');
    self.src.copy('coffee/client/models/Item.coffee', 'client/models/Item.coffee');
    self.src.copy('coffee/client/pages/Index/Index.View.coffee', 'client/pages/Index/Index.View.coffee');
    self.src.copy('coffee/client/pages/NotFound/NotFound.View.coffee', 'client/pages/NotFound/NotFound.View.coffee');
  }
};
