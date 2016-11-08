import React from 'react';

export default ({ buttons, onClickButton }) => (
  <div>
    <div className="row">
      {
        buttons.map(b => (
          <button className="btn col-sm-3" key={b.text} onClick={() => onClickButton(b)}>{b.text}</button>
        ))
      }
    </div>
  </div>
);

