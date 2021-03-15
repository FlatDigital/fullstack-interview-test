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

  const createPull = async ({
    author,
    repositoryName,
    title,
    body,
    head,
    base,
  }) => {
    return { author, repositoryName, title, body, head, base };
  };

  return {
    findAll,
    compareBranches,
    createPull,
  };
};

module.exports = Service;
