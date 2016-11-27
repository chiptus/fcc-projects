import React from 'react';

import Timer from './lib/timer';
import TimerView from './comps/timer-view';
import Buttons from './comps/buttons';

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
    this.reset = this.reset.bind(this);

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

  reset() {
    this.timer.reset();
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
          <TimerView className="col-sm-6" clock={this.state.clock} />
          <Buttons
            className="col-sm-6"
            add={this.add}
            substract={this.substract}
            start={this.start}
            pause={this.pause}
            reset={this.reset}
            counting={this.state.counting}
          />
        </div>
      </div>
    );
  }

}

App.propTypes = {
  timer: React.PropTypes.instanceOf(Timer),
};
