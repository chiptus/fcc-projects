import React from 'react';

const Menu = ({ newOnePlayerGame, newTwoPlayersGame }) => (
  <div>
    <div>
      <button className="btn" onClick={newOnePlayerGame} >Play against the computer</button>
    </div>
    <div>
      <button className="btn" onClick={newTwoPlayersGame} >New Two Players Game</button>
    </div>
  </div>
);

Menu.propTypes = {
  newOnePlayerGame: React.PropTypes.func,
  newTwoPlayersGame: React.PropTypes.func,
};

export default Menu;
