import React from 'react';
import stepTypes from '../steps';

import StepView from './step';
import Game from '../lib/game';
import Control from './control';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.game = new Game();
    this.userSteps = [];
    this.computerSteps = [];
    this.state = {
      turn: "Computer",
    };


    this.checkSteps = this.checkSteps.bind(this);
  }

  componentDidMount() {
    this.showSequence();
  }

  render() {
    const clickable = this.state.turn !== "Computer";
    return (
      <div className="container">
        <div className="stepContainer">
       
            {
              stepTypes.map(step => (
                <StepView
                  key={step.id}
                  step={step}
                  clickable={clickable}
                  active={this.shouldBeActive(step.id)}
                  onClick={() => this.onClickStep(step.id)}
                />
              ))
            }
            <Control />
         
        </div>
      </div>
    );
  }

  shouldBeActive(id) {
    return this.state.turn === "Computer" && this.state.activeStep === id;
  }

  onClickStep(id) {
    this.userSteps.push(id);
    console.log("click");
  }

  showSequence() {
    this.computerSteps = this.game.generateStep();
    this.computerSteps = this.game.generateStep();
    console.log(this.computerSteps);
    this.setState({
      turn: "Computer",
    }, () => {
      Promise.all(this.computerSteps.map(step =>
        new Promise((res, rej) => setTimeout(() => {
          this.setState({ activeStep: step }, () => {
            res(step);
          });
        }, 1000))
      )).then(() => {
        setTimeout(() => this.setState({
          turn: "Player",
        }), 1000);
      });
    });
  }

  checkSteps() {
    const check = this.game.checkSteps(this.userSteps);
    this.setState({
      success: check,
    });
  }

}

App.propTypes = {
};

/*

  show sequence of steps.
  get sequence of steps from user.
  check if steps are equal

 */
