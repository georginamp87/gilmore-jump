//DOM ELEMENTS
let startBtn = document.querySelector('#btn-start')
let restartBtn = document.querySelector('#restart')
let pikaBtn = document.querySelector('#teamvalor')
let gameoverScreen = document.getElementById('gameover')
let splash = document.querySelector('#splash')
let canvas= document.querySelector('#canvas')
let jumpersDOM = new Jumpers(110, 255) // this is your jumpers obj
canvas.style.backgroundColor = "#358590"
canvas.style.border = '2px solid #355890'
let ctx = canvas.getContext('2d')

//IMAGES
let bgImg = document.createElement('img')
bgImg.src = "./images/backgroundCastles.png"
let grassImg = document.createElement('img')
grassImg.src = "images/backgroundColorGrass.jpg"
let towerImg = document.createElement('img')
towerImg.src = "images/tower.png"
let jumpersImg = document.createElement('img')
jumpersImg.src = "images/jumpersfalling.png"
let treeImg = new Image
treeImg.src = "images/treePine.png"
let moonImg = new Image
moonImg.src = "images/moon.png"
let pineImg = new Image
pineImg.src = "images/treeSmall_green1.png"
let treesImg = new Image
treesImg.src = "images/treeSmall_green2.png"
let cushionImg = new Image
cushionImg.src = "images/fountainRound_N.png"
let logoImg = new Image
logoImg.src = "images/GilmoreGirlsLogo.png"


//VARIABLES
let cushionX = 50
let cushionWidth = 150
let cushionHeight = 70
let cushionY = 800
let incrementX = 10
let incrementY = 5
let intervalID = 0
let time = 0
let score = 0
let jump = false;
let randomIndex = Math.floor(Math.random() * 10) + 1

//SOUND
let gameOverSound = new sound ("audio/gameover.m4a")
gameOverSound.volume = 0.1
let jumpJack = new sound('audio/playingSound.m4a')
jumpJack.volume = 0.1
let inOmniaSound = new sound ("audio/inomniaparatus.m4a")
inOmniaSound.volume = 0.1
let pika = new sound ("audio/pikachu.wav")
pika.volume = 0.01
let bgSound1 = new sound ("audio/backgroundSound1.m4a")
bgSound1.volume = 0.1
let bgSound2 = new sound ("audio/backgroundSound2.m4a")
bgSound2.volume = 0.1
let level = 0


function drawRect() {
ctx.drawImage(cushionImg, cushionX, cushionY, cushionWidth, cushionHeight)
}

function cushionMove() {
    //check for left
    if (cushionX < 50) {
        incrementX += 1
    }

    //check for right
        if (cushionX + cushionWidth > 770) {
        incrementX = -incrementX
        }
}

function displayScore() {
    ctx.font = '24px Yusei Magic'
    ctx.fillStyle = '#FF8066'
    ctx.fillText('Score: ' + score, 50, 50)
}

function levelUp() {
    if (score > 20 || score > 100) {
        incrementX += 1
    }
    if (score > 30 || score > 150) {
        bgSound1.play()
        

        if (cushionX > 200) {
            cushionX -= 1
        } 
        
    }

    if (score > 50) {
        bgSound1.stop()
        bgSound2.play()
    }

    if (score > 100) {
        jumpersDOM.y += 1
        bgSound2.stop()
        inOmniaSound.play()
        inOmniaSound.stop()
    }
}

function gameOver() {
    canvas.style.display = 'none'
    let gameover = document.querySelector('.gameover')
    gameover.style.display = 'block'
    let getScore = document.querySelector('.finalscore')
    getScore.innerHTML = "Score: " + score 
    jumpJack.stop()
    gameOverSound.play()
}

//Create a method to restart the game
function restart() {
    canvas.style.display = 'block'
    let gameover = document.querySelector('.gameover')
    gameover.style.display = 'none'
    jumpersDOM = new Jumpers (115,255)
    score = 0
    start()
}


function jumpersFall () {
    if (jumpersDOM.y + jumpersDOM.height >= canvas.height) {
        clearInterval(intervalID);
        jumpJack.stop()
        gameOver()
        // location.reload(); 
    }
    
}

function draw() {
    ctx.clearRect(0,0, canvas.width, canvas.height)
    ctx.drawImage(bgImg, 0, 0)
    ctx.drawImage(logoImg, 250, 65)
    ctx.font = '45px Yusei Magic'
    ctx.fillStyle = '#FF8066'
    ctx.fillText('Jump', 450, 180)
    ctx.drawImage(grassImg, 0, canvas.height - grassImg.height)
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
    drawRect()
    ctx.drawImage(jumpersImg, jumpersDOM.x, jumpersDOM.y, jumpersDOM.width, jumpersDOM.height)
    displayScore()
    cushionMove()
    jumpersFall()
    levelUp()


    if(isRightArrow && jumpersDOM.x + jumpersDOM.width < canvas.width) {
       jumpersDOM.x += jumpersDOM.incrementX
    } 
    else if (isLeftArrow && jumpersDOM.x > 0) {
      jumpersDOM.x -= jumpersDOM.incrementX
    }    


    if ((jumpersDOM.x > cushionX) && 
    (jumpersDOM.x + jumpersDOM.width < cushionX + cushionWidth) &&
    (jumpersDOM.y + jumpersDOM.height >= cushionY) ) {
        jump = true
        score++
    }

    if (jump) {
       let jumpInterval = setInterval(() => {
            jumpersDOM.y -= 1

            if (jumpersDOM.y < 250) {
                jump = false;
                clearInterval(jumpInterval)
            }
         }, 100)
    }
    
    jumpersDOM.y += incrementY

    cushionX += incrementX
    
}

// TEST THE GAME
function start() {
    splash.style.display = 'none'
    canvas.style.display = 'block'
    startBtn.style.display = 'none'
    jumpJack.play()
    intervalID = setInterval(() => {
        time += 1 
        requestAnimationFrame(draw)
    }, 100)
}

//ADD SOUND
function sound(src) {
   this.sound = document.createElement("audio")
   this.sound.src = src
   this.sound.setAttribute("preload", "auto")
   this.sound.setAttribute("controls", "none")
   this.sound.style.display = "none"
   document.body.appendChild(this.sound)
   this.play = function() {
       this.sound.play()
   }
   this.stop = function(){
       this.sound.pause()
   }
}

window.addEventListener('load', () => {
    canvas.style.display = 'none'

    startBtn.addEventListener('click', () => {
    start()
    })

    restartBtn.addEventListener('click', () => {
    //call the game restart method
    restart()
    })

    
})

pikaBtn.addEventListener('click', () => {
    pika.play()
    })