let startBtn = document.querySelector('#btn-start')
let restartBtn = document.querySelector('#restart')
let gameDOM = document.querySelector('#game')

// let game = new Timer()



startBtn.addEventListener('click', () => {
    gameDOM.start()
})

restartBtn.addEventListener('click', () => {
    //call the game restart method
})