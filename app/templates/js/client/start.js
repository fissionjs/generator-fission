var fission = require('./app');
var IndexView = require('./pages/Index/Index.View');
var NotFoundView = require('./pages/NotFound/NotFound.View');

fission.router.route('/', {
  title: 'Welcome',
  view: IndexView,
  el: 'content',
  'continue': false
});

fission.router.route('*', {
  title: 'Not Found',
  view: NotFoundView,
  el: 'content',
  'continue': false
});

fission.router.start();
