import Game from '../src/game';

const game = Game('Taiwo', 'Patricia');

game.board.updateBoard(1, 'heart');
game.play(3, game.playerTwo);
game.play(5, game.playerTwo);
game.play(7, game.playerTwo);

const game2 = Game('jest', 'capybara');
game.play(1, game.playerOne);
game.play(2, game.playerOne);
game.play(4, game.playerOne);
game.play(9, game.playerTwo);
game.play(3, game.playerTwo);
game.play(5, game.playerTwo);

test('play should return false', () => {
  expect(game.play(1, game.playerOne)).not.toBeTruthy();
});

test('checkWinner should return player Patricia', () => {
  expect(game.checkWinner().name).toBe('Patricia');
});

test('checkWinner should return false in game2', () => {
  expect(game2.checkWinner()).toBeFalsy();
});