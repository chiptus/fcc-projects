import React, { PropTypes } from 'react';


const StepView = ({ step, clickable, onClick }) => (
  <button
    className="step col s6"
    id={`step${step.id}`}
    disabled={!clickable}
    onClick={onClick}
  >
    {step.color}
  </button>
);

StepView.propTypes = {
  step: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
  clickable: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default StepView;
