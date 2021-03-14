import React from 'react';
import { useParams } from 'react-router-dom';
import { CardCommits, Loading } from '../../components';
import { useRequest } from '../../hooks';
import { getcommits } from '../../api';

const Commits = () => {
  const { author, repositoryName, branchName } = useParams();
  const { data, loading, error } = useRequest(getcommits, {
    author,
    repositoryName,
    branchName,
  });

  return (
    <div className="branches">
      <h1 className="braches__title">
        <p>
          {author}/{repositoryName}
        </p>
        <p>branch: {branchName}</p>
      </h1>
      {loading && !data && <Loading />}
      {error && <p>{error.message}</p>}
      {data &&
        data.map(({ author: commitAuthor, message, date, sha, verified }) => (
          <CardCommits
            key={sha}
            author={commitAuthor}
            message={message}
            date={date}
            verified={verified}
            to={`/${author}/${repositoryName}/${branchName}/${sha}`}
          />
        ))}
    </div>
  );
};

export default Commits;
