class jumpers {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.width = 15
        this.height = 20

    }
}

let jumpersImg = document.createElement('img')
jumpersImg.src = "../gilmore-jump/images/jumpers.jpg"
// x, y, width, height
let isLeftArrow = false
let isRightArrow = false
let moveJumpers = 5
let incrementX = 1

function jumpersMove() {
    if (this.x < 30) {
        incrementX += 1
    }
    if (this.x + this.width > 770) {
        incrementX = -incrementX
        }
}

document.addEventListener('keydown', (event) => {
    if(event.keyCode == 39 || event.key == "ArrowRight") {
        isRightArrow = true
        isLeftArrow = false
    } else if (event.keyCode == 37 || event.key == "ArrowLeft") {
        isRightArrow = false
        isLeftArrow = true

    }
})

document.addEventListener('keyup', (event) => {
        isRightArrow = false
        isLeftArrow = true


//ArrowLeft 37
//ArrowRight 39