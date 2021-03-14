import React from 'react';
import { useParams } from 'react-router-dom';
import { CardCommits } from '../../components';
import { useRequest } from '../../hooks';
import { getcommits } from '../../api';

const Commits = () => {
  const { author, repositoryName, branchName } = useParams();
  const { data, loading, error } = useRequest(getcommits, {
    repositoryName,
    branchName,
  });

  return (
    <div className="branches">
      {loading && <h1>Cargando</h1>}
      {error && <p>{error.message}</p>}
      {data &&
        data.map(({ author: commitAuthor, message, date, sha }) => (
          <CardCommits
            author={commitAuthor}
            message={message}
            date={date}
            to={`/${author}/${repositoryName}/${branchName}/${sha}`}
          />
        ))}
    </div>
  );
};

export default Commits;
