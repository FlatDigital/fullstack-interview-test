import React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '../../components';
import { useRequest } from '../../hooks';
import { getBranches } from '../../api';

const Branches = () => {
  const { repositoryName } = useParams();
  const { data, loading, error } = useRequest(getBranches, repositoryName);

  return (
    <div className="branches">
      {loading && <h1>Cargando</h1>}
      {error && <p>{error.message}</p>}
      {data &&
        data.map(({ commit, name }) => <Card commit={commit} name={name} />)}
    </div>
  );
};

export default Branches;
