'use strict';

var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  initializing: function() {
    console.log('sub sub sub sub sub sub sub sub sub sub');
  }
});
