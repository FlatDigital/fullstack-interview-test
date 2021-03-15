const pullsDto = (resource) => {
  return resource.map((resource) => ({
    title: resource.title,
    number: resource.number,
    author: resource.user.login,
    date: resource.created_at,
    description: resource.body,
    state: resource.state,
    merged: resource.merged_at,
  }));
};

module.exports = { pullsDto };
