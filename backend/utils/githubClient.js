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

  const prs = (state) =>
    new Promise((resolve, reject) => {
      ghRepo.prs({ state }, (err, data) => {
        if (err) return reject(err);
        return resolve(data);
      });
    });

  const compare = (base, compare) =>
    new Promise((resolve, reject) => {
      console.log(base, compare);
      ghRepo.compare(base, compare, (err, data) => {
        if (err) return reject(err);
        return resolve(data);
      });
    });

  const createPr = ({ title, body, head, base }) =>
    new Promise((resolve, reject) => {
      ghRepo.pr(
        {
          title,
          body,
          head,
          base,
        },
        (err, data) => {
          if (err) return reject(err);
          return resolve(data);
        }
      );
    });

  return { branches, commits, commit, prs, compare, createPr };
};

module.exports = GitHubRepository;
