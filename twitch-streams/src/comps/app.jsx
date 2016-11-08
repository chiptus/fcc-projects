import React from 'react';

import Header from './header';
import ListOfStreams from './list-of-streams';
import DataInterface from '../lib/data-interface';
import { FILTER_VALUES } from '../lib/constants';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.dataInterface = props.dataInterface;
    this.streamNames = props.streams;
    this.state = {
      streams: this.dataInterface.getStreams(),
    };

    this.addStream = this.addStream.bind(this);
    this.removeStream = this.removeStream.bind(this);
    this.filterStreams = this.filterStreams.bind(this);
  }

  componentDidMount() {
    this.dataInterface.loadStreams(this.streamNames)
      .then(() => this.setState({ streams: this.dataInterface.getStreams() }));
  }

  addStream(nameOfStream) {
    this.dataInterface.addStream(nameOfStream)
      .then(() => this.setState({ streams: this.dataInterface.getStreams() }));
  }

  removeStream(stream) {
    this.dataInterface.removeStream(stream);
    this.setState({ streams: this.dataInterface.getStreams() });
  }

  filterStreams(filterValue) {
    const streams = this.dataInterface.getStreams();
    switch (filterValue) {
      case FILTER_VALUES.ALL:
        this.setState({ streams });
        break;
      case FILTER_VALUES.ONLINE:
        this.setState({ streams: streams.filter(s => s.online) });
        break;
      case FILTER_VALUES.OFFLINE:
        this.setState({ streams: streams.filter(s => !s.online) });
        break;
      default:
        this.setState({ streams });
    }
  }

  render() {
    return (
      <div>
        <Header addStream={this.addStream} />
        <ListOfStreams
          streams={this.state.streams}
          removeStream={this.removeStream}
          filterStreams={this.filterStreams}
        />
      </div>
    );
  }


}

App.propTypes = {
  dataInterface: React.PropTypes.instanceOf(DataInterface),
  streams: React.PropTypes.arrayOf(React.PropTypes.string),
};
