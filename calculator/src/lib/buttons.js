import NumberKey from './NumberKey';
import ActionKey from './ActionKey';

export default [
  {
    text: 'CE',
    action: prev => [...prev.slice(0, prev.length - 1)],
  },
  {
    text: 'C',
    action: () => [],
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
  ActionKey.key('X'),
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
        prev: prev[prev.length - 1] !== '.' ? `${prev}.` : prev,
      }
    ),
  },
  {
    text: '=',
  },
];
