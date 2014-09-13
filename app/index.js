'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
console.log(__dirname);
var fissionCoffee = require(path.join(__dirname,'templates/coffee'));
var fissionJs = require(path.join(__dirname, 'templates/js'));
var FissionGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    //this.pkg = require('../package.json');
    this.option('coffee');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the dazzling Fission generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'createWithServer',
      message: 'Would you like to create with a server?',
      default: true
    },{
      type: 'input',
      name: 'projectName',
      message: 'Your project name: ',
      default: 'fissionProject'
    }];

    this.prompt(prompts, function (props) {
      this.createWithServer = props.createWithServer;
      this.projectName = props.projectName;
      console.log(this.projectName);
      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.dest.mkdir(this.projectName);
      this.destinationRoot(this.projectName);
      //create client directory
      this.dest.mkdir('client');
      this.dest.mkdir('client/css');
      this.dest.mkdir('client/models');
      this.dest.mkdir('client/pages');
      this.dest.mkdir('client/pages/Index');
      this.dest.mkdir('client/pages/NotFound');


      //copy in shared files
      this.src.copy('shared/client/index.html', 'client/index.html');
      this.src.copy('shared/client/css/app.styl', 'client/css/app.styl');
      this.src.copy('shared/client/pages/Index/Index.styl', 'client/pages/Index/Index.styl');

      if(this.createWithServer){
        this.dest.mkdir('server');
        this.dest.mkdir('server/http');
        this.dest.mkdir('server/http/api');
        this.dest.mkdir('server/http/passport');
        this.dest.mkdir('server/db');
        this.dest.mkdir('server/models');

        //require server package.json
        this.pkg = require('../_withServerPackage.json');
        this.src.copy('_withServerPackage.json', 'package.json');
      }
      else{
        this.pkg = require('../_withoutServerPackage.json');
        this.src.copy('_withoutServerPackage.json', 'package.json');
      }

      if(this.options.coffee){
        console.log('MAKE IT IN COFFEE');
        // this.npmInstall(['coffee'], {'save': true}, function(){
        //   console.log('installed coffee to pkg.json');
        // });
        fissionCoffee(this);
      }
      else{
        console.log('MAKE IT VANILLA');
        fissionJs(this);
      }
    },

    projectfiles: function () {
      this.src.copy('editorconfig', '.editorconfig');
      this.src.copy('jshintrc', '.jshintrc');
    }
  },

  end: function () {
    // var toInstall = [];
    // var dependencies = this.pkg.dependencies;
    //
    // for(var k in dependencies){
    //   toInstall.push(k);
    //   console.log('depends: '+k);
    // }
    //
    // for (var x in this.pkg.devDependencies){
    //   toInstall.push(x);
    //   console.log('devDepends: '+x);
    // }
    //
    // this.npmInstall(toInstall, function(){
    //   console.log('dependencies have been installed');
    // });
  }
});

module.exports = FissionGenerator;
