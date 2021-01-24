

//Create a start method to start the game
class game {
    constructor() {
        this.time = 0
        this.intervalID = 0
    }

    start(callback) {
        this.intervalID = setInterval(() => {
            this.time += 1 
            callback()
        }, 1000)
    }
    
    stop() {
        clearInterval(this.intervalID)
    }
    //Create a method to restart the game
    restart() {

    }


}