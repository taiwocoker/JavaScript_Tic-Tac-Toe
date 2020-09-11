import Board from '../src/board'

const board = Board();
board.updateBoard(1, 'heart')

test('The filled board should return false', () => {
    expect(board.filledBoard()).not.toBeTruthy();
});

test('The update board must return false for position 1', () => {
    expect(board.updateBoard(1, 'cross')).not.toBeTruthy();
});

test('The update board should change position 1 value to true', () => {
    expect(board.positions[1]).toBe('heart');
});