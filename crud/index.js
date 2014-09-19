'use strict';
var path = require('path');

var yeoman = require('yeoman-generator');
var coffeeCrud = require(path.join(__dirname,'templates/coffee'));
//var jsCrud = require(path.join(__dirname,'templates/js'));

var crudSubGenerator = yeoman.generators.NamedBase.extend({
  initializing: function(){
    this.option('coffee');
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

  },

  prompting: function() {
    //var done = this.async();
    //This block does nothing
    // if(!this.name){
    //   console.log('Run command yo fission:crud <resourceName> with an argument');
    //   var prompts = [{
    //     type: 'input',
    //     name: 'crudName',
    //     message: 'Your resource name: ',
    //     }];
    //
    //   this.prompts(prompts, function(props) {
    //     this.crudName = props.crudName;
    //     console.log(this.crudName);
    //     done();
    //   }.bind(this));
    // }
    //
    // else{
    //
    // }
  },

  runthatshit: function(){
    if(this.options.coffee || this.config.get('coffee')){
      console.log('do coffee');
      coffeeCrud(this);
    }
    else{
      console.log('do js');
      //jsCrud(this);
    }
  },

  end: function(){

  }


});

module.exports = crudSubGenerator;
