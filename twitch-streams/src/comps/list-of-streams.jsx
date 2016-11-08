import React from 'react';

import { FILTER_VALUES } from '../lib/constants';
import StreamView from './stream-view';
import Stream from '../lib/stream';

const ListOfStreams = ({
  streams,
  filterStreams,
  removeStream,
}) => {
  // if (!streams.length){
  //   return (<div>No streams</div>);
  // }
  let input;

  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <div className="pull-right">
          <select onChange={() => filterStreams(input.value)} ref={(c) => { input = c; }}>
            <option value={FILTER_VALUES.ALL}>All</option>
            <option value={FILTER_VALUES.ONLINE}>Online</option>
            <option value={FILTER_VALUES.OFFLINE}>Offline</option>
          </select>
        </div>
        <div className="clearfix" />
      </div>
      <div className="panel-body list-group">
        {
          streams.map(stream => (
            <StreamView
              key={stream.name}
              stream={stream}
              removeStream={() => removeStream(stream)}
            />
          ))
        }
      </div>
    </div>
  );
};

ListOfStreams.propTypes = {
  streams: React.PropTypes.arrayOf(React.PropTypes.instanceOf(Stream)),
  filterStreams: React.PropTypes.func,
  removeStream: React.PropTypes.func,
};

export default ListOfStreams;
