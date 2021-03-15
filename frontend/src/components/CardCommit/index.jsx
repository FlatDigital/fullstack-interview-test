import React from 'react';
import { FileCommit } from '../';
import { getDate } from '../../utils/index';
import './styles.css';

const CardCommit = ({ data }) => {
  const {
    author,
    message,
    date,
    total,
    additions,
    deletions,
    verified,
    files,
  } = data;
  return (
    <>
      <div className="cardCommit card">
        <div>
          <p className="cardCommits__message">{message}</p>
          <p>
            <span className="cardCommits__author">{author}</span>
            <span className="cardCommits__date">
              {' '}
              commited on {getDate(date)}
            </span>
          </p>
          <p className="cardCommits__changes">
            Showing <span>{total}</span> changes with <span>{additions}</span> additions
            and <span>{deletions}</span> deletions.
          </p>
        </div>
        <p className={`cardCommits__${verified ? 'verified' : 'unverified'}`}>
          {verified ? 'Verified' : 'Unverified'}
        </p>
      </div>
      {files.map((file) => (
        <FileCommit file={file} />
      ))}
    </>
  );
};
export default CardCommit;
