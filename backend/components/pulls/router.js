const express = require('express');
const router = express.Router();

const githubClient = require('../../utils/githubClient');
const Model = require('./model');
const Service = require('./service');
const Controller = require('./controller');

const model = Model(githubClient);
const service = Service(model);
const { findAll, createPull, compareBranches } = Controller(service);

router.get('/:author/:repositoryName/pulls', findAll);
router.post('/:author/:repositoryName/pulls', createPull);
router.get(
  '/:author/:repositoryName/pulls/compare/:base/:compare',
  compareBranches
);

module.exports = router;
