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

  const compareBranches = async (req, res, next) => {
    const { author, repositoryName, base, compare } = req.params;
    try {
      const comparedBranches = await service.compareBranches(
        `${author}/${repositoryName}`,
        base,
        compare
      );
      return res.status(200).json(comparedBranches);
    } catch (error) {
      return next(error);
    }
  };

  const createPull = async (req, res, next) => {
    const { author, repositoryName } = req.params;
    const { title, body, head, base } = req.body;
    try {
      const createdPull = await service.createPull(
        `${author}/${repositoryName}`,
        {
          username: author,
          title,
          body,
          head,
          base,
        }
      );
      return res.status(200).json(createdPull);
    } catch (error) {
      return next(error);
    }
  };

  const createMerge = async (req, res, next) => {
    const { author, repositoryName } = req.params;
    const { head, base } = req.body;
    try {
      const createdMerge = await service.createMerge(
        `${author}/${repositoryName}`,
        {
          head,
          base,
        }
      );
      return res.status(200).json(createdMerge);
    } catch (error) {
      return next(error);
    }
  };

  const updatePull = async (req, res, next) => {
    const { author, repositoryName, number } = req.params;
    const { state } = req.body;
    try {
      const updatedPull = await service.updatePull(
        `${author}/${repositoryName}`,
        number,
        state
      );
      return res.status(200).json(updatedPull);
    } catch (error) {
      return next(error);
    }
  };

  return {
    findAll,
    compareBranches,
    createPull,
    createMerge,
    updatePull,
  };
};

module.exports = Controller;
