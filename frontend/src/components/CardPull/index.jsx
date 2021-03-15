import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { updatePull } from '../../api';
import { getDate } from '../../utils';
import './styles.css';

const CardPull = ({ data }) => {
  const { author: own, repositoryName } = useParams();
  const { title, number, author, description, date, state, merged } = data;
  const [pullState, setPullState] = useState(state);
  const onClickHandleState = () => {
    updatePull({ author: own, repositoryName, state: pullState, number })
      .then((state) => {
        setPullState(state);
      })
      .catch((err) => {
        alert(err?.message);
      });
  };

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
        <div className="cardPull__description">
          {description === ''
            ? "This pull request don't have description"
            : null}
          {description &&
            description.split('\n').map((line) => <p key={line}>{line}</p>)}
        </div>
      </div>
      <button
        onClick={onClickHandleState}
        className={`cardPull__status-${pullState}`}
      >
        {pullState}
      </button>
      {merged && <button className="cardPull__status-merged">Merged</button>}
    </div>
  );
};

export default CardPull;
