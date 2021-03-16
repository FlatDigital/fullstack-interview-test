const branchesRouter = require('../../../components/pulls/router');
const testServer = require('../../../mocks/testServer');
const Controller = require('../../../components/pulls/controller');

const fakeServie = {
  findAll: async (repositoryName, { state }) => {
    return { repositoryName, state };
  },
  compareBranches: async () => {},
  createPull: async (repositoryName, { title, body, head, base }) => {
    return { repositoryName, title, body, head, base };
  },
  createMerge: async () => {},
  updatePull: async () => {},
};
const controller = Controller(fakeServie);

describe('router - branches', () => {
  const request = testServer(branchesRouter, '/api', controller);

  describe('GET /api/franciscogustavo/bloging-client/pulls?state=all', () => {
    test('should response with status code 200', (done) => {
      request
        .get('/api/franciscogustavo/bloging-client/pulls?state=all')
        .expect(200, done);
    });

    test('should response with a object json', (done) => {
      request
        .get('/api/franciscogustavo/bloging-client/pulls?state=all')
        .end((err, res) => {
          expect(res.body).toEqual({
            repositoryName: 'franciscogustavo/bloging-client',
            state: 'all',
          });
          done();
        });
    });
  });

  describe('POST /api/franciscogustavo/bloging-client/pulls?state=all', () => {
    test('should response with status code 200', (done) => {
      request
        .post('/api/franciscogustavo/bloging-client/pulls?state=all')
        .send({
          title: 'Testing branch',
          body: 'The description is important',
          head: 'new-feature',
          base: 'main',
        })
        .expect(200, done);
    });

    test('should response with a object json', (done) => {
      request
        .post('/api/franciscogustavo/bloging-client/pulls?state=all')
        .send({
          title: 'Testing branch',
          body: 'The description is important',
          head: 'new-feature',
          base: 'main',
        })
        .end((err, res) => {
          expect(res.body).toEqual({
            repositoryName: 'franciscogustavo/bloging-client',
            title: 'Testing branch',
            body: 'The description is important',
            head: 'new-feature',
            base: 'main',
          });
          done();
        });
    });
  });
});
