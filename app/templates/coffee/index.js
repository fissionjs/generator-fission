'use strict';

//switching from this context and branching into coffeeGenerator
module.exports = function(coffeeGenerator){
  if(coffeeGenerator.createWithServer){
    //populate server

    //populate directory
    coffeeGenerator.directory('coffee/server/config', 'server/config');
    coffeeGenerator.directory('coffee/server/db', 'server/db');
    coffeeGenerator.directory('coffee/server/http', 'server/http');
    coffeeGenerator.directory('coffee/server/lib', 'server/lib');
    coffeeGenerator.directory('coffee/server/models', 'server/models');
    coffeeGenerator.directory('coffee/server/resources', 'server/resources');
    coffeeGenerator.directory('coffee/server/seed', 'server/seed');
    coffeeGenerator.directory('coffee/server/test', 'server/test');

    //populate individual files
    coffeeGenerator.src.copy('coffee/server/start.coffee', 'server/start.coffee');
    coffeeGenerator.src.copy('coffee/server/start.js', 'server/start.js');
    coffeeGenerator.src.copy('coffee/server/gulpfile.coffee', 'gulpfile.coffee');
    //client files
    coffeeGenerator.src.copy('coffee/client/app.coffee', 'client/app.coffee');
    coffeeGenerator.src.copy('coffee/client/start.coffee', 'client/start.coffee');
    coffeeGenerator.src.copy('coffee/client/models/Item.coffee', 'client/models/Item.coffee');
    coffeeGenerator.src.copy('coffee/client/pages/Index/Index.View.coffee', 'client/pages/Index/Index.View.coffee');
    coffeeGenerator.src.copy('coffee/client/pages/NotFound/NotFound.View.coffee', 'client/pages/NotFound/NotFound.View.coffee');


  }

  else{
  //populat client (only)
    coffeeGenerator.src.copy('coffee/client/gulpfile.coffee', 'gulpfile.coffee');
    coffeeGenerator.src.copy('coffee/start.coffee', 'start.coffee');
    coffeeGenerator.src.copy('coffee/client/app.coffee', 'client/app.coffee');
    coffeeGenerator.src.copy('coffee/client/start.coffee', 'client/start.coffee');
    coffeeGenerator.src.copy('coffee/client/models/Item.coffee', 'client/models/Item.coffee');
    coffeeGenerator.src.copy('coffee/client/pages/Index/Index.View.coffee', 'client/pages/Index/Index.View.coffee');
    coffeeGenerator.src.copy('coffee/client/pages/NotFound/NotFound.View.coffee', 'client/pages/NotFound/NotFound.View.coffee');
  }
};
