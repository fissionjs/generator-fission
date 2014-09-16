var  fission = require('../app');

module.exports = fission.model({
  url: '/v1/items',
  props: {
    id: 'string',
    text: 'string'
  },
});
