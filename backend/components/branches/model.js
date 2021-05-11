const Model = (GitHubRepository) => {
  const findAllBranches = async (repositoryName) => {
    const ghRepo = GitHubRepository(repositoryName);
    return await ghRepo.branches();
  };
  return {
    findAllBranches,
  };
};

module.exports = Model;
