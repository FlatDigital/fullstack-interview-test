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

const compareBranchesDto = (resource) => {
  return {
    files: resource.files.map((file) => ({
      sha: file.sha,
      filename: file.filename,
      status: file.status,
      additions: file.additions,
      deletions: file.deletions,
      changes: file.changes,
      patch: file.patch,
    })),
  };
};

const updatePullDto = (resource) => ({
  state: resource.state,
});

module.exports = { pullsDto, compareBranchesDto, updatePullDto };
