import NumberKey from './NumberKey';
import ActionKey from './ActionKey';

function oneStepCalculation(arr, index, action) {
  const a = calculate(arr.slice(0, index));
  const b = calculate(arr.slice(index + 1));
  return action(a, b);
}

const actions = {
  X: (a, b) => a * b,
  '/': (a, b) => a / b,
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
};

function calculateOneLevel(arr, charA, charB) {
  const aIndex = arr.indexOf(charA);
  const bIndex = arr.indexOf(charB);
  if (aIndex !== -1 && bIndex !== -1) {
    if (aIndex < bIndex) {
      return oneStepCalculation(arr, aIndex, actions[charA]);
    }
    return oneStepCalculation(arr, bIndex, actions[charB]);
  }
  if (aIndex !== -1) {
    return oneStepCalculation(arr, aIndex, actions[charA]);
  }
  if (bIndex !== -1) {
    return oneStepCalculation(arr, bIndex, actions[charB]);
  }
  return null;
}

function calculate(stack) {
  if (stack.length === 1) {
    return stack[0];
  }
  let answer = calculateOneLevel(stack, '+', '-');

  if (!answer) {
    answer = calculateOneLevel(stack, 'X', '/');
  }

  return answer;
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
