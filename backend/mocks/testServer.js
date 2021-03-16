const express = require('express');
const supertest = require('supertest');

const testServer = (router, route, controller) => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  router(app, route, controller);
  return supertest(app);
};

module.exports = testServer;
