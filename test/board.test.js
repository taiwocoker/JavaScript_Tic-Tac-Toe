import Board from '../src/board'

const board = Board();
board.updateBoard(1, 'heart')

const board2 = Board();
board2.positions.forEach((pos, index) => {
    board2.updateBoard(index+1, 'heart')
})

const choices1 = [1,2,8,7]
const choices2 = [2,8,1,5,7]

test('filledBoard of board should return false', () => {
    expect(board.filledBoard()).not.toBeTruthy();
});

test('filledBoard of boar2 should return true', () => {
    expect(board2.filledBoard()).toBeTruthy();
});

test('updateBoard must return false for position 1', () => {
    expect(board.updateBoard(1, 'cross')).not.toBeTruthy();
});

test('updateBoard should change position 1 value to true', () => {
    expect(board.positions[0]).toBe('heart');
});

test('winningComb must return false for choices1', () => {
    expect(board.winningComb(choices1)).toBeFalsy();
});

test('winningComb must return true for choices2', () => {
    expect(board.winningComb(choices2)).not.toBeFalsy();
});