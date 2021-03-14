import React from 'react';
import { Link } from 'react-router-dom';
import { getDate } from '../../utils';
import './styles.css';

const CardCommits = ({ author, message, date, to }) => {
  getDate(date);
  return (
    <div className="cardCommits">
      <p className="cardCommits__author">{author}</p>
      <p className="cardCommits__message">{message}</p>
      <p>{getDate(date)}</p>
      <Link to={to}>Ver Commit</Link>
    </div>
  );
};

export default CardCommits;
