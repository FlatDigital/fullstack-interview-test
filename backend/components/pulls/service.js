const { pullsDto, compareBranchesDto, updatePullDto } = require('./pulls.dto');

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

  const createPull = async (
    repositoryName,
    { username, title, body, head, base }
  ) => {
    const createdPull = await model.createPull(repositoryName, {
      title,
      body,
      head: `${username}:${head}`,
      base,
    });
    return createdPull;
  };

  const createMerge = async (repositoryName, { head, base }) => {
    const createdMerge = await model.createMerge(repositoryName, {
      head,
      base,
    });
    return createdMerge;
  };

  const updatePull = async (repositoryName, number, state) => {
    let newState = 'open';
    if (state === 'open') newState = 'closed';
    const updatedPull = await model.updatePull(
      repositoryName,
      number,
      newState
    );
    return updatePullDto(updatedPull);
  };

  return {
    findAll,
    compareBranches,
    createPull,
    createMerge,
    updatePull,
  };
};

module.exports = Service;
