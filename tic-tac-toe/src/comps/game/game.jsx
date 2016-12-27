import React from 'react';

import BoardView from './board-view';

import GAME_TYPES from '../../constants/game-types';
import PLAYERS from '../../constants/players';
import SIGNS from '../../constants/signs';

import Board from '../../lib/board';
import { buildPlayerAndComputer } from '../../lib/player';
import { convertObjectToQueryString } from '../../lib/utils';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.game = new Board();

    this.players = buildPlayerAndComputer(this.props.location.query.name,
      this.props.location.query.symbol);


    this.state = {
      type: GAME_TYPES.COMPUTER,
      signs: this.game.getCells(),
      active: true,
      isWon: '',
      player: this.players[SIGNS.X],
    };

    this.onClickCell = this.onClickCell.bind(this);
    this.newGame = this.newGame.bind(this);
  }


  onClickCell(index) {
    if (!this.state.active ||
      (this.state.player.type === PLAYERS.COMPUTER)) {
      return;
    }
    this.play(index);
  }

  won(name) {
    setTimeout(() => {
      this.props.router.push(
        `/won/${name}?${convertObjectToQueryString(this.players.player)}`
      );
    }, 500);
  }

  play(index) {
    const symbol = this.state.player.symbol;
    if (!this.game.setCell(symbol, index)) {
      return;
    }
    this.setState({ signs: this.game.getCells() });
    if (this.game.checkVictory(symbol)) {
      this.won(this.state.player.name);
      return;
    }
    if (this.game.full()) {
      this.won("TIE");
      return;
    }
    this.changePlayer();
  }

  changePlayer() {
    const sign = this.state.player.symbol === SIGNS.X ?
      SIGNS.O : SIGNS.X;
    this.setState({ player: this.players[sign] }, () => {
      if (this.state.player.type === PLAYERS.COMPUTER) {
        this.makeComputerStep();
      }
    });
    return;
  }

  makeComputerStep() {
    setTimeout(() => {
      this.play(this.game.getRandomEmptyCell());
    }, 500);
  }

  newGame() {
    this.props.router.push(`/?${convertObjectToQueryString(this.players.player)}`);
  }

  render() {
    return (<div>
      <h3>{this.state.player.name}</h3>
      <BoardView signs={this.state.signs} onClickCell={this.onClickCell} />
      <div className="fixed-action-btn">
        <button onClick={this.newGame} className="btn-floating">Restart</button>
      </div>
    </div>
    );
  }
}

Game.propTypes = {
  location: React.PropTypes.instanceOf(Object),
  router: React.PropTypes.instanceOf(Object),
};
