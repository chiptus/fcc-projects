import steps from '../steps';

export default class Game {
  constructor() {
    this.steps = [];
  }

  generateStep() {
    const step = randomCell(steps);
    this.steps.push(step.id);
    return this.steps;
  }

  checkSteps(stepsToCheck) {
    return this.steps.length === stepsToCheck.length
      && this.steps.every((e, i) => e === stepsToCheck[i]);
  }
}

// window.Game = Game;

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function randomCell(arr) {
  return arr[randomInteger(0, arr.length)];
}
