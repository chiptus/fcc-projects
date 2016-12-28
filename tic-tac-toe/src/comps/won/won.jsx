import React from 'react';
import WIN_TYPES from '../../constants/win-types';

const Won = ({ location, params, router }) => {
  const text = params.name === WIN_TYPES.TIE ? `${params.name} Won` : 'This is a tie';
  const { name, symbol } = location.query;

  function restartGame() {
    router.push(`/?name=${name}&symbol=${symbol}`);
  }

  return (
    <div className="won">
      <h1>{text}</h1>
      <button className="btn" onClick={restartGame}>Restart Game</button>
    </div>
  );
};

// Won.propTypes = {
//   name: React.PropTypes.string.isRequired,
//   restartGame: React.PropTypes.func,
// };

export default Won;
