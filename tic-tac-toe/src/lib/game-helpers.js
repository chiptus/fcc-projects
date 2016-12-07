function makeArrayOfNumbers(length) {
  return Array.from({ length }, (v, k) => k);
}

function checkCellsEqualToValue(cells, value) {
  const cellsAreEqual = cells.reduce((prev, current) => current === prev && prev, value);
  return cellsAreEqual && (!value || cellsAreEqual === value);
}

function getColNumber(i) {
  return (i % 3) + 1;
}

function getRowNumber(i) {
  return Math.floor(i / 3) + 1;
}

function isIndexInCol(i, x) {
  return getColNumber(i) === x;
}

function isIndexInRow(i, y) {
  return getRowNumber(i) === y;
}

function isIndexInMainHypo(i) {
  return getRowNumber(i) === getColNumber(i);
}

function isIndexInSubHypo(i) {
  return getRowNumber(i) === 4 - getColNumber(i);
}

export function outOfBounds(x) {
  return (x > 3) || (x < 1);
}

export function notXO(value) {
  return value !== 'X' && value !== 'O';
}

function getCol(cells, col) {
  if (outOfBounds(col)) {
    throw new Error(`${col} is out of bounds`);
  }
  return cells.filter((_, i) => isIndexInCol(i, col));
}

function getRow(cells, row) {
  if (outOfBounds(row)) {
    throw new Error(`${row} is out of bounds`);
  }
  return cells.filter((_, i) => isIndexInRow(i, row));
}

function getMainHypo(cells) {
  return cells.filter((_, i) => isIndexInMainHypo(i));
}

function getSubHypo(cells) {
  return cells.filter((_, i) => isIndexInSubHypo(i));
}

export function convertToOneDimensionZeroBased(col, row) {
  return ((row - 1) * 3) + (col - 1);
}

export function checkIfRowIsWinning(cells, row, value) {
  return checkCellsEqualToValue(getRow(cells, row), value);
}

export function checkIfColIsWinning(cells, col, value) {
  return checkCellsEqualToValue(getCol(cells, col), value);
}

export function checkRows(cells, value) {
  return makeArrayOfNumbers(3).some(v => checkIfRowIsWinning(cells, v + 1, value));
}

export function checkCols(cells, value) {
  return makeArrayOfNumbers(3).some(v => checkIfColIsWinning(cells, v + 1, value));
}

function checkIfMainHypoIsWinning(cells, value) {
  return checkCellsEqualToValue(getMainHypo(cells), value);
}

function checkIfSubHypoIsWinning(cells, value) {
  return checkCellsEqualToValue(getSubHypo(cells), value);
}

export function checkHypos(cells, value) {
  return checkIfMainHypoIsWinning(cells, value) || checkIfSubHypoIsWinning(cells, value);
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


export function randomCell(arr) {
  return arr[randomInteger(0, arr.length)];
}