import React from 'react';

import { Router, Route, hashHistory } from 'react-router';

import Won from './won/won';
import Welcome from './welcome/welcome';
import Game from './game/game';

export default class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Welcome} />
        <Route path="/game" component={Game} />
        <Route path="/won/:name" component={Won} />
      </Router>
    );
  }
}

App.propTypes = {
};
