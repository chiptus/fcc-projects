import React from 'react';

import BoardCell from './board-cell';

const Board = ({ signs, onClickCell }) => (
  <div className="center-align">
    <div className="row">
      {
        signs.map((sign, i) => (
          <BoardCell sign={sign} onClick={() => onClickCell(i, 'X')} key={i} />
        ))
      }
    </div>
  </div>
);


export default Board;
