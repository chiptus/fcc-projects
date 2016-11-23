import React from 'react';

export default ({calcStack, result}) => (
  <div className="row output">
    <div id="calc-input">{calcStack.join(' ')}</div>
    <div id="result-input">{result}</div>
  </div>
);
