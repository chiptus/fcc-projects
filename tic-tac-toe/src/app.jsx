import React from 'react';

import { Router, Route, hashHistory } from 'react-router';


import Won from './comps/won';
import Welcome from './comps/welcome';
import Game from './comps/game/game';



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

/*

{
          !this.state.isWon ?
            (
            ) :
            (
              <div className="">
                <Won name={this.state.isWon} restartGame={this.restartGame} />
              </div>
            )
        }

<Menu
                  newOnePlayerGame={this.newOnePlayerGame}
                  newTwoPlayersGame={this.newTwoPlayersGame}
                />
                */

App.propTypes = {
};
