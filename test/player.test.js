import Player from '../src/player';

const player = Player('Taiwo', 'heart');
player.addChoice(2);

test('addChoice function updated the player\'s choices', () => {
  expect(player.choices).toStrictEqual([2]);
});

test('The name of the player should be Taiwo', () => {
  expect(player.name).toBe('Taiwo');
});