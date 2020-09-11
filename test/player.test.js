import Player from "../src/index"

const player = Player('Taiwo', 'heart')
player.addChoice(2)

test('addChoice function updated the player\'s choices', () => {
    expect(player.choices).toBe([2]);
  });