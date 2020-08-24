function Player(name, sign){
    const choices = [];
    const addChoice = function(choice){
        this.choices.push(choice);
    }
    return {name, sign, addChoice}
}

function Board(){
    const positions = [1,2,3,4,5,6,7,8,9];
    const winningCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

    const filledBoard = function(){
        let res = true;
        positions.forEach(element => {
            if(Number.isInteger(element)){
                res = false;
            }
        });
        return res;
    } 

    const checkPosition = function(position){
        return positions.includes(position)
    }

    const updateBoard = function(position,sign){
        let res = false;
        if(checkPosition(position)){
            this.positions[position - 1] = sign;
            res = true;
        }
        return res;
    }

    const winningComb = function(choices){
        return winningCombinations.includes(choices);
    }
    
    return { filledBoard, updateBoard, winningComb }
}

function Game(player1, player2) {
    const playerOne = Player(player1, 'heart');
    const playerTwo = Player(player2, 'cross');
    const board = Board();

    const play = function(position, player) {
        return board.updateBoard(position, player.sign);
    }

    const winner = function() {
        let winner = false;
        if (board.winningComb(playerOne.choices)){
            winner = playerOne;
        }
        if (board.winningComb(playerTwo.choices)){
            winner = playerTwo;
        }
        return winner;
    }

    const start = function() {
        let currentPlayer = playerOne;
        while (board.filledBoard() !== false){
            choice = DomAction.getChoice();
        }
    }
}

