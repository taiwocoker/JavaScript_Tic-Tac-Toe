import DomActions from './dom_actions'
import Player from './player'
import Board from './board'

let domActions = DomActions()


const Game = (player1, player2) => {
    const playerOne = Player(player1, 'heart');
    const playerTwo = Player(player2, 'cross');
    const board = Board();
    const currentPlayer = playerOne;
    const prevPlayer = playerTwo;
  
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
      domActions.displayBoard(board.positions);
    };
  
    return {
      playerOne, playerTwo, board, play, checkWinner, start, currentPlayer, prevPlayer
    };
  }
  
  

  export default Game;