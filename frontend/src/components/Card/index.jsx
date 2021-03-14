import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Card = ({ commit, name, to }) => {
  return (
    <div className="cardBranch">
      <h3>{name}</h3>
      <Link to={to}>Ver Commits</Link>
    </div>
  );
};

export default Card;
