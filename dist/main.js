!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);let r=null,a=null,l=null,o=(()=>{const e=document.querySelector(".main-content"),t=()=>{e.innerHTML='\n            <div class="card mb-3 game-board">\n                <div class="card-body gameBoard">\n                \n                </div>\n            </div>\n        '},n=e=>{let t="";return"heart"===e?t='\n            <svg class="red-heart" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>\n            </svg>\n        ':"cross"===e&&(t='\n            <svg class="white-cross" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>\n                <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>\n            </svg>\n        '),t},r=e=>{let t="",r=0;for(;r<e.length;)t+=`\n                <div class="col-4 right-border tiles" data-tile='${"number"==typeof e[r]?e[r]:""}' id="choice-tile">\n                    ${n(e[r])}\n                </div>  \n            `,r+=1;return t};return{congratMsg:t=>{e.innerHTML=`\n        <div class="card p-3 welcome-box">\n            <img src="images/congrats.png" class="card-img-top congrat" alt="...">\n            <div class="card-body">\n            <h2 class="card-title text-center">${t} won the game!</h2>\n            <p class="card-text text-center">Do you want to play again?</p>\n            </div>\n            <div class="card-body d-flex justify-content-center m-3">\n                <button class="btn btn-danger" id="restart-game">Play again</button>\n            </div>\n        </div>\n        `},displayBoard:e=>{const t=document.querySelector(".gameBoard");let n=0,a=2,l="";for(;a<e.length;)l+=`\n                <div class="row bottom-border tiles-height">\n                    ${r(e.slice(n,a+1))}\n                </div>\n            `,n+=3,a+=3;t.innerHTML=l},switchContent:t,getPlayers:()=>{let e=null,n=null;const r=document.getElementById("players-form");return r.elements.namedItem("player-1").value&&r.elements.namedItem("player-2").value&&(e=r.elements.namedItem("player-1").value,n=r.elements.namedItem("player-2").value,t()),null!=e&&null!=n&&{playerOne:e,playerTwo:n}},restart:()=>{e.innerHTML='\n            <div class="card col-8 welcome-box">\n                <div class="card-header p-3 text-center ">\n                 <h4>Welcome to Tic-Tac-Toe</h4>\n                </div>\n                <div class="card-body p-3" action=\'#\'>\n                    <h5 class="card-title text-center">Please write your names</h5>\n                    <form id="players-form">\n                        <div class="form-group">\n                        <label for="exampleInputEmail1">Player 1</label>\n                        <input type="text" class="form-control" name="player-1">\n                        </div>\n                        <div class="form-group">\n                            <label for="exampleInputEmail1">Player 2</label>\n                            <input type="text" class="form-control" name="player-2">\n                        </div>\n                        <p class="card-text">Please remember the rules of the game</p>\n                        <button type="submit" class="btn btn-danger" id="start-game" >Start Game</button>\n                    </form>\n\n                </div>\n            </div>  \n        '},getStartButton:()=>document.getElementById("start-game"),getAllTiles:()=>document.querySelectorAll("#choice-tile"),getRestartButton:()=>document.getElementById("restart-game")}})();const i=(e,t)=>{const n=[];return{name:e,sign:t,choices:n,addChoice:function(e){n.push(e)}}},s=()=>{const e=[1,2,3,4,5,6,7,8,9],t=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];return{positions:e,filledBoard:function(){let t=!0;return e.forEach(e=>{Number.isInteger(e)&&(t=!1)}),t},updateBoard:function(t,n){let r=!1;return function(t){return e.includes(t)}(t)&&(this.positions[t-1]=n,r=!0),r},winningComb:function(e){let n=!1,r=0;for(;r<t.length;){if(0===t[r].filter(t=>!e.includes(t)).length){n=!0;break}r+=1}return n}}},c=(e,t)=>{const n=i(e,"heart"),r=i(t,"cross"),c=s();return{playerOne:n,playerTwo:r,board:c,play:function(e,t){let n=!1;return!0===c.updateBoard(e,t.sign)&&(t.addChoice(e),n=!0),n},checkWinner:function(){let e=!1;return!0===c.winningComb(n.choices)&&(e=n),!0===c.winningComb(r.choices)&&(e=r),e},start:function(){a=n,l=r,o.displayBoard(c.positions),d()}}};const d=()=>{o.getAllTiles().forEach(e=>{let t=parseInt(e.getAttribute("data-tile"));console.log(t+" "+typeof t),e.addEventListener("click",()=>{!function(e){if(!0===r.play(e,a)){const e=a;if(a=l,l=e,!1!==r.checkWinner())o.congratMsg(r.checkWinner().name),u();else if(!0===r.board.filledBoard()){const e=r.playerOne.name,t=r.playerTwo.name;r=c(e,t),r.start(),alert("There was a draw, Play again!")}else o.displayBoard(r.board.positions),d()}else alert(a.name+" this spot is taken, please choose another one!")}(t)})})},u=()=>{o.getRestartButton().addEventListener("click",()=>{o.restart(),m()})},m=()=>{o.getStartButton().addEventListener("click",()=>{(()=>{const e=o.getPlayers();!1!==e?(r=c(e.playerOne,e.playerTwo),r.start()):alert("Please provide your names.")})()})};m()}]);