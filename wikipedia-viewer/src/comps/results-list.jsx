import React from 'react';
import ResultView from './result-view';
import Result from '../lib/result';

const ResultsList = ({
  results
}) => (
    <div className="list-group">
      {results.map(result =>
        <ResultView key={result.id} result={result}></ResultView>
      )}
    </div>
  );

ResultsList.propTypes = {
  results: React.PropTypes.arrayOf(React.PropTypes.instanceOf(Result))
}


export default ResultsList;