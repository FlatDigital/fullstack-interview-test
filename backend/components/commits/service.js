const { commitsDto, commitDto } = require('./commits.dto');

const Service = (model) => {
  const findAll = async (repositoryName, branchName) => {
    const commits = await model.findAllCommits(repositoryName, branchName);
    return commitsDto(commits);
  };

  const findOne = async (repositoryName, commitSha) => {
    const commit = await model.findOneCommit(repositoryName, commitSha);
    return commitDto(commit);
  };

  return {
    findAll,
    findOne,
  };
};

module.exports = Service;
