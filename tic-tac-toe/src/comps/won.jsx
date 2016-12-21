import React from 'react';

const Won = ({ params, router }) => {
  function restartGame() {
    router.push('/');
  }
  const name = params.name;
  return (
    <div className="won">
      {
        name !== "TIE" ? (<h1>{params.name} Won</h1>)
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
