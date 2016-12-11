import React from 'react';

const Won = ({ name, restartGame }) => (
  <div className="won">
    <h1>{name} Won</h1>
    <button className="btn" onClick={restartGame}>Restart Game</button>
  </div>
);

Won.propTypes = {
  name: React.PropTypes.string.isRequired,
  restartGame: React.PropTypes.func,
};

export default Won;
