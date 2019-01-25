const cells = document.querySelectorAll('.cell');

const Players = (() => {
  let one;
  let two;
  let active;
  const getFirst = () => one;
  const getSecond = () => two;
  const getActive = () => active;
  const create = function(name, mark) { return {name, mark} };
  const add = (name, mark) => {
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
  let board = [['', '', ''],
               ['', '', ''],
               ['', '', '']];
  // creates the DOM board using the board variable.
  const render = (cell) => {
    let mark = board[cell.dataset.cellId[0]][cell.dataset.cellId[1]]
    if(mark !== '') {
      let element = document.createElement('img');
      element.setAttribute('src', `images/${mark}.svg`);
      cell.appendChild(element);
    }
  };
  const addMark = (cord, mark) => {
    board[cord[0]][cord[1]] = mark;
  }
  const reset = () => {
    board = [['', '', ''], ['', '', ''], ['', '', '']];
    cells.forEach((cell) => {
      cell.innerHTML = '';
    })
  }
  return {render,reset, addMark}
})();


const GameState = (() => {
  
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

const playOn = (e) => {
  if(e.currentTarget.innerHTML == '') {
    GameBoard.addMark(e.currentTarget.dataset.cellId, Players.getActive().mark);
    Players.swap();
    GameBoard.render(e.currentTarget);
  }
}

cells.forEach(function(cell) {
  cell.addEventListener('click', playOn);
});

Players.add('toti', 'x');
Players.add('pupe', 'o');
