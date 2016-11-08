import React from 'react';

import DataInterface from './lib/data-interface';

import Output from './comps/output';
import Buttons from './comps/buttons';
import buttons from './lib/buttons';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.dataInterface = props.dataInterface;

    this.state = {
      result: '0',
      calcStack: [],
    };

    this.buttons = buttons;

    this.onClickButton = this.onClickButton.bind(this);
  }

  // calculate() {

  // }

  onClickButton(button) {
    const { stack, prev } = button.action(this.state.calcStack, this.state.result);
    this.setState({
      calcStack: stack, result: prev,
    });
  }

  render() {
    return (
      <div className="jumbotron inside-container">
        <Output calcStack={this.state.calcStack} result={this.state.result} />
        <Buttons buttons={this.buttons} onClickButton={this.onClickButton} />
      </div>
    );
  }

}

App.propTypes = {
  dataInterface: React.PropTypes.instanceOf(DataInterface),
};
