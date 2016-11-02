import React from 'react';

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

export default StreamView;