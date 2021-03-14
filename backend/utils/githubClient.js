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

  const commits = (branchName) =>
    new Promise((resolve, reject) => {
      ghRepo.commits({ sha: branchName }, (err, data) => {
        if (err) return reject(err);
        return resolve(data);
      });
    });

  const commit = (commitSha) =>
    new Promise((resolve, reject) => {
      ghRepo.commit(commitSha, (err, data) => {
        if (err) return reject(err);
        return resolve(data);
      });
    });

  return { branches, commits, commit };
};

module.exports = GitHubRepository;
