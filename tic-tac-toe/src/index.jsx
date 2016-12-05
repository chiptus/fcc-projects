import React from 'react';
import ReactDom from 'react-dom';

import App from './app';
import DataInterface from './lib/data-interface';

const dataInterface = new DataInterface();
ReactDom.render(<App dataInterface={dataInterface} />, document.getElementById('app'));

