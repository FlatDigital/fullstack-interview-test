const express = require('express');
const router = express.Router();

const githubClient = require('../../utils/githubClient');
const Model = require('./model');
const Service = require('./service');
const Controller = require('./controller');

const model = Model(githubClient);
const service = Service(model);
const { findAll } = Controller(service);

router.get('/:repositoryName/branches/:branchName/commits', findAll);

module.exports = router;
