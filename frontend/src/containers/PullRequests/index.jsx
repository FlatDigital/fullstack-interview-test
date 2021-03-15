import React from 'react';
import { useParams } from 'react-router-dom';
import { CardPull, Loading } from '../../components';
import { getPulls } from '../../api';
import { useRequest } from '../../hooks';
import './styles.css';

const PullRequests = () => {
  const { author, repositoryName } = useParams();
  const { data, loading, error } = useRequest(getPulls, {
    author,
    repositoryName,
    query: { state: 'all' },
  });

  return (
    <div className="page">
      <h1 className="page__title">
        {author}/{repositoryName}
      </h1>
      {loading && !data && <Loading />}
      {data && data.map((pull) => <CardPull data={pull} />)}
    </div>
  );
};

export default PullRequests;
