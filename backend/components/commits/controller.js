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

  return {
    findAll,
  };
};

module.exports = Controller;
