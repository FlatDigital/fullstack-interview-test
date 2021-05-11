const commitsDto = (resources) => {
  return resources.map((resource) => ({
    sha: resource.sha,
    author: resource.commit.author.name,
    message: resource.commit.message,
    verified: resource.commit.verification.verified,
    date: resource.commit.author.date,
  }));
};

const commitDto = (resource) => {
  return {
    author: resource.commit.author.name,
    author_email: resource.commit.author.email,
    message: resource.commit.message,
    date: resource.commit.author.date,
    verified: resource.commit.verification.verified,
    sha: resource.sha,
    total: resource.stats.total,
    additions: resource.stats.additions,
    deletions: resource.stats.deletions,
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

module.exports = { commitsDto, commitDto };
