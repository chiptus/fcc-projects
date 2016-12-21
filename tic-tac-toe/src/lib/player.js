import SIGNS from '../constants/signs';
import PLAYERS from '../constants/players';

export default function playerFactory(name, symbol, type) {
  return {
    name,
    symbol,
    type,
  };
}

export function buildPlayerAndComputer(name = 'Player A', symbol = SIGNS.X) {
  const computerSign = (symbol === SIGNS.X) ? SIGNS.O : SIGNS.X;
  return {
    [symbol]: playerFactory(name, symbol, PLAYERS.PLAYER_A),
    [computerSign]: playerFactory(PLAYERS.COMPUTER, computerSign, PLAYERS.COMPUTER),
  };
}
