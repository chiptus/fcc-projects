import React from 'react';

const Menu = ({ turn, newOnePlayerGame, newTwoPlayersGame }) => (
  <div>
    <div>{turn}</div>
    <button onClick={newOnePlayerGame} >Play against the computer</button>
    <button onClick={newTwoPlayersGame} >New Two Players Game</button>
  </div>
);

Menu.propTypes = {
  turn: React.PropTypes.string,
  newOnePlayerGame: React.PropTypes.func,
  newTwoPlayersGame: React.PropTypes.func,
};

export default Menu;
