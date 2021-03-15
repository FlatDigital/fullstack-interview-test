const Model = (GitHubRepository) => {
  const findAllPulls = async (repositoryName, { state }) => {
    const ghRepo = GitHubRepository(repositoryName);
    return await ghRepo.prs(state);
  };

  const compareBranches = async (repositoryName, base, compare) => {
    console.log(repositoryName);
    const ghRepo = GitHubRepository(repositoryName);
    return await ghRepo.compare(base, compare);
  };

  return {
    findAllPulls,
    compareBranches,
  };
};

module.exports = Model;
