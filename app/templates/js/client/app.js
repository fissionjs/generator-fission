'use strict';
var Fission = require('fission');

console.log(Fission);

var fission = new Fission({
  sync: function(method, model, options){
    console.log(method, model, options);
    if(method === 'create'){
      model.id = Math.floor(Math.random() * (100 - 1)) + 1;
    }
  }
});

module.exports = fission;
