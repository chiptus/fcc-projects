import NumberKey from './NumberKey';
import ActionKey from './ActionKey';

function calculate(stack) {
  if (stack.length === 1) {
    return stack[0];
  }
  const mulIndex = stack.indexOf('X');
  const divIndex = stack.indexOf('/');
  if (mulIndex !== -1 && divIndex !== -1) {
    if (mulIndex < divIndex) {
      return calculate(stack.slice(0, mulIndex)) * calculate(stack.slice(mulIndex + 1));
    }
    return calculate(stack.slice(0, divIndex)) / calculate(stack.slice(divIndex + 1));
  }
  if (mulIndex !== -1) {
    return calculate(stack.slice(0, mulIndex)) * calculate(stack.slice(mulIndex + 1));
  }
  if (divIndex !== -1) {
    return calculate(stack.slice(0, divIndex)) / calculate(stack.slice(divIndex + 1));
  }
  const plusIndex = stack.indexOf('+');
  const minusIndex = stack.indexOf('-');
  if (plusIndex !== -1 && minusIndex !== -1) {
    if (plusIndex < minusIndex) {
      return calculate(stack.slice(0, plusIndex)) + calculate(stack.slice(plusIndex + 1));
    }
    return calculate(stack.slice(0, minusIndex)) - calculate(stack.slice(minusIndex + 1));
  }
  if (plusIndex !== -1) {
    return calculate(stack.slice(0, plusIndex)) + calculate(stack.slice(plusIndex + 1));
  }
  if (minusIndex !== -1) {
    return calculate(stack.slice(0, minusIndex)) - calculate(stack.slice(minusIndex + 1));
  }
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
