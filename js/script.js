const cells = document.querySelectorAll('.cell');

const Players = (() => {
  let one;
  let two;
  let active;
  const getFirst = () => one;
  const getSecond = () => two;
  const getActive = () => active;
  const create = function(name, mark) { return {name, mark} };
  const add = function(name, mark) {
    player = create(name, mark);
    if (one === undefined) {
      one = player;
      active = one
    } else if (two === undefined) {
      two = player
    } 
  }
  const swap = () => active = (active === one) ? two : one;

  return {getFirst, getSecond, getActive,add, swap}
})();

const GameBoard = (() => {
  let board = [['x', 'x', 'x'],
               ['o', 'o', 'o'],
               ['x', 'x', 'x']];
  // creates the DOM board using the board variable.
  const render = () => {
    cells.forEach((cell) => {
      cell.innerHTML = '';
      let mark = board[cell.dataset.cellId[0]][cell.dataset.cellId[1]]
      if(mark !== '') {
        let element = document.createElement('img');
        element.setAttribute('src', `images/${mark}.svg`);
        cell.appendChild(element);
      } 
    });
  };
  const addMark = (cord) => {
    spot = board[cord[0]][cord[1]]
    mark = players.active.mark;
    if(spot = '') spot = mark;
  }
  const reset = () => {
    board = [['', '', ''], ['', '', ''], ['', '', '']]
  }
  return {render, addMark, reset}
})();


const GameState = (() => {
  
  const play = () => {
    // perfom all the methods needed to make a move
  }
  const endCheck = () => {
    // check if a game over conditions has been met
  }
  const win = (player) => {
    // win game for player
  }
  const tie = () => {
    // Tie the game
  } 

  return {}

})();


