import React from 'react';

const Menu = ({ turn, newGame }) => (
  <div>
    <div>{turn}</div>
    <button onClick={newGame} >New Game</button>
  </div>
);

Menu.propTypes = {
  turn: React.PropTypes.string,
  newGame: React.PropTypes.func,
};

export default Menu;
