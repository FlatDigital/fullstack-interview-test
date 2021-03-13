const octonode = require('octonode');
const client = octonode.client();

const GitHubRepository = (repositoryName) => {
  const ghRepo = client.repo(repositoryName);

  const branches = () =>
    new Promise((resolve, reject) => {
      ghRepo.branches((err, data) => {
        if (err) return reject(err);
        return resolve(data);
      });
    });

  const commits = () =>
    new Promise((resolve, reject) => {
      ghRepo.commits((err, data) => {
        if (err) return reject(err);
        return resolve(data);
      });
    });

  return { branches, commits };
};

module.exports = GitHubRepository;
