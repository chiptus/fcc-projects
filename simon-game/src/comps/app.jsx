import React from 'react';

import StepsContainer from './steps/steps-container';
import Game from '../lib/game';
import Control from './control';

import steps from '../steps';

const WINNING_LEVEL = 20;

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.setGameVariables();
    this.state = {
      level: 1,
      strictGame: false,
      wrongButton: false,
      victory: false,
    };


    this.onClickStep = this.onClickStep.bind(this);
    this.newGame = this.newGame.bind(this);
    this.toggleStrict = this.toggleStrict.bind(this);
  }

  componentDidMount() {
    this.showNextSequence();
  }

  onClickStep(id) {
    const index = this.userSteps.push(id) - 1;
    this.playSound(id);
    this.checkStep(index);
  }

  setGameVariables() {
    this.game = new Game();
    this.userSteps = [];
    this.computerSteps = [];
  }

  newGame() {
    this.setGameVariables();
    this.gameRestarted = true;
    this.setState({
      level: 1,
      victory: false,
      wrongButton: false,
    });
    this.showNextSequence();
  }

  playSound(id) {
    steps[id].sound.play();
  }

  activateStep(id) {
    const stepTile = document.querySelector(`#step${id}`);
    stepTile.classList.add('active');
    this.playSound(id);
    setTimeout(() => {
      stepTile.classList.remove('active');
    }, 500);
  }

  showNextSequence() {
    this.computerSteps = this.game.generateStep();
    this.animateSequence();
  }

  animateSequence() {
    this.userSteps = [];
    let i = 0;
    const intervalId = setInterval(() => {
      this.activateStep(this.computerSteps[i]);
      i += 1;
      if (i >= this.computerSteps.length || this.gameRestarted) {
        clearInterval(intervalId);
        this.gameRestarted = false;
      }
    }, 1200);
  }

  checkStep(index) {
    if (this.userSteps[index] !== this.computerSteps[index]) {
      this.setState({
        wrongButton: true,
      }, () => {
        setTimeout(() => {
          if (this.state.strictGame) {
            this.newGame();
            return;
          }
          this.setState({ wrongButton: false });
          this.animateSequence();
        }, 500);
      });

      return;
    }
    if (this.userSteps.length === this.computerSteps.length) {
      if (this.state.level >= WINNING_LEVEL) {
        this.setState({
          victory: true,
        }, () => {
          setTimeout(() => {
            this.newGame();
          }, 1500);
        });
        return;
      }


      this.setState({
        level: this.state.level + 1,
      });
      this.showNextSequence();
      return;
    }
  }

  toggleStrict() {
    this.setState({
      strictGame: !this.state.strictGame,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="game-container">
          <StepsContainer onClickStep={this.onClickStep} />
          <Control
            level={this.state.level}
            newGame={this.newGame}
            strict={this.state.strictGame}
            toggleStrict={this.toggleStrict}
            wrongButton={this.state.wrongButton}
            victory={this.state.victory}
          />
        </div>
      </div>
    );
  }
}

/*

  show sequence of steps.
  get sequence of steps from user.
  check if steps are equal

 */
