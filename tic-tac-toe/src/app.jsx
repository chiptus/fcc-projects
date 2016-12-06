import React from 'react';

import Board from './comps/board';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    // this.dataInterface = props.dataInterface;

    this.state = {
      signs: ['', '', '', 'X', '', 'O', '', '', ''],
    };
  }

  render() {
    return (
      <div>
        <Board signs={this.state.signs} />
      </div>
    );
  }

}

App.propTypes = {
 };
