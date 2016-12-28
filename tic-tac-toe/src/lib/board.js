import * as GameHelpers from './game-helpers';

export default class Game {
  constructor() {
    this.cells = (new Array(9)).fill('');
    this.emptyCells = this.cells.map((_, i) => i);
  }

/*
tests:
 initial: empty array, 9 cells with empty string.
 adittional tests: 
  after filling - will come together with setCell
*/
  getCells() {
    return this.cells;
  }

/*
  tests:
    add a non "XO" value - receive error
    add a value to out of bounds index - receive error.
    add a value to a non empty cell - receive false.
    add a value to an empty cell - receive true,
      check getCells to see that the array has the right values.
      check getCell for the right value
    with full() - add 9 values to a new game - check if is full
*/

  setCell(value, index) {
    if (GameHelpers.notXO(value)) {
      throw new Error('value is not X or O');
    }
    if (this.cells[index]) {
      return false;
    }
    this.cells[index] = value;
    this.emptyCells = this.emptyCells.filter(v => v !== index);
    return true;
  }

  /*
  tests:
    check new game if full -> false
    check game after less than 9 sets -> false
    check game after 9 sets -> true
  */

  full() {
    return this.emptyCells.length === 0;
  }

  /*
    tests
      use 9 times to set a cell, check if full
  */

  getRandomEmptyCell() {
    return GameHelpers.randomCell(this.emptyCells);
  }

  /*
    tests:
      fill a winning game -> check for true 
  */

  checkVictory(value) {
    return GameHelpers.checkRows(this.cells, value) ||
      GameHelpers.checkCols(this.cells, value) ||
      GameHelpers.checkHypos(this.cells, value);
  }
}
