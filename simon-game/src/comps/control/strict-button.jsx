import React, { PropTypes } from 'react';

const StrictButton = ({ strict, toggleStrict } = { strict: false }) => (
  <div className="strict-button-container">
    {strict ? <div>On</div> : <div>Off</div>}
    <button onClick={toggleStrict}>Strict</button>
  </div>
);

StrictButton.propTypes = {
  strict: PropTypes.bool.isRequired,
  toggleStrict: PropTypes.func.isRequired,
};

export default StrictButton;
