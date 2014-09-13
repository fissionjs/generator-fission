var fission = require('../../app');

var DOM = fission.React.DOM;
var div = DOM.div;
var h1 = DOM.h1;

module.exports = function() {
  fission.view({
    render: function() {
      div({
        className: 'content not-found'},
          h1({}, '404 Not Found!'));
    }
  });
};
