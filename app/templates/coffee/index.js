'use strict';

//switching from this context and branching into coffeeGenerator
module.exports = function(coffeeGenerator){
  if(coffeeGenerator.createWithServer){
    //populate server
  }
  //populat client
  coffeeGenerator.src.copy('coffee/client/gulpfile.coffee', 'client/gulpfile.coffee');
  coffeeGenerator.src.copy('coffee/client/app.coffee', 'client/app.coffee');
  coffeeGenerator.src.copy('coffee/client/start.coffee', 'client/start.coffee');
  coffeeGenerator.src.copy('coffee/client/models/Todo.coffee', 'client/models/Todo.coffee');
  coffeeGenerator.src.copy('coffee/client/pages/Index/Index.View.coffee', 'client/pages/Index/Index.View.coffee');
  coffeeGenerator.src.copy('coffee/client/pages/NotFound/NotFound.View.coffee', 'client/pages/NotFound/NotFound.View.coffee');
};
