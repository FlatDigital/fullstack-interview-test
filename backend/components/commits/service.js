const { commitsDto } = require('./commits.dto');

const Service = (model) => {
  const findAll = async (repositoryName, branchName) => {
    const commits = await model.findAllCommits(repositoryName, branchName);
    return commitsDto(commits);
  };

  return {
    findAll,
  };
};

module.exports = Service;
