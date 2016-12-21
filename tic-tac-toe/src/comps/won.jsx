import React from 'react';

const Won = ({ location, params, router }) => {
  const winnerName = params.name;
  const { name, symbol } = location.query;

  function restartGame() {
    router.push(`/?name=${name}&symbol=${symbol}`);
  }

  return (
    <div className="won">
      {
        winnerName !== "TIE" ? (<h1>{winnerName} Won</h1>)
          : (<h1>This is a tie</h1>)
      }
      <button className="btn" onClick={restartGame}>Restart Game</button>
    </div>
  );
};

// Won.propTypes = {
//   name: React.PropTypes.string.isRequired,
//   restartGame: React.PropTypes.func,
// };

export default Won;
