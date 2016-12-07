import React from 'react';


const BoardCell = ({ sign, onClick }) => {
  const onClickWrapper = () => !sign && onClick();

  return (
    <div className="col s4 board-cell valign-wrapper" style={{ border: 'solid' }} onClick={onClickWrapper}>
      <div className="valign">
        {sign || '-'}
      </div>
    </div>
  )
};

export default BoardCell;
