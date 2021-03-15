const branchesRouter = require('../components/branches/router');
const commitsRouter = require('../components/commits/router');
const pullsRouter = require('../components/pulls/router');

const API_V1_ROUTES = (app) => {
  app.use('/api', branchesRouter);
  app.use('/api', commitsRouter);
  app.use('/api', pullsRouter);
};

module.exports = API_V1_ROUTES;
