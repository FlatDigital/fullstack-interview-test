const branchesDto = (resources) => {
  return resources.map((resource) => ({
    name: resource.name,
    commit: resource.commit.sha,
    protected: resource.protected,
  }));
};

module.exports = {
  branchesDto,
};
