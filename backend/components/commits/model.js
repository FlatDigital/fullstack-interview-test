const Model = (GitHubRepository) => {
  const findAllCommits = async (repositoryName, branchName) => {
    const ghRepo = GitHubRepository(repositoryName);
    return await ghRepo.commits();
  };
  return {
    findAllCommits,
  };
};

module.exports = Model;
