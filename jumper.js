// x, y, width, height
let isLeftArrow = false
let isRightArrow = false
let moveJumpers = 5


class Jumpers {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.width = 80
        this.height = 100
        this.incrementX = 10
        this.incrementY = 20

    }
    // jumpersMove() {
        // if (this.x < 50) {
        //     this.incrementX += 2
        // }
        // else if (this.x + this.width > 750) {
        //     this.incrementX = -this.incrementX
        //     }
    //     if (this.y + this.height > 830) {
    //         this.incrementY = -this.incrementY
    //     }
    // }
}


document.addEventListener('keydown', (event) => {
    event.preventDefault()

    if(event.keyCode == 39 || event.key == "ArrowRight") {
        isRightArrow = true
        isLeftArrow = false
    } 
    else if (event.keyCode == 37 || event.key == "ArrowLeft") {
        isRightArrow = false
        isLeftArrow = true

    }
})

document.addEventListener('keyup', (event) => {
        isRightArrow = false
        isLeftArrow = false
})

//ArrowLeft 37
//ArrowRight 39