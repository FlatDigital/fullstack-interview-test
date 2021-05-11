const Controller = (service) => {
  const findAll = async (req, res, next) => {
    const { author, repositoryName } = req.params;
    try {
      const retrievedBranches = await service.findAll(
        `${author}/${repositoryName}`
      );
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
