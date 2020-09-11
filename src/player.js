const Player = (name, sign) => {
    const choices = [];
    const addChoice = (choice) => {
      choices.push(choice);
    };
    return {
      name, sign, choices, addChoice,
    };
  }
export default Player;  