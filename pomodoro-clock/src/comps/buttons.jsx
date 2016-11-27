import React from 'react';

export default ({add, substract, start, pause, counting, reset}) => {

  return (<div className="buttons col-sm-6">
    <div className="plus-minus pull-left">
      <button title="Add Second" onClick={add}>
        <i className="fa fa-plus" />
      </button>
      <button title="Substract Second" onClick={substract}>
        <i className="fa fa-minus" />
      </button>
    </div>
    <div className="start-button pull-left">
      {
        (!counting) ?
          (<button title="Start" onClick={start}><i className="fa fa-play" /></button>)
          : (
            <button title="Pause" onClick={pause}>
              <i className="fa fa-pause" />
            </button>)
      }
    </div>
    <div className="reset-button pull-left">
      <button title="Reset" onClick={reset}><i className="fa fa-repeat" /></button>
    </div>
  </div>);
};
