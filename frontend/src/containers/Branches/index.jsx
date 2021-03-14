import React from 'react';
import { useParams } from 'react-router-dom';
import { CardBranch, Loading } from '../../components';
import { useRequest } from '../../hooks';
import { getBranches } from '../../api';
import './styles.css';

const Branches = () => {
  const { author, repositoryName } = useParams();
  const { data, loading, error } = useRequest(getBranches, {
    author,
    repositoryName,
  });

  return (
    <div className="branches">
      <h1 className="braches__title">
        {author}/{repositoryName}
      </h1>
      {loading && !data && <Loading />}
      {error && <p>{error.message}</p>}
      {data &&
        data.map(({ commit, name }) => (
          <CardBranch
            key={commit}
            commit={commit}
            name={name}
            to={`/${author}/${repositoryName}/${name}`}
          />
        ))}
    </div>
  );
};

export default Branches;
