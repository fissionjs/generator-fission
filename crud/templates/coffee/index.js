'use strict';

module.exports = function(coffeeCrud){
  console.log(coffeeCrud.name);
  console.log("source root: "+coffeeCrud.sourceRoot());
  console.log("dest Root: "+coffeeCrud.destinationRoot());
  coffeeCrud.dest.mkdir('server/resources/'+coffeeCrud.name);
  //coffeeCrud.directory('coffee/resources', 'server/resources/'+coffeeCrud.name);
  coffeeCrud.src.copy('coffee/resources/get.coffee', 'server/resources/'+coffeeCrud.name+'/get.coffee');
  coffeeCrud.src.copy('coffee/models/Item.coffee', 'server/models/Item.coffee');
};
