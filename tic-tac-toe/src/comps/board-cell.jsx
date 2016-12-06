import React from 'react';

const BoardCell = ({sign}) => (
  <div className="col s4 board-cell valign-wrapper" style={{ border: 'solid' }}>
    <div className="valign">
      {sign || '-'}
    </div>
  </div>
);

export default BoardCell;
