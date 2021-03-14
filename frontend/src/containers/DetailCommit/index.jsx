import React from 'react';
import { useParams } from 'react-router-dom';
import { CardCommit } from '../../components';
import { useRequest } from '../../hooks';
import { getcommit } from '../../api';
import './styles.css';

const DetailCommit = () => {
  const { author, repositoryName, branchName } = useParams();
  const { data, loading, error } = useRequest(getcommit, {
    repositoryName,
    branchName,
  });

  return (
    <div className="deatilCommit">
      {loading && <h1>Cargando</h1>}
      {error && <p>{error.message}</p>}
      {data && <CardCommit data={data} />}
    </div>
  );
};

export default DetailCommit;
