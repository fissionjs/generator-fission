var fission = require('../../app');

var Todo = require('../../models/Todo');

var DOM = fission.React.DOM;
var div = DOM.div;
var h1 = DOM.h1;
var h3 = DOM.h3;
var a = DOM.a;
var button = DOM.button;
var br = DOM.br;
var span = DOM.span;
var input = DOM.input;
var img = DOM.img;

var itemView = fission.modelView({
  model: Todo,
  remove: function() {
    return this.model.destroy();
  },
  toggle: function() {
    this.model.set('done', !this.model.get('done'));
    return this.model.save();
  },
  check: function() {
    if (this.model.get('done')) {
      return 'done';
    }
    return 'notdone';
  },
  render: function() {
    return div({
      className: 'item'
    }, input({
      className: 'checkbox',
      type: 'checkbox',
      onClick: this.toggle,
      defaultChecked: this.model.get('done')
    }), span({
      className: this.check()
    }, this.model.get('text')), a({
      className: 'remove',
      href: '#',
      onClick: this.remove
    }, ' x'));
  }
});

module.exports = fission.collectionView({
  model: Todo,
  itemView: itemView,
  addTodo: function(e) {
    if (e.which === 13) {
      this.collection.create({
        text: e.target.value,
        done: false
      });
      e.target.value = '';
      return e.target.value;
    }
  },
  render: function() {

    var done = this.collection.filter(function(todo) {
      return todo.get('done');
    });
    return div({className: 'content'},
      h1({}, 'todos'),
      input({
        className: 'add-item',
        onKeyDown: this.addTodo,
        type: 'text',
        placeholder: 'What needs to be done?'
      }),
      div({className: 'items'}, this.items.map(function(item) {
        return item;
      })),
      div({}, '' + (this.items.length - done.length) + ' items left'),
      div({}, 'clear completed (' + done.length + ')'));
  }
});
