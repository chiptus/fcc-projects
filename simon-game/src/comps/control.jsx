import React from 'react';

export default () => (
  <div className="control">
    <button>Check Steps</button>
    {true ? <div>Success</div> : <div>try again</div>}
  </div>
);
