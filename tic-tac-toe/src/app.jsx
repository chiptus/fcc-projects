import React from 'react';

import Board from './comps/board';
import Game from './lib/game';
import Menu from './comps/menu';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.onClickCell = this.onClickCell.bind(this);
    this.newGame = this.newGame.bind(this);
  }

  componentDidMount() {
    this.newGame();
  }

  onClickCell(index, val) {
    if (this.state.turn !== 'Player') {
      return;
    }
    this.game.setCell(index, val);
    this.setState({ signs: this.game.getCells() });
    if (this.game.checkVictory(val)) {
      this.setState({ turn: 'Player Won' });
      return;
    }
    this.setState({ turn: 'Computer' });
    this.makeComputerStep();
  }

  makeComputerStep() {
    this.game.setRandomCell("O");
    if (this.game.checkVictory("O")) {
      this.setState({ turn: 'Computer Won' });
      return;
    }
    this.setState({ turn: 'Player', signs: this.game.getCells() });
  }

  newGame() {
    this.game = new Game();
    this.setState({ turn: 'Player', signs: this.game.getCells() });
  }

  render() {
    return (
      <div>
        <Board signs={this.state.signs} onClickCell={this.onClickCell} />
        <Menu turn={this.state.turn} newGame={this.newGame} />
      </div>
    );
  }

}

App.propTypes = {
  game: React.PropTypes.instanceOf(Game),
  newGame: React.PropTypes.func,
};
