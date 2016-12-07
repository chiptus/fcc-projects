import React from 'react';

import BoardCell from './board-cell';

const Board = ({ signs, onClickCell }) => (
  <div className="board center-align">
    <div className="row">
      {
        signs.map((sign, i) => (
          <BoardCell sign={sign} onClick={() => onClickCell(i, 'X')} key={i} />
        ))
      }
    </div>
  </div>
);


Board.propTypes = {
  signs: React.PropTypes.arrayOf(React.PropTypes.string),
  onClickCell: React.PropTypes.func,
};

export default Board;
