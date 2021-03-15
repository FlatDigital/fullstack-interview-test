const { pullsDto } = require('./pulls.dto');

const Service = (model) => {
  const findAll = async (repositoryName, { state }) => {
    const pulls = await model.findAllPulls(repositoryName, { state });
    return pullsDto(pulls);
  };

  return {
    findAll,
  };
};

module.exports = Service;
