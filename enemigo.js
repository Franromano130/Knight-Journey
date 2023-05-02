class Enemigo {

    constructor( positionY, isImageUp ) {
  
      this.img = new Image()
      if (isImageUp === true) {
        this.img.src = "images/skeleton.png" 
      } else {
        this.img.src = "images/zombie1.png" 
      }
    
  
      this.x = canvas.width
      this.y = positionY 
 
      this.w = 65
      this.h = 75
      this.speed = 2
    }
  

  
    draw = () => {
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }
  

    move = () => {
      this.x -= this.speed
    }
  
  
  }