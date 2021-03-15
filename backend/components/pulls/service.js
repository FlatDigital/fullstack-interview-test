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

  const createPull = async (repositoryName, { title, body, head, base }) => {
    return { repositoryName, title, body, head, base };
  };

  const createMerge = async (repositoryName, { head, base }) => {
    return { repositoryName, head, base };
  };

  return {
    findAll,
    compareBranches,
    createPull,
    createMerge,
  };
};

module.exports = Service;
