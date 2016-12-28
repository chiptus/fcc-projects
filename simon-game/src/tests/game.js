import Game from '../lib/game';

function testGenerateStep() {
  const g = new Game();
  const steps = g.generateStep();
  return g.steps === steps &&
    g.steps.length &&
    Number.isFinite(g.steps[0]);
}

export default function runGameTests() {
  if (!testGenerateStep()) {
    throw new Error('generate step failed');
  }

  console.info('Game Class Tests Finished');
}
