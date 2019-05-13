const nextRoutes = require('next-routes');
const routes = nextRoutes()
  .add('index', '/')
  .add('video player', '/v', 'v')
  .add('project', '/project/:name');
module.exports = routes;
