const branchesRouter = require('../../../components/branches/router');
const testServer = require('../../../mocks/testServer');
const Controller = require('../../../components/branches/controller');

const fakeServie = {
  findAll: async (repositoryName) => {
    return { repositoryName };
  },
};
const controller = Controller(fakeServie);

describe('router - branches', () => {
  const request = testServer(branchesRouter, '/api', controller);

  describe('GET /api/:author/:repositoryName/branches', () => {
    test('should response with status code 200', (done) => {
      request
        .get('/api/franciscogustavo/bloging-client/branches')
        .expect(200, done);
    });

    test('should response with a object json', (done) => {
      request
        .get('/api/franciscogustavo/bloging-client/branches')
        .end((err, res) => {
          expect(res.body).toEqual({
            repositoryName: 'franciscogustavo/bloging-client',
          });
          done();
        });
    });
  });
});
