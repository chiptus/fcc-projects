import * as GameHelpers from './game-helpers';

export default class Game {
  constructor() {
    this.cells = (new Array(9)).fill('');
    this.emptyCells = this.cells.map((_, i) => i);
  }

  getCells() {
    return this.cells;
  }

  setCell(index, value) {
    // if (GameHelpers.outOfBounds(x) || GameHelpers.outOfBounds(y)) {
    //   throw new Error('indexes are out of bounds');
    // }
    if (GameHelpers.notXO(value)) {
      throw new Error('value is not X or O');
    }
    this.cells[index] = value;
    this.emptyCells = this.emptyCells.filter(v => v !== index);
  }

  setRandomCell(value) {
    const randomIndex = GameHelpers.randomCell(this.emptyCells);
    this.setCell(randomIndex, value);
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
