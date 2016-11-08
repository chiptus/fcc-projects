import Key from './Key';

export default class ActionKey extends Key {
  action(stack, prev) {
    return {
      stack: [...stack, +prev, this.text],
      prev: '0',
    };
  }
}

ActionKey.key = key => new ActionKey(key);