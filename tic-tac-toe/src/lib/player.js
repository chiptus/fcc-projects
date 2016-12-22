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
  const playerSymbol = (symbol === SIGNS.X || symbol === SIGNS.O) ? symbol : SIGNS.X;
  const computerSymbol = (playerSymbol === SIGNS.X) ? SIGNS.O : SIGNS.X;

  const player = playerFactory(name, playerSymbol, PLAYERS.PLAYER_A);
  const computer = playerFactory(PLAYERS.COMPUTER, computerSymbol, PLAYERS.COMPUTER);

  return {
    [playerSymbol]: player,
    [computerSymbol]: computer,
    player,
    computer,
  };
}
