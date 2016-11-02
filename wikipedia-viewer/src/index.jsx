import React from 'react';
import ReactDom from 'react-dom';

import WikipediaApp from './wikipedia-app';
import DataInterface from './lib/data-interface';

const dataInterface = new DataInterface();
ReactDom.render(<WikipediaApp dataInterface={dataInterface}/>, document.getElementById('app'));

