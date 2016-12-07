import React from 'react';

import BoardCell from './board-cell';

const BoardView = ({ signs, onClickCell }) => (
  <div className="board center-align">
    <div className="row">
      {
        signs.map((sign, i) => (
          <BoardCell sign={sign} onClick={() => onClickCell('X', i)} key={i} />
        ))
      }
    </div>
  </div>
);


BoardView.propTypes = {
  signs: React.PropTypes.arrayOf(React.PropTypes.string),
  onClickCell: React.PropTypes.func,
};

export default BoardView;
