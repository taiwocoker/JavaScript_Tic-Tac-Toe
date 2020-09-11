/*
  eslint-disable no-unused-vars, no-alert, no-undef
*/
const DomActions = () => {
  const mainContent = document.querySelector('.main-content');

  const heartIcon = `
            <svg class="red-heart" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            </svg>
        `;

  const crossIcon = `
            <svg class="white-cross" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
            </svg>
        `;
  const switchContent = () => {
    mainContent.innerHTML = `
            <div class="card mb-3 game-board">
                <div class="card-body gameBoard">
                
                </div>
            </div>
        `;
  };

  const getPlayers = () => {
    let playerOne = null;
    let playerTwo = null;
    const myForm = document.getElementById('players-form');
    if (myForm.elements.namedItem('player-1').value && myForm.elements.namedItem('player-2').value) {
      playerOne = myForm.elements.namedItem('player-1').value;
      playerTwo = myForm.elements.namedItem('player-2').value;
      switchContent();
    }

    return (playerOne != null && playerTwo != null) ? { playerOne, playerTwo } : false;
  };

  const displaySign = (sign) => {
    let value = '';
    if (sign === 'heart') {
      value = heartIcon;
    } else if (sign === 'cross') {
      value = crossIcon;
    }
    return value;
  };

  const displayColumns = (subarr) => {
    let content = '';
    let i = 0;
    while (i < subarr.length) {
      content += `
                <div class="col-4 right-border tiles" data-tile='${(typeof (subarr[i]) === 'number') ? subarr[i] : ''}' id="choice-tile">
                    ${displaySign(subarr[i])}
                </div>  
            `;
      i += 1;
    }
    return content;
  };


  const displayBoard = (arr) => {
    const gameBoard = document.querySelector('.gameBoard');

    let i = 0;
    let j = 2;
    let content = '';
    while (j < arr.length) {
      content += `
                <div class="row bottom-border tiles-height">
                    ${displayColumns(arr.slice(i, j + 1))}
                </div>
            `;
      i += 3;
      j += 3;
    }

    gameBoard.innerHTML = content;
  };

  const congratMsg = (winner) => {
    mainContent.innerHTML = `
        <div class="card p-3 welcome-box">
            <img src="images/congrats.png" class="card-img-top congrat" alt="...">
            <div class="card-body">
            <h2 class="card-title text-center">${winner} won the game!</h2>
            <p class="card-text text-center">Do you want to play again?</p>
            </div>
            <div class="card-body d-flex justify-content-center m-3">
                <button class="btn btn-danger" id="restart-game">Play again</button>
            </div>
        </div>
        `;
  };

  const restart = () => {
    mainContent.innerHTML = `
            <div class="card col-8 welcome-box">
                <div class="card-header p-3 text-center ">
                 <h4>Welcome to Tic-Tac-Toe</h4>
                </div>
                <div class="card-body p-3" action='#'>
                    <h5 class="card-title text-center">Please write your names</h5>
                    <form id="players-form">
                        <div class="form-group">
                        <label for="exampleInputEmail1">Player 1</label>
                        <input type="text" class="form-control" name="player-1">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Player 2</label>
                            <input type="text" class="form-control" name="player-2">
                        </div>
                        <p class="card-text">Please remember the rules of the game</p>
                        <button type="submit" class="btn btn-danger" id="start-game" >Start Game</button>
                    </form>

                </div>
            </div>  
        `;
  };

  const getStartButton = () => {
    return document.getElementById('start-game');
  }

  const getAllTiles = () => {
    return document.querySelectorAll('#choice-tile')
  }

  const getRestartButton = () => {
    return document.getElementById('restart-game')
  }

  return {
    congratMsg, displayBoard, switchContent, getPlayers, restart, getStartButton, getAllTiles, getRestartButton
  };
};

export default DomActions;