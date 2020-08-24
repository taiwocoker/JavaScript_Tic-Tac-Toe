function Player(name, sign){
    const choices = [];
    const addChoice = function(choice){
        this.choices.push(choice);
    }
    return {name, sign, addChoice}
}

function board(){
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
    
}

