class Knight {

    constructor() {

      this.img = new Image()
      this.img.src = "images/caballero1-transformed.png"
      this.x = 50; 
      this.y = canvas.height / 2; 
      this.w = 75; 
      this.h = 75; 
      this.gravitySpeed = 2; 
      this.jumpSpeed = 60;
  
  
      this.canJump = true;
      this.isJumping = false;
    }
  
  
    draw = () => {
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }
  
    gravity = () => {
      if (this.y + this.h < canvas.height) {
        this.y += this.gravitySpeed
      }
    }
  
    jump = () => {
      if (this.y > 0 && this.canJump === true) {
        this.y -= this.jumpSpeed
 

        this.canJump = false;
        setTimeout(() => {
          this.canJump = true;
        }, 200)
      }
    
    }
    
 
    jumpFlow = () => {
      if (this.isJumping === true) {
        this.y -= 10
      }
    }
  
    jump2 = () => {
      this.isJumping = true;
      this.img.src = "images/saltando1-transformed.png"
      this.w = 75;
      this.h = 75;
      setTimeout(() => {
        this.isJumping = false;
        this.img.src = "images/aterrizando1-transformed.png"
      }, 100)
    }
  
  }