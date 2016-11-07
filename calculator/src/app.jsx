import React from 'react';

import DataInterface from './lib/data-interface';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.dataInterface = props.dataInterface;

    this.state = {};
  }

  render() {
    return (
      <div>
      </div>
    );
  }

}

App.propTypes = {
  dataInterface: React.PropTypes.instanceOf(DataInterface),
};
