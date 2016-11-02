import React from 'react';
import fetchJsonp from 'fetch-jsonp';

import DataInterface from './lib/data-interface';
import TopBar from './comps/top-bar';
import Main from './comps/main';
import Result from './lib/result';

import {getUrlParameter, WIKI_URL} from './lib/utils';

export default class WikipediaApp extends React.Component {
  constructor(props) {
    super(props);
    this.dataInterface = props.dataInterface;

    this.state =
      {
        results: this.dataInterface.getResults(),
        query: getUrlParameter("query") || ""
      };

    if (this.state.query) {
      this.search(this.state.query);
    }
  }



  render() {
    return (
      <div>
        <TopBar search={this.search.bind(this)} randomSubject={this.randomSubject.bind(this)} query={this.state.query}></TopBar>
        <Main results={this.state.results}></Main>
      </div>
    );
  }

  search(val) {
    if (!val) { return; }
    fetchJsonp(WIKI_URL(val))
      .then(res => res.json())
      .then(res => res.query.pages)
      .then(results => {
        this.dataInterface.setResults(Object.keys(results).map(k => new Result(results[k])));
        this.setState({
          results: this.dataInterface.getResults()
        });
      });
  }

  randomSubject() {
    window.open("https://en.wikipedia.org/wiki/Special:Random");
  }
}

WikipediaApp.propTypes = {
  dataInterface: React.PropTypes.instanceOf(DataInterface)
};