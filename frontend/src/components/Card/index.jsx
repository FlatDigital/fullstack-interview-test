import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Card = ({ commit, name }) => {
  return (
    <div>
      <p>{name}</p>
      <Link to={`/commit/${commit}`} />
    </div>
  );
};

export default Card;
