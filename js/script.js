const cells = document.querySelectorAll('.cell');

const Players = (() => {
  let one
  let two
  let active
  const getFirst = () => one
  const getSecond = () => two
  const getActive = () => active
  const create = function(name, mark) { return {name, mark} }
  const add = (name, mark) => {
    player = create(name, mark)
    if (one === undefined) {
      one = player;
      active = one
    } else if (two === undefined) {
      two = player
    } 
  }
  const swap = () => active = (active === one) ? two : one
  return {getFirst, getSecond, getActive,add, swap}
})();

const GameBoard = (() => {
  let board = ['', '', '', '', '', '', '', '', '']
  const wins = [[0,1,2], [3,4,5], [6,7,8],
                [0,4,8], [2,4,6], [0,3,6],
                [1,4,7], [2,5,8]]
  // places the mark on the browser's cell.
  const render = (cell) => {
    let mark = board[cell.dataset.cellId]
    if(mark !== '') {
      let element = document.createElement('img');
      element.setAttribute('src', `images/${mark}.svg`);
      cell.appendChild(element);
    }
  };
  const reset = () => {
    let board = ['', '', '', '', '', '', '', '', ''];
    cells.forEach((cell) => {
      cell.innerHTML = '';
    })
  }
  const addMark = (spot, mark) => {
    board[spot] = mark;
  }

  const winCheck = () => {
    let winner;
    wins.forEach(cond => {
      win = [board[cond[0]], board[cond[1]], board[cond[2]]];
      if (win.every(cell => cell == 'x')) {
        winner = 'x';
      } else if (win.every(cell => cell == 'o')) {
        winner = 'o'
      }
    })
    return winner;
  }
  return {render,reset, addMark, winCheck}
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
