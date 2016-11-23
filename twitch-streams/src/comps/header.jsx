import React from 'react';

const Header = (
  // addStream,
) => {
  // let input;
  return (

    <div>
      <h1 className="pull-left">Twitch Streams</h1>
      <div className="clearfix" />
    </div>

  );
};

Header.propTypes = {
  addStream: React.PropTypes.func,
};

export default Header;


/*
<div className="pull-right" style={{ marginTop: '20px' }}>
        <input placeholder="Stream Name" ref={(c) => { input = c; }} />
        <button onClick={() => addStream(input.value)}><i className="fa fa-search" /></button>
      </div>
*/
