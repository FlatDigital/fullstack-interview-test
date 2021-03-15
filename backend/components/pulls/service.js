const { pullsDto, compareBranchesDto } = require('./pulls.dto');

const Service = (model) => {
  const findAll = async (repositoryName, { state }) => {
    const pulls = await model.findAllPulls(repositoryName, { state });
    return pullsDto(pulls);
  };

  const compareBranches = async (repositoryName, base, compare) => {
    const comparedBranches = await model.compareBranches(
      repositoryName,
      base,
      compare
    );
    return compareBranchesDto(comparedBranches);
  };

  return {
    findAll,
    compareBranches,
  };
};

module.exports = Service;
