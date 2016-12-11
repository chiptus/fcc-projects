import React from 'react';

import Board from './lib/board';

import BoardView from './comps/board-view';
import Menu from './comps/menu';
import Won from './comps/won';

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
      isWon: '',
    };

    this.onClickCell = this.onClickCell.bind(this);
    this.newOnePlayerGame = this.newOnePlayerGame.bind(this);
    this.newTwoPlayersGame = this.newTwoPlayersGame.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  onClickCell(index) {
    if (!this.state.active ||
      (this.state.player === PLAYERS.PLAYER_B && this.state.type === GAME_TYPES.COMPUTER)) {
      return;
    }
    const value = (this.state.player === PLAYERS.PLAYER_A) ? 'X' : 'O';
    if (!this.game.setCell(value, index)) {
      return;
    }
    this.setState({ signs: this.game.getCells() });
    if (this.game.checkVictory(value)) {
      this.setState({ player: `${this.state.player} Won`, active: false, isWon: this.state.player });
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

  newGame(type = GAME_TYPES.TWO_PLAYERS) {
    this.game = new Board();
    this.setState({
      player: PLAYERS.PLAYER_A,
      type,
      signs: this.game.getCells(),
      active: true,
      isWon: '',
    });
  }

  newOnePlayerGame() {
    this.newGame(GAME_TYPES.COMPUTER);
  }

  newTwoPlayersGame() {
    this.newGame();
  }

  restartGame() {
    return this.newGame(this.state.type);
  }

  render() {
    return (
      <div className="center">
        {
          !this.state.isWon ?
            (
              <div>
                <h3>{this.state.player}</h3>
                <BoardView signs={this.state.signs} onClickCell={this.onClickCell} />
                <Menu
                  newOnePlayerGame={this.newOnePlayerGame}
                  newTwoPlayersGame={this.newTwoPlayersGame}
                />
              </div>
            ) :
            (
              <div className="center valign-wrapper" style={{ height: '100vh' }}>
                <Won name={this.state.isWon} restartGame={this.restartGame} />
              </div>
            )
        }
      </div>
    );
  }

}

App.propTypes = {
  game: React.PropTypes.instanceOf(Board),
  newGame: React.PropTypes.func,
};
