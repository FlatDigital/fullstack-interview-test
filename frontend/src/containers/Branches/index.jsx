import React from 'react';
import { Link, useParams } from 'react-router-dom';
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
      <div className="branches__btnsPulls">
        <Link to={`/${author}/${repositoryName}/pulls`}>Ver Pulls</Link>
        <Link to={`/${author}/${repositoryName}/pulls/new`}>Nuevo Pull</Link>
      </div>
      {loading && !data && <Loading />}
      {error && <p>{error.message}</p>}
      {data &&
        data.map(({ commit, name }) => (
          <CardBranch
            key={commit}
            commit={commit}
            name={name}
            to={`/${author}/${repositoryName}/${name.replace('/', '%2F')}`}
          />
        ))}
    </div>
  );
};

export default Branches;
