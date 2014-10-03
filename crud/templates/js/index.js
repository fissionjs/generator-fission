'use strict';

module.exports = function(jsCrud){
  var self = jsCrud;

  self.dest.mkdir('server/resources/' + self.name);
  self.directory('js/resources', 'server/resources/'+self.name);

  self.src.copy('js/models/Item.js', 'server/models/'+self.normalizedName+'.js');
};
