const Controller = (service) => {
  const findAll = async (req, res, next) => {
    const { author, repositoryName } = req.params;
    const { state } = req.query;
    try {
      const retrievedPulls = await service.findAll(
        `${author}/${repositoryName}`,
        { state }
      );
      return res.status(200).json(retrievedPulls);
    } catch (error) {
      return next(error);
    }
  };

  return {
    findAll,
  };
};

module.exports = Controller;
