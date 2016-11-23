import NumberKey from './NumberKey';
import ActionKey from './ActionKey';

function calculate(stack) {
  return eval(stack.join(''));
}

export default [
  {
    text: 'CE',
    action: stack => ({
      stack,
      prev: '0',
    }),
  },
  {
    text: 'C',
    action: () => ({ stack: [], prev: '0' }),
  },
  {
    text: '<',
    action: (stack, prev) => ({
      stack,
      prev: prev.substring(0, prev.length - 1),
    }),
  },
  ActionKey.key('/'),
  NumberKey.key(7),
  NumberKey.key(8),
  NumberKey.key(9),
  ActionKey.key('*'),
  NumberKey.key(4),
  NumberKey.key(5),
  NumberKey.key(6),
  ActionKey.key('-'),
  NumberKey.key(1),
  NumberKey.key(2),
  NumberKey.key(3),
  ActionKey.key('+'),
  {
    text: '+/-',
    action: (stack, prev) => {
      const newPrev = (prev[0] === '-') ? prev.substring(1) : `-${prev}`;
      return {
        stack,
        prev: newPrev,
      };
    },
  },
  NumberKey.key(0),
  {
    text: '.',
    action: (stack, prev) => (
      {
        stack,
        prev: prev.indexOf('.') === -1 ? `${prev}.` : prev,
      }
    ),
  },
  {
    text: '=',
    action: (stack, prev) => ({
      stack: [],
      prev: calculate([...stack, +prev]),
    })
    ,
  },
];
