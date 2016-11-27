import React from 'react';
import ReactDom from 'react-dom';

import App from './app';
import Timer from './lib/timer';

const timer = new Timer(25, 0);
ReactDom.render(<App timer={timer} />, document.getElementById('app'));

