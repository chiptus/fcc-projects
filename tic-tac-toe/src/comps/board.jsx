import React from 'react';

export default function Board({ signs = ['', '', '', '', '', '', '', '', ''] }) {
  return signs.map(sign => (
    <div>{sign}</div>
  ));
}
