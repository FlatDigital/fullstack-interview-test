import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const CardCommits = ({ author, message, date, sha }) => {
  return (
    <div className="cardCommits">
      <p>{author}</p>
      <p>{message}</p>
      <p>{date}</p>
      <Link to={`/${sha}`}>Ver Commit</Link>
    </div>
  );
}

export default CardCommits; 