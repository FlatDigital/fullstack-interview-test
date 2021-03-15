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
    const ghRepo = GitHubRepository(repositoryName);
    return await ghRepo.merge({ base, head });
  };

  const updatePull = async (repositoryName, number, state) => {
    const ghPr = GitHubPull(repositoryName, number);
    return await ghPr.update({ state });
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
