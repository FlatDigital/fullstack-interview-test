import React from 'react';
import { Link } from 'react-router-dom';
import { getDate } from '../../utils';
import './styles.css';

const CardCommits = ({ author, message, date, verified, to }) => {
  return (
    <div className="cardCommits card">
      <div>
        <Link className="cardCommits__message" to={to}>
          {message}
        </Link>

        <p>
          <span className="cardCommits__author">{author}</span>
          <span className="cardCommits__date">
            {' '}
            commited on {getDate(date)}
          </span>
        </p>
      </div>
      <p className={`cardCommits__${verified ? 'verified' : 'unverified'}`}>
        {verified ? 'Verified' : 'Unverified'}
      </p>
    </div>
  );
};

export default CardCommits;
