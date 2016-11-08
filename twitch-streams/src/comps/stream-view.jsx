import React from 'react';
import Stream from '../lib/stream';

const StreamView = ({ stream, removeStream }) => {
  const className = `list-group-item ${(stream.online ? '' : 'disabled')}`;
  return (
    <a className={className} href={stream.url} target="_blank" rel="noopener noreferrer">
      <img src={stream.logo} alt={stream.name} style={{ height: '50px', width: '50px' }} className="pull-left" />
      <div className="pull-left" style={{ marginLeft: '20px' }}>
        <h2 style={{ marginTop: 0 }}>{stream.name}</h2>
        {(stream.gameName) ? (<div>Currently streaming: {stream.gameName}</div>)
          : (<div>Not streaming</div>)}
      </div>
      <div className="pull-right">
        <button
          onClick={(e) => { removeStream(); e.preventDefault(); }}
        >
          <i className="fa fa-times" />
        </button>
      </div>
      <div className="clearfix" />
    </a>
  );
};

StreamView.propTypes = {
  stream: React.PropTypes.instanceOf(Stream),
  removeStream: React.PropTypes.func,
};

export default StreamView;
