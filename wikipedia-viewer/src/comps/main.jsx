import React from 'react';

import ResultsList from './results-list';
import Result from '../lib/result';

const Main = ({
  results
}) => {
  if (!results || !results.length) {
    return (<div>No results!</div>);
  }
  return (
    <ResultsList results={results}></ResultsList>
  );
}

Main.propTypes = {
  results: React.PropTypes.arrayOf(React.PropTypes.instanceOf(Result))
}

export default Main;