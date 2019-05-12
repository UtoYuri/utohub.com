const nextRoutes = require('next-routes');
module.exports = nextRoutes()
  .add('index', '/')
  .add('video player', '/v', 'v')
  .add('project', '/project/:name');
