const { branchesDto } = require('./branches.dto');

const Service = (model) => {
  const findAll = async (repositoryName) => {
    const branches = await model.findAllBranches(repositoryName);
    return branchesDto(branches);
  };

  return {
    findAll,
  };
};

module.exports = Service;
