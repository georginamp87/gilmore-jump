let startBtn = document.querySelector('#btn-start')
let restartBtn = document.querySelector('#restart')
let gameDOM = document.querySelector('#game')
let canvas= document.querySelector('canvas')
canvas.style.backgroundColor = "#358590"
canvas.style.border = '2px dotted #355890'
let bgImg = document.createElement('img')
bgImg.src = "./images/backgroundCastles.png"
let grassImg = document.createElement('img')
grassImg.src = "./images/backgroundColorGrass.jpg"
let towerImg = document.createElement('img')
towerImg.src = "./images/tower.png"
let jumpersImg = document.createElement('img')
jumpersImg.src = "./images/jumpersfalling.png"
let treeImg = new Image
treeImg.src = "./images/treePine.png"
let moonImg = new Image
moonImg.src = "./images/moon.png"
let pineImg = new Image
pineImg.src = "./images/treeSmall_green1.png"
let treesImg = new Image
treesImg.src = "./images/treeSmall_green2.png"
let ctx = canvas.getContext('2d')
let jumpersDOM = new Jumpers(110, 255) // this is your jumpers obj
let cushionX = 25
let cushionWidth = 120
let cushionHeight = 20
let cushionY = 850
let incrementX = 10
let incrementY = 3
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
    if (jumpersDOM.y + cushionHeight > canvas.height) {
        if (jumpersDOM.X > cushionX && jumpersDOM.x < cushionX + cushionWidth) {
            incrementY = -incrementY
            score++
        }
        else {
            clearInterval(intervalID)
            // = game.gameOver()
        }
    }
}

function draw() {
    ctx.clearRect(0,0, canvas.width, canvas.height)
    ctx.drawImage(bgImg, 10, 20)
    ctx.drawImage(grassImg, 10, canvas.height - grassImg.height)
    ctx.drawImage(towerImg, 80, 600)
    ctx.drawImage(towerImg, 80, 425)
    ctx.drawImage(towerImg, 80, 248)
    ctx.drawImage(moonImg, 590, 120)
    ctx.drawImage(pineImg, 630, 765)
    ctx.drawImage(pineImg, 728, 773)
    ctx.drawImage(pineImg, 780, 779)
    ctx.drawImage(treeImg, 745, 745, 50, 90)
    ctx.drawImage(treesImg, 40, 760, 20, 50)
    ctx.drawImage(treesImg, 15, 755)
    ctx.drawImage(treeImg, 650, 570)
    ctx.drawImage(jumpersImg, jumpersDOM.x, jumpersDOM.y, jumpersDOM.width, jumpersDOM.height)
    drawRect()
    cushionMove()
    ctx.font = '24px Verdana'
    ctx.fillText('Score:' + score, 50, 50)

    if(isRightArrow && jumpersDOM.x + jumpersDOM.width < canvas.width) {
       jumpersDOM.x += jumpersDOM.incrementX
    } 
    else if (isLeftArrow && jumpersDOM.x > 0) {
      jumpersDOM.x -= jumpersDOM.incrementX
     jumpersDOM.jumpersMove()
    }    
    
    if ((jumpersDOM.x > cushionX) && 
    (jumpersDOM.x + jumpersDOM.width < cushionX + cushionWidth) &&
    (jumpersDOM.y + jumpersDOM.height > cushionY) ) {
     incrementY = -randomIndex
     incrementX += randomIndex
 }
 else if (jumpersDOM.x + jumpersDOM.width > 300){
     jumpersDOM.y += randomIndex
 }
 else { 
     jumpersDOM.y += incrementY
 }

    cushionX += incrementX

}

intervalID = setInterval(() => {
    requestAnimationFrame(draw)
}, 100)



bgImg.addEventListener('load', () => {
    ctx.drawImage(bgImg, 0, 0, 780, 880)
})
// let game = new gameDOM()


window.addEventListener('load', () => {
    // canvas.style.display = 'none'

    startBtn.addEventListener('click', () => {
    gameDOM.start()
})

})

restartBtn.addEventListener('click', () => {
    //call the game restart method
    gameDOM.start()
})