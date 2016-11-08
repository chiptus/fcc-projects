import React from 'react';
import ReactDOM from 'react-dom';

import DataInterface from './lib/data-interface';
import App from './comps/app';

const ORG_STREAMS_NAMES = ['ESL_SC2', 'OgamingSC2', 'cretetion', 'freecodecamp', 'storbeck', 'habathcx', 'RobotCaleb', 'noobs2ninjas'];

const dataInterface = new DataInterface(ORG_STREAMS_NAMES);

ReactDOM.render(<App dataInterface={dataInterface} streams={ORG_STREAMS_NAMES} />, document.getElementById('app'));
