import Key from './Key';

export default class NumberKey extends Key {
  action(stack, prev) {
    if (Number.isInteger(+this.text) || this.text === '.') {
      const prevNotZero = (prev === '0') ? '' : prev;
      return {
        stack,
        prev: `${prevNotZero}${this.text}`,
      };
    }
    return {
      stack: [...stack, prev, this.text],
      prev: 0,
    };
  }
}

NumberKey.key = key => new NumberKey(key);
