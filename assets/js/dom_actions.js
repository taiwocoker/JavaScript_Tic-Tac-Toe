const DomActions = (() => {

    const mainContent = document.querySelector('.main-content');
    const switchContent = () => {

        mainContent.innerHTML = `
            <div class="card mb-3 game-board">
                <div class="card-body gameBoard">
                
                </div>
            </div>
        `
    }

    const getPlayers = () => {
        let startGame = document.getElementById('start-game');
        const playerOne = null;
        const playerTwo = null;
        startGame.addEventListener('click', function(){
            const myForm = document.getElementById('players-form');
            if (myForm.elements.namedItem('player-1').value && myForm.elements.namedItem('player-2').value) {
                playerOne = myForm.elements.namedItem('player-1').value;
                playerTwo = myForm.elements.namedItem('player-2').value;
                switchContent();
            } else {
                alert('Please provide your names.');
            }
        })

        return (playerOne!=null && playerTwo!=null) ? {playerOne, playerTwo} : false
    }

    const displaySign = (sign) => {
        let value = '';
        if (sign==='heart'){
            value = heartIcon;
        }else if (sign==='cross'){
            value = crossIcon;
        }
        return value;
    }

    const displayColumns = (subarr) => {
        let content = '';
        let i = 0;
        while(i < subarr.length){
            content += `
                <div class="col-4 right-border tiles" onclick="getTileValue(${displaySign(subarr[i])})">
                    ${displaySign(subarr[i])}
                </div>  
            `
            i = i+1;
        }
        return content;
    }

    const displayBoard = (arr) => {
        const heartIcon = `
            <svg class="red-heart" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            </svg>
        `

        const crossIcon = `
            <svg class="white-cross" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
            </svg>
        `

        const gameBoard = document.querySelector('.gameBoard');

        let i = 0;
        let j = 2;
        let content = '';
        while (j < arr.length){
            content += `
                <div class="row bottom-border tiles-height">
                    ${displayColumns(arr.slice(i, j+1))}
                </div>
            `
            i += 3
            j += 3
        }

        gameBoard.innerHTML = content;

    }

    const congratMsg = (winner) => {
        mainContent.innerHTML = `
        <div class="card p-3 welcome-box">
            <img src="assets/images/congrats.png" class="card-img-top congrat" alt="...">
            <div class="card-body">
            <h2 class="card-title text-center">${winner} won the game!</h2>
            <p class="card-text text-center">Do you want to play again?</p>
            </div>
            <div class="card-body d-flex justify-content-center m-3">
                <button class="btn btn-danger" id="start-game">Play again</button>
            </div>
        </div>
        `
    }

})