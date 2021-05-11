const branchesRouter = require('../../../components/commits/router');
const testServer = require('../../../mocks/testServer');
const Controller = require('../../../components/commits/controller');

const fakeServie = {
  findAll: async (repositoryName, branchName) => {
    return { repositoryName, branchName };
  },

  findOne: async (repositoryName, commitSha) => {
    return { repositoryName, commitSha };
  },
};
const controller = Controller(fakeServie);

describe('router - branches', () => {
  const request = testServer(branchesRouter, '/api', controller);

  describe('GET /api/:author/:repositoryName/branches/:branchName/commits', () => {
    test('should response with status code 200', (done) => {
      request
        .get('/api/franciscogustavo/bloging-client/branches/main/commits')
        .expect(200, done);
    });

    test('should response with a object json', (done) => {
      request
        .get('/api/franciscogustavo/bloging-client/branches/main/commits')
        .end((err, res) => {
          expect(res.body).toEqual({
            repositoryName: 'franciscogustavo/bloging-client',
            branchName: 'main',
          });
          done();
        });
    });
  });

  describe('GET /api/:author/:repositoryName/branches/:branchName/commits/:commitSha', () => {
    test('should response with status code 200', (done) => {
      request
        .get(
          '/api/franciscogustavo/bloging-client/branches/main/commits/b5b571f28498575a7a47abc241854008b439e93e'
        )
        .expect(200, done);
    });

    test('should response with a object json', (done) => {
      request
        .get(
          '/api/franciscogustavo/bloging-client/branches/main/commits/b5b571f28498575a7a47abc241854008b439e93e'
        )
        .end((err, res) => {
          expect(res.body).toEqual({
            commitSha: 'b5b571f28498575a7a47abc241854008b439e93e',
            repositoryName: 'franciscogustavo/bloging-client',
          });
          done();
        });
    });
  });
});
