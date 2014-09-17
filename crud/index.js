'use strict';

var yeoman = require('yeoman-generator');

var crudSubGenerator = yeoman.generators.NameBase.extend({
  initialize: function(){
    //namebase is resource name



    //TODO: find server/resources
    //TODO: generate folder in server/resources
      // Each folder has:
        //get
        //getAll
        //Patch
        //Put
    //TODO: Generate file in server/models
      //one file (upper case)
  }
});

module.exports = crudSubGenerator;
