const Controller = (service) => {
  const findAll = async (req, res, next) => {
    const { author, repositoryName, branchName } = req.params;
    try {
      const retrievedCommits = await service.findAll(
        `${author}/${repositoryName}`,
        branchName
      );
      return res.status(200).json(retrievedCommits);
    } catch (error) {
      return next(error);
    }
  };

  const findOne = async (req, res, next) => {
    const { author, repositoryName, commitSha } = req.params;
    try {
      const retrievedCommit = await service.findOne(
        `${author}/${repositoryName}`,
        commitSha
      );
      return res.status(200).json(retrievedCommit);
    } catch (error) {
      return next(error);
    }
  };

  return {
    findAll,
    findOne,
  };
};

module.exports = Controller;
