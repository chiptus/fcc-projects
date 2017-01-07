import React, { PropTypes } from 'react';

import StrictButton from './control/strict-button';

const Control = ({ level, strict, newGame, wrongButton, toggleStrict, victory }) => {
  if (victory) {
    return (
      <div className="control">
        <div>
          <h4 className="victory">Victory</h4>
        </div>
      </div>
    );
  }
  if (wrongButton) {
    return (
      <div className="control">
        <div>
          <h4 className="wrong-button">Wrong Button</h4>
        </div>
      </div>
    );
  }
  return (
    <div className="control">
      <div className="row">
        <div className="col s4">
          Count: {level}
        </div>
        <div className="col s4">
          <button onClick={newGame}>New Game</button>
        </div>
        <div className="col s4">
          <StrictButton strict={strict} toggleStrict={toggleStrict} />
        </div>
      </div>
    </div>
  );
};

Control.propTypes = {
  level: PropTypes.number.isRequired,
  strict: PropTypes.bool.isRequired,
  newGame: PropTypes.func.isRequired,
  wrongButton: PropTypes.bool.isRequired,
  toggleStrict: PropTypes.func.isRequired,
  victory: PropTypes.bool.isRequired,
};

export default Control;
