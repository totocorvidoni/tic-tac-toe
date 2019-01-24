const playerFactory = (name, mark) => {
  return{name, mark}
}

const player1 = playerFactory('Pupe', 'X')
const player2 = playerFactory('Toti', 'O')

const gameBoard = (() => {
  const board = [['X', 'X', 'X'],
                 ['O', 'O', 'O'],
                 ['X', 'X', 'X']];
  const render = () => {
    // creates the DOM board using the board variable.
  };
  const addMark = (mark, spot) {
    // code
  }
  return {renderBoard, addMark}
})();


const gameState = (() => {
  let turn = 0
  let activePlayer = player1
  const endCheck = () => {
    // check if a game over conditions has been met
  }
  const switchPlayer = () => {
    // swaps activePlayer
  }
  const win = (player) => {
    // win game for player
  }
  const tie = () => {
    // Tie the game
  } 

  return {}

})();