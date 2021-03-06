/*
  eslint-disable no-unused-vars, no-alert, no-undef
*/
let game = null;
let currentPlayer = null;
let prevPlayer = null;

function Player(name, sign) {
  const choices = [];
  const addChoice = function (choice) {
    choices.push(choice);
  };
  return {
    name, sign, choices, addChoice,
  };
}

function Board() {
  const positions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const winningCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7],
    [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

  const filledBoard = function () {
    let res = true;
    positions.forEach(element => {
      if (Number.isInteger(element)) {
        res = false;
      }
    });
    return res;
  };

  const checkPosition = function (position) {
    return positions.includes(position);
  };

  const updateBoard = function (position, sign) {
    let res = false;
    if (checkPosition(position)) {
      this.positions[position - 1] = sign;
      res = true;
    }
    return res;
  };

  const winningComb = function (choices) {
    let res = false;
    let i = 0;
    while (i < winningCombinations.length) {
      const resultArray = winningCombinations[i].filter(n => !choices.includes(n));
      if (resultArray.length === 0) {
        res = true;
        break;
      }
      i += 1;
    }
    return res;
  };

  return {
    positions, filledBoard, updateBoard, winningComb,
  };
}

function Game(player1, player2) {
  const playerOne = Player(player1, 'heart');
  const playerTwo = Player(player2, 'cross');
  const board = Board();

  const play = function (position, player) {
    let updated = false;
    if (board.updateBoard(position, player.sign) === true) {
      player.addChoice(position);
      updated = true;
    }
    return updated;
  };

  const checkWinner = function () {
    let winner = false;
    if (board.winningComb(playerOne.choices) === true) {
      winner = playerOne;
    }
    if (board.winningComb(playerTwo.choices) === true) {
      winner = playerTwo;
    }
    return winner;
  };

  const start = function () {
    currentPlayer = playerOne;
    prevPlayer = playerTwo;
    DomActions.displayBoard(board.positions);
  };

  return {
    playerOne, playerTwo, board, play, checkWinner, start,
  };
}

function startGame() {
  const players = DomActions.getPlayers();
  if (players !== false) {
    game = new Game(players.playerOne, players.playerTwo);
    game.start();
  } else {
    alert('Please provide your names.');
  }
}

function makeChoice(choice) {
  const changed = game.play(choice, currentPlayer);
  if (changed === true) {
    const temp = currentPlayer;
    currentPlayer = prevPlayer;
    prevPlayer = temp;
    if (game.checkWinner() !== false) {
      DomActions.congratMsg(game.checkWinner().name);
    } else if (game.board.filledBoard() === true) {
      const firstPlayer = game.playerOne.name;
      const secondPlayer = game.playerTwo.name;
      game = new Game(firstPlayer, secondPlayer);
      game.start();
      alert('There was a draw, Play again!');
    } else {
      DomActions.displayBoard(game.board.positions);
    }
  } else {
    alert(`${currentPlayer.name} this spot is taken, please choose another one!`);
  }
}

function restartGame() {
  DomActions.restart();
}