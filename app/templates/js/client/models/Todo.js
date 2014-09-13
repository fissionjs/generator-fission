var  fission = require('../app');

module.exports = fission.model({
  url: '/v1/todos',
  props: {
    id: 'string',
    text: 'string',
    done: 'boolean'
  },
});
