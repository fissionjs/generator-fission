'use strict';
var fission = require('../../app');

var Todo = require('../../models/Todo');

var DOM = fission.React.DOM;
var div = DOM.div;
var h1 = DOM.h1;

module.exports = fission.collectionView({
  model: Todo,
  render: function() {
    return div({className: 'content'},
      h1({}, 'Welcome'));
  }
});
