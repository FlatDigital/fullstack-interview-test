import React from 'react';
import { FileCommit } from '../';
import './styles.css';

const CardCommit = ({ data }) => {
  const { author, message, date, total, additions, deletions, files } = data;
  return (
    <div className="cardCommit">
      <div className="cardCommit__header">
        <h2 className="cardCommit__author">{author}</h2>
        <p className="cardCommit_message">{message}</p>
        <p>{date}</p>
        <p>
          Mostrando {total} archivos cambiados con {additions} agregados y{' '}
          {deletions} eliminados
        </p>
      </div>
      <div>
        {files.map((file) => (
          <FileCommit file={file} />
        ))}
      </div>
    </div>
  );
};
export default CardCommit;
