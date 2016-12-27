import React from 'react';
import $ from 'jquery';
import 'materialize-css';

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    const { name = '', symbol = 'X' } = this.props.location.query;
    this.state = { name, symbol };

    this.submit = this.submit.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeSymbol = this.onChangeSymbol.bind(this);
  }

  componentDidMount() {
    $(document).ready(() => {
      $('select').material_select();
    });
  }

  onChangeName() {
    this.setState({ name: this.nameInput.value });
  }

  onChangeSymbol() {
    this.setState({ symbol: this.symbolInput.value });
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
          <div className="col s6 input-field">
            <input
              id="name"
              ref={(c) => { this.nameInput = c; }}
              value={this.state.name}
              required
              onChange={this.onChangeName}
            />
            <label htmlFor="name" className="active">Name</label>
          </div>
          <div className="col s6 input-field">
            <label htmlFor="symbol" className="active">Symbol</label>
            <select
              ref={(c) => { this.symbolInput = c; }}
              onChange={this.onChangeSymbol}
              value={this.state.symbol}
            >
              <option value="X">X</option>
              <option value="O">O</option>
            </select>
          </div>
          <div className="col s12">
            <button className="btn" onClick={this.submit}>Play</button>
          </div>
        </div>
      </div>
    );
  }
}

Welcome.propTypes = {
  location: React.PropTypes.instanceOf(Object),
  router: React.PropTypes.instanceOf(Object),
};
