const branchesRouter = require('../components/branches/router');

const API_V1_ROUTES = (app) => {
  app.use('/api', branchesRouter);
};

module.exports = API_V1_ROUTES;
