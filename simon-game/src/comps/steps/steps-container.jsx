import React, { PropTypes } from 'react';

// import StepsComputer from './steps-computer';
// import StepsUser from './steps-user';
import stepTypes from '../../lib/steps';
import StepView from './step-view';

const StepsContainer = ({ onClickStep }) => (
  <div className="stepContainer">
    {
      stepTypes.map(step => (
        <StepView
          key={step.id}
          step={step}
          clickable
          onClick={() => onClickStep(step.id)}
        />
      ))
    }
  </div>
);

StepsContainer.propTypes = {
  onClickStep: PropTypes.func.isRequired,
};

export default StepsContainer;
