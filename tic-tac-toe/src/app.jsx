import React from 'react';

import BoardView from './comps/board-view';
import Board from './lib/board';
import Menu from './comps/menu';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.game = new Board();
    this.state = { turn: 'Player', signs: this.game.getCells() };
    this.onClickCell = this.onClickCell.bind(this);
    this.newGame = this.newGame.bind(this);
  }

  onClickCell(val, index) {
    if (this.state.turn !== 'Player') {
      return;
    }
    if (!this.game.setCell(val, index)) {
      return;
    }
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
    this.game = new Board();
    this.setState({ turn: 'Player', signs: this.game.getCells() });
  }

  render() {
    return (
      <div className="center">
        <BoardView signs={this.state.signs} onClickCell={this.onClickCell} />
        <Menu turn={this.state.turn} newGame={this.newGame} />
      </div>
    );
  }

}

App.propTypes = {
  game: React.PropTypes.instanceOf(Board),
  newGame: React.PropTypes.func,
};
