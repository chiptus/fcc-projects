import React from 'react';
import 'materialize-css';

import NameInput from './name-input';
import SymbolInput from './symbol-input';

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    const { name = '', symbol = 'X' } = this.props.location.query;
    this.state = { name, symbol };

    this.submit = this.submit.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeSymbol = this.onChangeSymbol.bind(this);
  }

  onChangeName(name) {
    this.setState({ name });
  }

  onChangeSymbol(symbol) {
    this.setState({ symbol });
  }

  submit() {
    if (!this.state.name) {
      return;
    }
    this.props.router.push(`/game?symbol=${this.state.symbol}&name=${this.state.name}`);
  }

  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <div>Please enter your name and choose a symbol</div>
        <div className="row">
          <NameInput name={this.state.name} onChangeName={this.onChangeName} />
          <SymbolInput symbol={this.state.symbol} onChangeSymbol={this.onChangeSymbol} />
          <div className="col s12">
            <button className="btn" onClick={this.submit}>Play</button>
          </div>
        </div>
      </div>
    );
  }
}

Welcome.propTypes = {
  location: React.PropTypes.shape({
    query: React.PropTypes.shape({
      name: React.PropTypes.string,
      symbol: React.PropTypes.string,
    }),
  }),
  router: React.PropTypes.shape({
    push: React.PropTypes.func,
  }),
};
