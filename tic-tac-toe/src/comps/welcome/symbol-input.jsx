import React from 'react';

const style = {
  display: 'inline',
  border: 'none',
  borderBottom: 'solid 0.5px',
  outline: 'none',
};

const SymbolInput = ({ symbol, onChangeSymbol }) => {
  let symbolInput;
  return (
    <div className="col s6 input-field">
      <label htmlFor="symbol" className="active">Symbol</label>
      <select
        style={style}
        ref={(c) => { symbolInput = c; }}
        defaultValue={symbol}
        onChange={() => onChangeSymbol(symbolInput.value)}
      >
        <option value="X">X</option>
        <option value="O">O</option>
      </select>
    </div>
  );
};

SymbolInput.propTypes = {
  symbol: React.PropTypes.string.isRequired,
  onChangeSymbol: React.PropTypes.func.isRequired,
};

export default SymbolInput;
