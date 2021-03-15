const Model = (GitHubRepository, GitHubPull) => {
  const findAllPulls = async (repositoryName, { state }) => {
    const ghRepo = GitHubRepository(repositoryName);
    return await ghRepo.prs(state);
  };

  const compareBranches = async (repositoryName, base, compare) => {
    const ghRepo = GitHubRepository(repositoryName);
    return await ghRepo.compare(base, compare);
  };

  const createPull = async (repositoryName, { title, body, head, base }) => {
    const ghRepo = GitHubRepository(repositoryName);
    return await ghRepo.createPr({ title, body, head, base });
  };

  const createMerge = async (repositoryName, { head, base }) => {
    return { repositoryName, head, base };
  };

  const updatePull = async (repositoryName, number, state) => {
    const ghPr = GitHubPull(repositoryName, number);
    const updatedPull = ghPr.update({ state });
    return updatedPull;
  };

  return {
    findAllPulls,
    compareBranches,
    createPull,
    createMerge,
    updatePull,
  };
};

module.exports = Model;
