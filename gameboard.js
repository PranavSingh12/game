const  gameContainer  =  document.getElementById("gameContainer");
const  createGameBoardPixels  = () => {
    // Populate the [#gameContainer] div with small div's representing game pixels
    for (let  i  =  1; i  <=  1600; ++i) {
        gameContainer.innerHTML  =  `${gameContainer.innerHTML} <div class="gameBoardPixel" id="pixel${i}"></div>`;
    }
};
// This variable always holds the updated array of game pixels created by createGameBoardPixels() :
const  gameBoardPixels  =  document.getElementsByClassName("gameBoardPixel");