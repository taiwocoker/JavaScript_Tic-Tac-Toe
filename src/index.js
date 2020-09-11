/*
  eslint-disable  no-alert, no-undef, no-use-before-define
*/
import DomActions from './dom_actions';

import Game from './game';

let game = null;
const domActions = DomActions();

const listenTiles = () => {
  domActions.getAllTiles().forEach(tile => {
    const data = parseInt(tile.getAttribute('data-tile'), 10);
    tile.addEventListener('click', () => {
      makeChoice(data);
    });
  });
};

const startGame = () => {
  const players = domActions.getPlayers();
  if (players !== false) {
    game = Game(players.playerOne, players.playerTwo);
    game.start();
    listenTiles();
  } else {
    alert('Please provide your names.');
  }
};

const listenStartGame = () => {
  domActions.getStartButton().addEventListener('click', () => {
    startGame();
  });
};

const listenRestartGame = () => {
  domActions.getRestartButton().addEventListener('click', () => {
    domActions.restart();
    listenStartGame();
  });
};


function makeChoice(choice) {
  const changed = game.play(choice, game.currentPlayer);
  if (changed === true) {
    const temp = game.currentPlayer;
    game.currentPlayer = game.prevPlayer;
    game.prevPlayer = temp;
    if (game.checkWinner() !== false) {
      domActions.congratMsg(game.checkWinner().name);
      listenRestartGame();
    } else if (game.board.filledBoard() === true) {
      const firstPlayer = game.playerOne.name;
      const secondPlayer = game.playerTwo.name;
      game = Game(firstPlayer, secondPlayer);
      game.start();
      listenTiles();
      alert('There was a draw, Play again!');
    } else {
      domActions.displayBoard(game.board.positions);
      listenTiles();
    }
  } else {
    alert(`${game.currentPlayer.name} this spot is taken, please choose another one!`);
  }
}


listenStartGame();
