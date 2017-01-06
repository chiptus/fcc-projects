import React from 'react';


const StepView = ({ step, clickable, onClick, active }) => (
  <button
    className="step col s6"
    id={`step${step.id}`}
    style={{ backgroundColor: active && step.color }}
    disabled={!clickable}
    onClick={onClick}
  >
    {step.color}
  </button>
);

StepView.propTypes = {
  step: React.PropTypes.shape({
    // id: React.PropTypes.number.isRequired,
    color: React.PropTypes.string.isRequired,
  }),
  clickable: React.PropTypes.bool,
};

export default StepView;
