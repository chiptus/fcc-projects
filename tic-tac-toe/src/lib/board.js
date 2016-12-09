import * as GameHelpers from './game-helpers';

export default class Game {
  constructor() {
    this.cells = (new Array(9)).fill('');
    this.emptyCells = this.cells.map((_, i) => i);
  }

  getCells() {
    return this.cells;
  }

  setCell(value, index) {
    if (GameHelpers.notXO(value)) {
      throw new Error('value is not X or O');
    }
    if (!index && index !== 0) {
      return this.setRandomCell(value);
    }
    if (this.cells[index]) {
      return false;
    }
    this.cells[index] = value;
    this.emptyCells = this.emptyCells.filter(v => v !== index);
    return true;
  }

  setRandomCell(value) {
    const randomIndex = GameHelpers.randomCell(this.emptyCells);
    return this.setCell(value, randomIndex);
  }

  getCell(x, y) {
    return this.cells[GameHelpers.convertToOneDimensionZeroBased(x, y)];
  }

  checkVictory(value) {
    return GameHelpers.checkRows(this.cells, value) ||
      GameHelpers.checkCols(this.cells, value) ||
      GameHelpers.checkHypos(this.cells, value);
  }
}
