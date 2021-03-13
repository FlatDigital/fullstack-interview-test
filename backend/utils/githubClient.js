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

  return { branches };
};

module.exports = GitHubRepository;
