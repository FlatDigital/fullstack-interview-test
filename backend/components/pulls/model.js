const Model = (GitHubRepository) => {
  const findAllPulls = async (repositoryName, { state }) => {
    const ghRepo = GitHubRepository(repositoryName);
    return await ghRepo.prs(state);
  };

  return {
    findAllPulls,
  };
};

module.exports = Model;
