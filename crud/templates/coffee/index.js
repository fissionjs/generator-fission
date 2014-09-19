'use strict';
// var crudSubGenerator = require('../../index.js');
//
//   module.exports = crudSubGenerator.extend({
//     exec: function(){
//       console.log('exe coffee');
//       this.src.copy('coffee/resources/get.coffee', 'server/resources/'+this.name+'/get.coffee');
//     }
//   });

// var self = coffeeCrud;
// //coffeeCrud.dest.mkdir('server/resources/'+coffeeCrud.name);
// //coffeeCrud.directory('coffee/resources', 'server/resources/'+coffeeCrud.name);
// //coffeeCrud.src.copy('coffee/resources/get.coffee', 'server/resources/'+coffeeCrud.name+'/get.coffee');
// //coffeeCrud.src.copy('coffee/models/Item.coffee', 'server/models/Item.coffee');
//
// self.src.copy('coffee/index.js', 'crudcoffee.js');

module.exports = function(coffeeCrud){
  var self = coffeeCrud;

  self.dest.mkdir('server/resources/'+self.name);
  self.directory('coffee/resources', 'server/resources/'+self.name);
  self.src.copy('coffee/models/Item.coffee', 'server/models/'+self.normalizedName+'.coffee');

};
