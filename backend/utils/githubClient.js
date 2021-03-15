const octonode = require('octonode');
const config = require('config');
const client = octonode.client(config.get('token'));

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

  const merge = ({ base, head }) =>
    new Promise((resolve, reject) => {
      ghRepo.merge({ base, head }, (err, data) => {
        if (err) return reject(err);
        return resolve(data);
      });
    });

  return { branches, commits, commit, prs, compare, createPr, merge };
};

const GitHubPull = (repositoryName, number) => {
  const ghPr = client.pr(repositoryName, number);

  const update = ({ state }) =>
    new Promise((resolve, reject) => {
      ghPr.update({ state }, (err, data) => {
        if (err) return reject(err);
        return resolve(data);
      });
    });

  return { update };
};

module.exports.GitHubPull = GitHubPull;
module.exports.GitHubRepository = GitHubRepository;
