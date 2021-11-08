/*
@author Cody
@date 2021-11-8

version comments
    sound wave with lifetime and radius, opacity
    basic speaker with emitted sound waves
    coloring

 */
let font
let soundWave

function preload() {
    font = loadFont('data/Meiryo-01.ttf')
}

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)
    soundWave = new SoundWave(random(width), random(height))
}

function draw() {
    // background(209, 80, 30)
    
    background(234, 34, 24)

    soundWave.show()
    soundWave.update()
}

class SoundWave {
    constructor(x, y) {
        this.pos = new p5.Vector(x, y)
        this.lifetime = 100
    }

    show() {
        noFill()
        stroke(0, 0, 100, this.lifetime)
        circle(this.pos.x, this.pos.y, (100-this.lifetime)*width/75)
    }

    update() {
        this.lifetime -= 1
    }
}