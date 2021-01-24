let canvas= document.querySelector('canvas')
canvas.style.backgroundColor = "#358590"

let bgimg = document.createElement('img')
bgimg.src = "../gilmore-jump/images/backgroundEmpty.png"

let ctx = canvas.getContext('2d')
ctx.fillStyle = "black"
ctx.fillRect(230, 850, 120, 20)

bgimg.addEventListener('load', () => {
    ctx.drawImage(bgimg, 10, 10)
})