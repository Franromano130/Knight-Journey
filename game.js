class Game {
 
    constructor() {
  
 
      this.background = new Image()
      this.background.src = "images/dungeon background.png"
  
 
      this.knightObj = new Knight()
      console.log(this.knightObj)
  

      this.enemigoArr = [];
      this.enemigoSeparation = 200;
  
      this.isGameOn = true;
  
  
  

      this.score = 0;
  
    }
  
  
    enemigosAparecen = () => {
      if (
        this.enemigoArr.length === 0 || 
        this.enemigoArr[this.enemigoArr.length - 1].x < 200 ) 
      {

  
        let randomPositionY = Math.random() * -150 
  
        let nuevoEnemigoArriba = new Enemigo(randomPositionY, true)
        this.enemigoArr.push(nuevoEnemigoArriba) 
  
      
        let nuevoEnemigoAbajo = new Enemigo(randomPositionY + this.enemigoSeparation, false)
        this.enemigoArr.push(nuevoEnemigoAbajo)
        console.log(this.enemigoArr.length)
  
  
      }
    }
  
    checkCollisionKnightObjEnemigo = () => {

      this.enemigoArr.forEach((eachEnemigo) => {

        if (
          eachEnemigo.x < this.knightObj.x + this.knightObj.w &&
          eachEnemigo.x + eachEnemigo.w > this.knightObj.x &&
          eachEnemigo.y < this.knightObj.y + this.knightObj.h &&
          eachEnemigo.h + eachEnemigo.y > this.knightObj.y
        ) {

          console.log("Has perdido")
          this.gameOver()
        }
      })
  
    }
  
 
    gameOver = () => {

      this.isGameOn = false;
  
 
      canvas.style.display = "none"
  
  
      gameoverScreenDOM.style.display = "flex"
    }
    

  
    drawBackground = () => {
      ctx.drawImage(this.background, 0, 0, canvas.width, canvas.height)
    }
  
    clearCanvas = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
  
    removeEnemigoOut = () => {

      if (this.enemigoArr[0].x + this.enemigoArr[0].w< 0) {
        this.enemigoArr.shift()
        this.score += 0.5
      }
  
  
    }
  
 
    drawScore = () => {
      ctx.font = "80px Comic Sans MS"
      ctx.fillText(Math.floor(this.score), 250, 40)
    }
  
    gameLoop = () => {

  

      this.clearCanvas()
  
   
      this.knightObj.gravity()
      this.enemigoArr.forEach((eachEnemigo) => {
        eachEnemigo.move()
      })
      this.enemigosAparecen()
      this.checkCollisionKnightObjEnemigo()
      this.removeEnemigoOut()
  
      this.knightObj.jumpFlow()
      
  
      this.drawBackground()
      this.knightObj.draw()

      this.enemigoArr.forEach((eachEnemigo) => {
        eachEnemigo.draw()
      })
      this.drawScore()
  
      if (this.isGameOn === true) {
        requestAnimationFrame(this.gameLoop) 
      }
  
    }
  
  }