'use strict';

//switching from this context and branching into self
module.exports = function(jsGenerator){
  var self = jsGenerator;
  var authFile;
  if(self.createWithServer){
    //populate server

    //populate directory
    self.directory('js/server/config', 'server/config');
    self.directory('js/server/db', 'server/db');
    //self.directory('js/server/http', 'server/http');
    self.directory('js/server/http/apis', 'server/http/apis');
    self.directory('js/server/http/express', 'server/http/express');

    self.directory('js/server/lib', 'server/lib');
    self.directory('js/server/models', 'server/models');
    self.directory('js/server/resources', 'server/resources');
    self.directory('js/server/seed', 'server/seed');
    self.directory('js/server/test', 'server/test');

    //populate individual files
    //Authentication file based on choice
    if(self.authChoice === 'Twitter'){
      authFile = 'twitter.js';
    }
    if(self.authChoice === 'Facebook'){
      authFile = 'facebook.js';
    }
    if(self.authChoice === 'email/username'){
      authFile = 'index.js';
    }

    self.src.copy('js/server/http/passport/'+authFile, 'server/http/passport/'+authFile);
    self.src.copy('js/server/http/passport/createAuthScript.js', 'server/http/passport/createAuthScript.js');
    self.src.copy('js/server/http/passport/index.js', 'server/http/passport/index.js');

    self.src.copy('js/server/http/index.js', 'server/http/index.js');
    self.src.copy('js/server/start.js', 'server/start.js');

    self.src.copy('js/server/gulpfile.js', 'gulpfile.js');
    //client files
    self.src.copy('js/client/app.js', 'client/app.js');
    self.src.copy('js/client/start.js', 'client/start.js');
    self.src.copy('js/client/models/Item.js', 'client/models/Item.js');
    self.src.copy('js/client/pages/Index/Index.View.js', 'client/pages/Index/Index.View.js');
    self.src.copy('js/client/pages/NotFound/NotFound.View.js', 'client/pages/NotFound/NotFound.View.js');


  }

  else{
  //populat client (only)
    self.src.copy('js/client/gulpfile.js', 'gulpfile.js');
    self.src.copy('js/start.js', 'start.js');
    self.src.copy('js/client/app.js', 'client/app.js');
    self.src.copy('js/client/start.js', 'client/start.js');
    self.src.copy('js/client/models/Item.js', 'client/models/Item.js');
    self.src.copy('js/client/pages/Index/Index.View.js', 'client/pages/Index/Index.View.js');
    self.src.copy('js/client/pages/NotFound/NotFound.View.js', 'client/pages/NotFound/NotFound.View.js');
  }
};
