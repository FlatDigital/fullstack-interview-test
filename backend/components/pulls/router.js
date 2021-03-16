const express = require('express');
const router = express.Router();

const { GitHubRepository, GitHubPull } = require('../../utils/githubClient');
const Model = require('./model');
const Service = require('./service');
const Controller = require('./controller');

const model = Model(GitHubRepository, GitHubPull);
const service = Service(model);
const controller = Controller(service);

const pullsRouter = (app, route, ctr = controller) => {
  const { findAll, createPull, compareBranches, createMerge, updatePull } = ctr;

  router.get('/:author/:repositoryName/pulls', findAll);
  router.post('/:author/:repositoryName/pulls', createPull);
  router.post('/:author/:repositoryName/merges', createMerge);
  router.put('/:author/:repositoryName/pulls/:number', updatePull);
  router.get(
    '/:author/:repositoryName/pulls/compare/:base/:compare',
    compareBranches
  );

  app.use(route, router);
};

module.exports = pullsRouter;
