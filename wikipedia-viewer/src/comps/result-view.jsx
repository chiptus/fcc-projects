import React from 'react';
import Result from '../lib/result';


const ResultView = ({
  result
}) => (
    <a href={result.link} target="_blank" className="result list-group-item">
      <img src={result.imageUrl} className="pull-left" style={{ height: 50 + 'px', width: 50 + 'px' }}></img>
      <div style={{ paddingLeft: 60 + 'px' }}>
        <h4>{result.title}</h4>
        <div dangerouslySetInnerHTML={{ __html: result.desc }}></div>
      </div>
    </a>
  );

ResultView.propTypes = {
  result: React.PropTypes.instanceOf(Result)
}

export default ResultView;