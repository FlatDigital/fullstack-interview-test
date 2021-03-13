const Controller = (service) => {
  const findAll = async (req, res, next) => {
    const { repositoryName, branchName } = req.params;
    try {
      const retrievedCommits = await service.findAll(
        repositoryName,
        branchName
      );
      return res.status(200).json(retrievedCommits);
    } catch (error) {
      return next(error);
    }
  };

  const findOne = async (req, res, next) => {
    const { repositoryName, commitSha } = req.params;
    try {
      const retrievedCommit = await service.findOne(repositoryName, commitSha);
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
