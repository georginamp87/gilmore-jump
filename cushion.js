let canvas= document.querySelector('canvas')
canvas.style.backgroundColor = "#358590"
let bgImg = document.createElement('img')
bgImg.src = "../gilmore-jump/images/backgroundEmpty.png"
let ctx = canvas.getContext('2d')
let jumpersDOM = document.querySelector('.jumpers')
let cushionX = 15
let cushionWidth = 120
let cushionHeight = 20
let cushionY = 850
let incrementX = 1
let incrementY = 1
let intervalID = 0
let score = 0

function drawRect() {
ctx.beginPath()
ctx.fillStyle = "black"
ctx.fillRect(cushionX, cushionY, cushionWidth, cushionHeight)
ctx.closePath()
}

function cushionMove() {
    //check for left
    if (cushionX < 30) {
        incrementX += 1
    }

    //check for right
        if (cushionX + cushionWidth > 770) {
        incrementX = -incrementX
        }
    
    //check for top
    if (cushionY + cushionHeight > canvas.height) {
        if (jumpersX > cushionX && jumpersX < cushionX + cushionWidth) {
            incrementY = -incrementY
            score++
        }
        else {
            clearInterval(intervalID)
            //gameOver
        }
    }
}

function draw() {
    ctx.clearRect(0,0, canvas.width, canvas.height)
    ctx.drawImage(bgImg, 0, 0)
    drawRect()
    cushionMove()
    ctx.font = '24px Arial'
    ctx.fillText('Score:' + score, 50, 30)

    if(isRightArrow && jumpersDOM.x + jumpersDOM.width < canvas.width) {
       jumpersDOM.x += jumpers.jumpersMove
    } 
    else if (isLeftArrow && jumpersDOM.x > 0) {
      jumpersDOM.x -= jumpers.jumpersMove
    }    
    
    jumpersDOM.y += incrementY
    cushionX += incrementX

}

// intervalID = setInterval(() => {
//     requestAnimationFrame(draw)
// }, 30)



bgImg.addEventListener('load', () => {
    ctx.drawImage(bgImg, 10, 10)
})