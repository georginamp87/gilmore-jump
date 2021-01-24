# Gilmore Jump

## Description

Gilmore-Jump is a game where the player jumps from a high tower holding an umbrella and has to move horizontally while falling to land on top of the inflatable cushion. The game ends if the player isn't able to land on the cushion which moves sideways at a increasing speed. After that, a score is calculated based on the ability to land safely and the amount of time the game lasted.

## MVP (DOM - CANVAS)

- game has one or two jumpers who slowly fall to the ground
- players can swift sideways to aim for the safety cushion
- cushion moves sideways at the bottom of the screen
- falling outside from the cushion will end the game
- increasing speed on the cushion
- Increasing dificulty

## Backlog

- add scoreboard
- Ability to start the game on increased dificulty lvl

## Data Structure

# main.js

- buildSplashScreen () {}
- buildGameScreen () {}
- buildGameOverScreen () {}

# game.js

- Game () {}
- starLoop () {}
- checkCollisions () {}
- addTentacle () {}
- clearCanvas () {}
- updateCanvas () {}
- drawCanvas () {}
- GameOver () {}

# jumper.js 

- Jumper () {
    this.x;
    this.y;
    this.direction;
    this.size
}
- draw () {}
- move () {}
- checkScreenCollision () {}

# cushion.js 

- Cushion () {
    this.x;
    this.y;
    this.direction;
    this.size
}
- draw () {}
- move () {}
- checkCollisionButton () {}

<!-- # birds.js 

- Birds () {
    this.x;
    this.y;
    this.direction;
    this.size
}
- draw () {}
- move () {}
- checkCollisionTop () {} -->

## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
- gameScreen
- gameOverScreen

## Task

- main - buildDom
- main - buildSplashScreen
- main - addEventListener
- main - buildGameScreen
- main - buildGameOverScreen
- game - startLoop
- game - buildCanvas
- game - updateCanvas
- game - drawCanvas
- cushion - draw
- cushion - move
- game - addCushion
- jumper - draw
- jumper - move
- game - addJumper
- game - checkCollision
- game - GameOver
- game - addEventListener

## Links

### Trello
[Link url](https://trello.com/b/CWviY2zv/kraken-brigade-project)

### Git
URls for the project repo and deploy
[Link Repo](https://github.com/georginamp87/gilmore-jump)
[Link Deploy](https://jorgeberrizbeitia.github.io/kraken-brigade/)

### Slides
URls for the project presentation (slides)
[Link Slides.com](https://docs.google.com/presentation/d/138o01hAz-0gXepN78RsDgse12HiiuN7Fz_N_hJnI9_g/edit?usp=sharing)