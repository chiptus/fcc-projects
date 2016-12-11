import React from 'react';

const Welcome = ({ save }) => (
  <div>
    <h1>Welcome</h1>
    <div>Please enter your name and choose a symbol</div>
    <div className="row">
      <div className="col s6 input-field">
        <input id="name" />
        <label htmlFor="name" className="active">Name</label>
      </div>
      <div className="col s6 input-field">
        <label htmlFor="symbol" className="active">Symbol</label>
        <select>
          <option value="X">X</option>
          <option value="O">O</option>
        </select>
      </div>
      <div>
        <button className="btn" onClick={save}>Save</button>
      </div>
    </div>
  </div>
);

Welcome.propTypes = {

};

export default Welcome;
