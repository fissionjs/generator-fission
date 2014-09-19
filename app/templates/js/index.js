'use strict';

//switching from this context and branching into jsGenerator
module.exports = function(jsGenerator){
  if(jsGenerator.createWithServer){
    //populate server

    //populate directory
    jsGenerator.directory('js/server/config', 'server/config');
    jsGenerator.directory('js/server/db', 'server/db');
    jsGenerator.directory('js/server/http', 'server/http');
    jsGenerator.directory('js/server/lib', 'server/lib');
    jsGenerator.directory('js/server/models', 'server/models');
    jsGenerator.directory('js/server/resources', 'server/resources');
    jsGenerator.directory('js/server/seed', 'server/seed');
    jsGenerator.directory('js/server/test', 'server/test');

    //populate individual files
    jsGenerator.src.copy('js/server/start.js', 'server/start.js');
    jsGenerator.src.copy('js/server/gulpfile.js', 'gulpfile.js');
    //client files
    jsGenerator.src.copy('js/client/app.js', 'client/app.js');
    jsGenerator.src.copy('js/client/start.js', 'client/start.js');
    jsGenerator.src.copy('js/client/models/Item.js', 'client/models/Item.js');
    jsGenerator.src.copy('js/client/pages/Index/Index.View.js', 'client/pages/Index/Index.View.js');
    jsGenerator.src.copy('js/client/pages/NotFound/NotFound.View.js', 'client/pages/NotFound/NotFound.View.js');


  }

  else{
  //populat client (only)
    jsGenerator.src.copy('js/client/gulpfile.js', 'gulpfile.js');
    jsGenerator.src.copy('js/start.js', 'start.js');
    jsGenerator.src.copy('js/client/app.js', 'client/app.js');
    jsGenerator.src.copy('js/client/start.js', 'client/start.js');
    jsGenerator.src.copy('js/client/models/Item.js', 'client/models/Item.js');
    jsGenerator.src.copy('js/client/pages/Index/Index.View.js', 'client/pages/Index/Index.View.js');
    jsGenerator.src.copy('js/client/pages/NotFound/NotFound.View.js', 'client/pages/NotFound/NotFound.View.js');
  }
};
