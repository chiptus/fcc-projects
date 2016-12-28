import SIGNS from '../constants/signs';
import PLAYERS from '../constants/players';

/*
 tests:
 */
export default function playerFactory(name, symbol, type) {
  return {
    name,
    symbol,
    type,
  };
}

/*
 tests:
   - build players and check returned value.
   buildPlayerAndComputer() => {
     X: {
       name: 'Player A',
       symbol: X,
       type: 'Player A'
     },
     O: {
       name: "Computer",
       symbol: O,
       type: 'Computer'
     },
     player: {
       name: 'Player A',
       symbol: X,
       type: 'Player A'
     },
     computer: {
       name: "Computer",
       symbol: O,
       type: 'Computer'
     }
   }
   - check if X equals player and O equals computer.
 */

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
