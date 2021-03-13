const express = require('express');
const router = express.Router();

const githubClient = require('../../utils/githubClient');
const Model = require('./model');
const Service = require('./service');
const Controller = require('./controller');

const model = Model(githubClient);
const service = Service(model);
const { findAll, findOne } = Controller(service);

router.get('/:repositoryName/branches/:branchName/commits', findAll);
router.get('/:repositoryName/branches/:branchName/commits/:commitSha', findOne);

module.exports = router;
