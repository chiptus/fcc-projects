import React from 'react';

const Welcome = ({ router }) => {
  let nameInput;
  let symbolInput;

  function submit() {
    const name = nameInput.value;
    const symbol = symbolInput.value;
    if (!name) {
      return;
    }
    router.push(`/game?symbol=${symbol}&name=${name}`);  
  }
  return (
    <div>
      <h1>Welcome</h1>
      <div>Please enter your name and choose a symbol</div>
      <div className="row">
        <div className="col s6 input-field">
          <input id="name" ref={(c) => { nameInput = c; }} required />
          <label htmlFor="name" className="active">Name</label>
        </div>
        <div className="col s6 input-field">
          <label htmlFor="symbol" className="active">Symbol</label>
          <select ref={(c) => { symbolInput = c; }}>
            <option value="X">X</option>
            <option value="O">O</option>
          </select>
        </div>
        <div>
          <button className="btn" onClick={submit}>Save</button>
        </div>
      </div>
    </div>
  )
};

Welcome.propTypes = {

};

// $(document).ready(() => {
    //   $('select').material_select();
    // });

export default Welcome;
