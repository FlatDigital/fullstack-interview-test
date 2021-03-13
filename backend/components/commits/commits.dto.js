const commitsDto = (resources) => {
  return resources.map((resource) => ({
    sha: resource.sha,
    author: resource.commit.author.name,
    message: resource.commit.message,
    verified: resource.commit.verification.verified,
    date: resource.commit.author.date,
  }));
};

module.exports = { commitsDto };
