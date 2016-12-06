import * as GameHelpers from './game-helpers';

export default class Game {
  constructor() {
    this.cells = (new Array(9)).fill('');
  }

  getCells() {
    return this.cells;
  }

  setCell(x, y, value) {
    if (GameHelpers.outOfBounds(x) || GameHelpers.outOfBounds(y)) {
      throw new Error('indexes are out of bounds');
    }
    if (GameHelpers.notXO(value)) {
      throw new Error('value is not X or O');
    }
    this.cells[GameHelpers.convertToOneDimensionZeroBased(x, y)] = value;
  }

  getCell(x, y) {
    return this.cells[GameHelpers.convertToOneDimensionZeroBased(x, y)];
  }

  checkVictory(value) {
    return GameHelpers.checkRows(this.cells, value) ||
      GameHelpers.checkCols(this.cells, value) ||
      GameHelpers.checkHypo(this.cells, value);
  }
}
