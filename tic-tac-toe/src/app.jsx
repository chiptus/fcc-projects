import React from 'react';

import BoardView from './comps/board-view';
import Board from './lib/board';
import Menu from './comps/menu';

import GAME_TYPES from './constants/game-types';
import PLAYERS from './constants/players';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.game = new Board();
    this.state = {
      player: PLAYERS.PLAYER_A,
      type: GAME_TYPES.TWO_PLAYERS,
      signs: this.game.getCells(),
      active: true,
    };
    this.onClickCell = this.onClickCell.bind(this);
    this.newGame = this.newGame.bind(this);
  }

  onClickCell(val, index) {
    if (!this.state.active ||
      (this.state.player === PLAYERS.PLAYER_B && this.state.type === GAME_TYPES.COMPUTER)) {
      return;
    }
    const value = (this.state.player === PLAYERS.PLAYER_A) ? 'X' : 'O';
    if (!this.game.setCell(value, index)) {
      return;
    }
    this.setState({ signs: this.game.getCells() });
    if (this.game.checkVictory(val)) {
      this.setState({ player: `${this.state.player} Won`, active: false });
      return;
    }
    this.changePlayer();
  }

  changePlayer() {
    if (this.state.player === PLAYERS.PLAYER_B) {
      this.setState({ player: PLAYERS.PLAYER_A });
      return;
    }
    this.setState({ player: PLAYERS.PLAYER_B });
    if (this.state.type === GAME_TYPES.COMPUTER) {
      this.makeComputerStep();
    }
  }

  makeComputerStep() {
    this.game.setRandomCell('O');
    if (this.game.checkVictory('O')) {
      this.setState({ player: 'Computer Won', active: false });
      return;
    }
    this.setState({ player: PLAYERS.PLAYER_A, signs: this.game.getCells() });
  }

  newGame() {
    this.game = new Board();
    this.setState({
      player: PLAYERS.PLAYER_A,
      type: GAME_TYPES.TWO_PLAYERS,
      signs: this.game.getCells(),
      active: true,
    });
  }

  render() {
    return (
      <div className="center">
        <BoardView signs={this.state.signs} onClickCell={this.onClickCell} />
        <Menu turn={this.state.player} newGame={this.newGame} />
      </div>
    );
  }

}

App.propTypes = {
  game: React.PropTypes.instanceOf(Board),
  newGame: React.PropTypes.func,
};
