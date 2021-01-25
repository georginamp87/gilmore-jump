//Create a start method to start the game
class game {
    constructor() {
        this.time = 0
        this.intervalID = 0
    }

    start(callback) {
        canvas.style.display = 'block'
        startBtn.style.display = 'none'
        this.intervalID = setInterval(() => {
            this.time += 1 
            callback()
        }, 1000)
    }
    
    gameOver() {
        canvas.style.display = 'none'
        restartBtn.style.display = 'block'
        clearInterval(this.intervalID)
    }
    //Create a method to restart the game
    restart() {

    }


}