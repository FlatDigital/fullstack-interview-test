const branchesRouter = require('../components/branches/router');
const commitsRouter = require('../components/commits/router');
const pullsRouter = require('../components/pulls/router');

const API_V1_ROUTES = (app) => {
  branchesRouter(app, '/api');
  commitsRouter(app, '/api');
  pullsRouter(app, '/api');
};

module.exports = API_V1_ROUTES;
