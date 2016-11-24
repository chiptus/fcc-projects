import React from 'react';

import DataInterface from './lib/data-interface';
import TimerView from './comps/timer-view';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clock: '25:00',
    };

    this.add = this.add.bind(this);
    this.substract = this.substract.bind(this);
    this.start = this.start.bind(this);
  }

  add() {
    this.setState({ clock: '25:00' });
  }

  substract() {
    this.setState({ clock: '24:00' });
  }

  start() {
    console.log("Start");
  }

  render() {
    return (
      <div>
        <h3>Pomodoro clock</h3>
        <div className="main row">
          <TimerView clock={this.state.clock} />
          <div className="buttons col-sm-6">
            <div className="plus-minus pull-left">
              <button title="Add Minute" onClick={this.add}>
                <i className="fa fa-plus" />
              </button>
              <button title="Substract Minute" onClick={this.substract}>
                <i className="fa fa-minus" />
              </button>
            </div>
            <div className="start-button">
              <button title="Start" onClick={this.start}><i className="fa fa-play" /></button>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

App.propTypes = {
  dataInterface: React.PropTypes.instanceOf(DataInterface),
};
