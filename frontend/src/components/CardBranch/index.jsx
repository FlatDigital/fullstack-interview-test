import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const CardBranch = ({ commit, name, to }) => {
  return (
    <div className="cardBranch">
      <Link to={to}>{name}</Link>
    </div>
  );
};

export default CardBranch;
