import React from 'react';

const TopBar = ({
  query,
  search,
  randomSubject
}) => {
  let inputField;
  return (
    <div className="navbar navbar-default navbar-fixed-top text-center" style={{ paddingTop: 10 + 'px' }}>
      <div>
        <input placeholder="What do you want to search for?" ref={((c) => { inputField = c; })} />
        <button onClick={() => search(inputField.value)}><i className="fa fa-search"></i></button>
        <button onClick={() => randomSubject()}>Random subject</button>
      </div>
    </div>
  )
};

TopBar.propTypes = {
  query: React.PropTypes.string,
  search: React.PropTypes.func,
  randomSubject: React.PropTypes.func,
}

export default TopBar;