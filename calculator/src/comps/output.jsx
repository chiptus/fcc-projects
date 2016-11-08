import React from 'react';

export default ({calcStack, result}) => (
  <div className="row output">
    <input id="calc-input" placeholder="calculation" value={calcStack.join(' ')} />
    <input style={{ height: '50px' }} id="result-input" placeholder="result" value={result} />
  </div>
);
