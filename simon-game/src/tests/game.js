import Game from '../lib/game';

function testGenerateStep() {
  const g = new Game();
  const steps = g.generateStep();
  return g.steps === steps &&
    g.steps.length &&
    Number.isFinite(g.steps[0]);
}

function testCheckSteps() {
  const g = new Game();
  for (let i = 0; i < Math.floor(Math.random() * 100); i++) {
    g.generateStep();
  }
  return g.checkSteps(g.steps);
}

export default function runGameTests() {
  if (!testGenerateStep()) {
    throw new Error('generate step failed');
  }

  console.info('test generateStep done');

  if (!testCheckSteps()) {
    throw new Error('checkSteps failed');
  }

  console.info('test checkSteps done');

  console.info('Game Class Tests Finished');
}
