import React from 'react';

import Timer from './lib/timer';
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
    this.pause = this.pause.bind(this);

    this.timer = props.timer;

    this.timer.timeEnd = () => {
      alert('Time end');
    };

    this.timer.timeChanged = (m, s) => {
      const seconds = `0${s}`.slice(-2);
      // const minutes = `0${m}`.slice(-2);
      this.setState({ clock: `${m}:${seconds}`, counting: this.timer.counting });
    };
  }

  add() {
    this.timer.addSecond();
  }

  substract() {
    this.timer.substractSecond();
  }

  start() {
    this.timer.startClock();
  }

  pause() {
    this.timer.pause();
    this.setState({ counting: this.timer.counting });
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
              {
                (!this.state.counting) ?
                  (<button title="Start" onClick={this.start}><i className="fa fa-play" /></button>)
                  : (
                    <button title="Pause" onClick={this.pause}>
                      <i className="fa fa-pause" />
                    </button>)
              }
            </div>
          </div>
        </div>
      </div>
    );
  }

}

App.propTypes = {
  timer: React.PropTypes.instanceOf(Timer),
};
