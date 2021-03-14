import React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '../../components';
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
      <h1 className="braches__title">{repositoryName}</h1>
      {loading && <h1>Cargando</h1>}
      {error && <p>{error.message}</p>}
      {data &&
        data.map(({ commit, name }) => (
          <Card
            commit={commit}
            name={name}
            to={`/${author}/${repositoryName}/${name}`}
          />
        ))}
    </div>
  );
};

export default Branches;
