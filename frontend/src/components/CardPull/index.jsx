import React from 'react';
import { getDate } from '../../utils';
import './styles.css';

const CardPull = ({ data }) => {
  const { title, number, author, description, date, state, merged } = data;
  return (
    <div className="card cardPull">
      <div className="cardPull__container">
        <p className="cardPull__title">{title}</p>
        <p className="cardPull__details">
          <span>#{number} </span>
          by
          <span> {author} </span>
          was merged on
          <span> {getDate(date)} </span>
        </p>
        <p className="cardPull__description">
          {description === ''
            ? "This pull request don't have description"
            : null}
          {description && description.split('\n').map((line) => <p>{line}</p>)}
        </p>
      </div>
      <button className={`cardPull__status-${state}`}>{state}</button>
      {merged && <button className="cardPull__status-merged">Merged</button>}
    </div>
  );
};

export default CardPull;
