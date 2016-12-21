import React from 'react';

const Welcome = ({ router, location }) => {
  let nameInput;
  let symbolInput;
  let { name = '', symbol = 'X' } = location.query;

  function submit() {
    if (!name) {
      return;
    }
    router.push(`/game?symbol=${symbol}&name=${name}`);  
  }

  function onChangeName(d) {
    name = nameInput.value;
  }

  function onChangeSymbol() {
    symbol = symbolInput.value;
  }

  return (
    <div>
      <h1>Welcome</h1>
      <div>Please enter your name and choose a symbol</div>
      <div className="row">
        <div className="col s6 input-field">
          <input
            id="name"
            ref={(c) => {
              nameInput = c;
              if (nameInput) {
                nameInput.value = name;
              }
            }}
            required
            onChange={onChangeName}
          />
          <label htmlFor="name" className="active">Name</label>
        </div>
        <div className="col s6 input-field">
          <label htmlFor="symbol" className="active">Symbol</label>
          <select
            ref={(c) => {
              symbolInput = c;
              if (symbolInput) {
                symbolInput.value = symbol;
              }
            }} onChange={onChangeSymbol}
          >
            <option value="X">X</option>
            <option value="O">O</option>
          </select>
        </div>
        <div>
          <button className="btn" onClick={submit}>Play</button>
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
