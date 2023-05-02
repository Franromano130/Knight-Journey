const splashScreenDOM = document.querySelector("#splash-screen");
const gameoverScreenDOM = document.querySelector("#gameover-screen");
const startBtnDOM = document.querySelector("#start-btn");
const restartBtnDOM = document.querySelector("#restart-btn")
const canvas = document.querySelector("#my-canvas");

const ctx = canvas.getContext("2d");

let gameObj;

const startGame = () => {
  console.log("iniciando juego");

  splashScreenDOM.style.display = "none";
  canvas.style.display = "block";


  gameObj = new Game();
  console.log(gameObj);

  gameObj.gameLoop()
};

const restartGame = () => {

  gameoverScreenDOM.style.display = "none";
  canvas.style.display = "block";
  gameObj = new Game();
  gameObj.gameLoop()
  

}

startBtnDOM.addEventListener("click", startGame);
restartBtnDOM.addEventListener("click", restartGame)
window.addEventListener("keydown", (event) => {
  if (gameObj !== undefined && event.code === "KeyW") {
    gameObj.knightObj.jump2()
  }
})

const pauseBtn = document.querySelector("#pause")
pauseBtn.addEventListener("click", () => {
  if (gameObj !== undefined && gameObj.isGameOn === true) {
    gameObj.isGameOn = false;
  } else {
    gameObj.isGameOn = true;
    gameObj.gameLoop()
  }
})