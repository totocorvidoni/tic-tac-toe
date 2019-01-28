const cells = document.querySelectorAll('.cell')
const resetButton = document.querySelector('#reset')
const playerOneTag = document.querySelector('#p1')
const playerTwoTag = document.querySelector('#p2')
const playerNames = document.querySelectorAll('.player h2')

const Players = (() => {
  let one
  let two
  let active
  const getFirst = () => one
  const getSecond = () => two
  const getActive = () => active
  const create = function(name, mark) { return {name, mark} }
  const add = (name, mark) => {
    if (one === undefined) {
      player = create(name, 'x')
      one = player
      active = one
    } else if (two === undefined) {
      player = create(name, 'o')
      two = player
    } 
  }
  const swap = () => active = (active === one) ? two : one
  const reset = () => {
    if(getActive() == two) swap()
  }
  return {getFirst, getSecond, getActive, add, swap, reset}
})()

const GameBoard = (() => {
  let board = ['', '', '', '', '', '', '', '', '']
  const wins = [[0,1,2], [3,4,5], [6,7,8],
                [0,4,8], [2,4,6], [0,3,6],
                [1,4,7], [2,5,8]]
  // places the mark on the browser's cell.
  const render = (cell) => {
    let mark = board[cell.dataset.cellId]
    if(mark !== '') {
      let element = document.createElement('img')
      element.setAttribute('src', `images/${mark}.svg`)
      cell.appendChild(element)
    }
  }
  const reset = () => {
    board = ['', '', '', '', '', '', '', '', '']
    cells.forEach((cell) => {
      cell.innerHTML = ''
    })
  }
  const addMark = (spot, mark) => {
    board[spot] = mark
  }
  const winCheck = () => {
    let winner
    wins.forEach(cond => {
      win = [board[cond[0]], board[cond[1]], board[cond[2]]]
      if (win.every(cell => cell == 'x')) {
        winner = 'x'
      } else if (win.every(cell => cell == 'o')) {
        winner = 'o'
      }
    })
    return winner
  }
  return {render,reset, addMark, winCheck}
})()


const GameState = (() => {
  let turn = 1
  const nextTurn = () => ++turn
  const endCheck = () => (GameBoard.winCheck()) ? win() : (turn == 9) ? tie() : undefined
  const win = () => { 
    alert(`${Players.getActive().name} wins!`)
    resetGame()
  }
  const tie = () => { 
    alert('its a tie')
    resetGame()
  }
  const reset = () => {
    turn = 1
  }
  return { nextTurn, endCheck, reset}
})()

/* Global */

const newPlayers = () => {
  let playerNumber = 1
  playerNames.forEach(player => {
    name = prompt(`Player ${playerNumber}, what is your name?`)
    Players.add(name)
    text = document.createTextNode(name)
    player.appendChild(text)
    playerNumber++
  })
}

const playOn = (e) => {
  if(e.currentTarget.innerHTML == '') {
    GameBoard.addMark(e.currentTarget.dataset.cellId, Players.getActive().mark)
    GameBoard.render(e.currentTarget)
    if(GameState.endCheck() == undefined) {
      Players.swap()
      GameState.nextTurn()
    }
  }
}

const resetGame = () => {
  GameBoard.reset()
  GameState.reset()
  Players.reset()
}

/* Script */

cells.forEach(function(cell) {
  cell.addEventListener('click', playOn)
})
resetButton.addEventListener('click', resetGame)
newPlayers()