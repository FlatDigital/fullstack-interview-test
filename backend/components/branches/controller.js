const Controller = (service) => {
  const findAll = async (req, res, next) => {
    const { repositoryName } = req.params;
    try {
      const retrievedBranches = await service.findAll(repositoryName);
      return res.status(200).json(retrievedBranches);
    } catch (error) {
      return next(error);
    }
  };

  return {
    findAll,
  };
};

module.exports = Controller;
