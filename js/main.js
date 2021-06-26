import Game from "./Game.js"
import GameView from "./GameView.js"

let game = new Game();
let gameView = new GameView();

document.querySelector(".restart_button").addEventListener("click", () => {
    newGame();
})

let tiles = document.querySelectorAll(".board_tile");
tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
        onTileClick(tile.dataset.index);
    })
})

function onTileClick(i){
    game.makeMove(i);
    gameView.updateBoard(game);
}

function newGame(){
    game = new Game();
    gameView.updateBoard(game);
}

gameView.updateBoard(game);