import React from 'react';
import { useParams } from 'react-router-dom';
import { CardCommit, Loading } from '../../components';
import { useRequest } from '../../hooks';
import { getcommit } from '../../api';
import './styles.css';

const DetailCommit = () => {
  const { author, repositoryName, branchName, commitSha } = useParams();
  const { data, loading, error } = useRequest(getcommit, {
    author,
    repositoryName,
    branchName,
    commitSha,
  });

  return (
    <div className="deatilCommit branches">
      <h1 className="braches__title">
        <p>
          {author}/{repositoryName}
        </p>
        <p>branch: {branchName}</p>
        <p>commit: {commitSha}</p>
      </h1>
      {loading && !data && <Loading />}
      {error && <p>{error.message}</p>}
      {data && <CardCommit data={data} />}
    </div>
  );
};

export default DetailCommit;
