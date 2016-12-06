import React from 'react';

import BoardCell from './board-cell';

const Board = ({ signs }) => (
  <div className="center-align">
    <div className="row">
      {
        signs.map((sign, i) => (
          <BoardCell sign={sign} key={i} />
        ))
      }
    </div>
  </div>
);


export default Board;
