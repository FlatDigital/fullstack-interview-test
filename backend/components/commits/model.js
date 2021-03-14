const Model = (GitHubRepository) => {
  const findAllCommits = async (repositoryName, branchName) => {
    const ghRepo = GitHubRepository(repositoryName);
    return await ghRepo.commits(branchName);
  };

  const findOneCommit = async (repositoryName, commitSha) => {
    const ghRepo = GitHubRepository(repositoryName);
    return await ghRepo.commit(commitSha);
  };
  return {
    findAllCommits,
    findOneCommit,
  };
};

module.exports = Model;
