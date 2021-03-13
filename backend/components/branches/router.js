const express = require('express');
const router = express.Router();

const Service = require('./service');
const Controller = require('./controller');

const { findAll } = Controller(Service());

router.get('/:repositoryName/branches', findAll);

module.exports = router;
