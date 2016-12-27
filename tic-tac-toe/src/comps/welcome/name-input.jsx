import React from 'react';

const NameInput = ({ name, onChangeName }) => {
  let nameInput;

  return (<div className="col s6 input-field">
    <input
      id="name"
      ref={(c) => { nameInput = c; }}
      value={name}
      required
      onChange={() => onChangeName(nameInput.value)}
    />
    <label htmlFor="name" className="active">Name</label>
  </div>);
};

NameInput.propTypes = {
  name: React.PropTypes.string.isRequired,
  onChangeName: React.PropTypes.func,
};

export default NameInput;
