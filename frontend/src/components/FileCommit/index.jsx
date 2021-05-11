import React from 'react';
import './styles.css';

const LineRow = ({ line, idx }) => {
  let showNumberLineLeft = true;
  let showNumberLineRight = true;
  const left = typeof line === 'string' ? line : line[0];
  const right = typeof line === 'string' ? line : line[1];

  if (left === '' || left === ' ') {
    showNumberLineLeft = false;
  }

  if (right === '' || right === ' ') {
    showNumberLineRight = false;
  }

  return (
    <tr className="fileCommit__row">
      <td className={left.indexOf('-') === 0 ? 'removed-line' : ''}>
        <span>{showNumberLineLeft && idx}</span>
        <span>{left}</span>
      </td>
      <td className={right.indexOf('+') === 0 ? 'added-line' : ''}>
        <span>{showNumberLineRight && idx}</span>
        <span>{right}</span>
      </td>
    </tr>
  );
};

const FileCommit = ({ file }) => {
  const splitedLinesFile = file.patch ? file.patch.split('\n') : [];
  const linesFile = [];

  splitedLinesFile.forEach((element, idx) => {
    const row = [];

    if (element.indexOf('-') === 0) {
      row[0] = element;
      row[1] = '';
      linesFile[idx] = row;
      return;
    }

    if (element.indexOf('+') === 0) {
      if (splitedLinesFile[idx - 1].indexOf('-') === 0) {
        linesFile[idx - 1][1] = element;
      } else {
        row[0] = '';
        row[1] = element;
        linesFile[idx] = row;
      }
      return;
    }

    linesFile[idx] = element;
  });

  return (
    <div className="fileCommit card">
      <p className="fileCommit__file">{file.filename}</p>

      <table className="fileCommit__table">
        <tbody className="fileCommit__body">
          {linesFile.map((line, idx) => (
            <LineRow key={idx} line={line} idx={idx} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FileCommit;
