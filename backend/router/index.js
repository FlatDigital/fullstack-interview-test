const branchesRouter = require('../components/branches/router');
const commitsRouter = require('../components/commits/router');

const API_V1_ROUTES = (app) => {
  app.use('/api', branchesRouter);
  app.use('/api', commitsRouter);
};

module.exports = API_V1_ROUTES;
