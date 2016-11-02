import React from 'react';
import ReactDOM from 'react-dom';

import DataInterface from './lib/data-interface';

const ORG_STREAMS_NAMES = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

const TWITCH_URL = `https://api.twitch.tv/kraken/streams`;
const FILTER_VALUES = {
  ALL: "0",
  ONLINE: "1",
  OFFLINE: "2",
};



class App extends React.Component {
  constructor(props) {
    super(props);
    this.dataInterface = props.dataInterface;
    this.streamNames = props.streams;
    this.state = {
      streams: this.dataInterface.getStreams()
    };
  }

  componentDidMount() {
    this.dataInterface.loadStreams(this.streamNames)
      .then(streams => this.setState({streams:this.dataInterface.getStreams()}));
  }
  
  render() {
    return (
      <div>
        <Header addStream={this.addStream.bind(this)}/>
        <ListOfStreams streams={this.state.streams} removeStream={this.removeStream.bind(this)} filterStreams={this.filterStreams.bind(this)} />
      </div>
    );
  }

  addStream(nameOfStream) {
    this.dataInterface.addStream(nameOfStream)
      .then(() => this.setState({streams: this.dataInterface.getStreams()}));
  }

  removeStream(stream) {
    this.dataInterface.removeStream(stream);
    this.setState({streams: this.dataInterface.getStreams()});
  }
  
  filterStreams(filterValue){
    const streams = this.dataInterface.getStreams();
    switch (filterValue){
      case FILTER_VALUES.ALL:
        this.setState({streams});
        break;
      case FILTER_VALUES.ONLINE:
        this.setState({streams:streams.filter(s => s.online)});
        break;
      case FILTER_VALUES.OFFLINE:
        this.setState({streams: streams.filter(s => !s.online)});
        break
      }
  }
}

const Header = ({
  addStream
}) => {
  let input;
  return (

    <div>
    <h1 className="pull-left">Twitch Streams</h1>
    <div className="pull-right" style={{marginTop:"20px"}}>
      <input placeholder="Stream Name" ref={(c) => input = c}/>
      <button onClick={() => addStream(input.value)}><i className="fa fa-search"></i></button>
    </div>
      <div className="clearfix"></div>
  </div>

  )
};

const ListOfStreams = ({
  streams,
  filterStreams,
  removeStream
}) => {
  // if (!streams.length){
  //   return (<div>No streams</div>);
  // }
  let input;
  
  return (
  <div className="panel panel-default">
    <div className="panel-heading">
      <div className="pull-right">
        <select onChange={() => filterStreams(input.value)} ref={(c) => input = c}>
          <option value={FILTER_VALUES.ALL}>All</option>
          <option value={FILTER_VALUES.ONLINE}>Online</option>
          <option value={FILTER_VALUES.OFFLINE}>Offline</option>
        </select>
      </div>
      <div className="clearfix"></div>
    </div>
    <div className="panel-body list-group">
      {
        streams.map(stream => (<StreamView key={stream.name} stream={stream} removeStream={() => removeStream(stream)}/>))
      }
    </div>
  </div>
);
}

const StreamView = ({stream, removeStream}) => {
  let className = `list-group-item ${(stream.online ? "" : "disabled")}`;
  return (
  <a className={className} href={stream.url} target="_blank">
    <img src={stream.logo} style={{height:"50px", width:"50px"}} className="pull-left"/>
      <div className="pull-left" style={{marginLeft:"20px"}}>
    <h2 style={{marginTop:0}}>{stream.name}</h2>
    {(stream.gameName) ? (<div>Currently streaming: {stream.gameName}</div>) 
      : (<div>Not streaming</div>)}
      </div>
      <div className="pull-right" onClick={e => e.preventDefault()}>
        <button onClick={removeStream}><i className="fa fa-times"></i></button>
      </div>
      <div className="clearfix"></div>
  </a>
  )
};

const dataInterface = new DataInterface(ORG_STREAMS_NAMES);

ReactDOM.render(<App dataInterface={dataInterface} streams={ORG_STREAMS_NAMES}/>, document.getElementById("app"));