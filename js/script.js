const playerFactory = (name, mark) => {
  return{name, mark}
}

const player1 = playerFactory('Pupe', 'x')
const player2 = playerFactory('Toti', 'o')

const gameBoard = (() => {
  let board = [['x', 'x', 'x'],
               ['o', 'o', 'o'],
               ['x', 'x', 'x']];
  const render = () => {
    // creates the DOM board using the board variable.
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
      let mark = board[cell.dataset.cellId[0]][cell.dataset.cellId[1]]
      if(mark !== '') {
        let element = document.createElement('img');
        element.setAttribute('src', `images/${mark}.svg`);
        cell.appendChild(element);
      } 
    });

  };
  const addMark = (mark, spot) => {
    // code
  }
  return {render, addMark}
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