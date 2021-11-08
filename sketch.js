/*
@author Cody
@date 2021-11-8

version comments
    sound wave with lifetime and radius, opacity
    basic speaker with emitted sound waves
    coloring, moving speaker

 */
let font
// let soundWave
let speaker

function preload() {
    font = loadFont('data/Meiryo-01.ttf')
}

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)
    // soundWave = new SoundWave(random(width), random(height))
    speaker = new Speaker(width/2, height/2)
}

function draw() {
    // background(209, 80, 30)
    
    background(234, 34, 24)

    // soundWave.show()
    // soundWave.update()
    speaker.show()
    speaker.update()
    // what is our speaker going to be at next frame?
    let x = width/2 + 20 * cos(frameCount/5)
    let y = height/2 + 20 * sin(frameCount/5)
    speaker.pos = new p5.Vector(x, y)
}

class SoundWave {
    constructor(x, y, c) {
        this.pos = new p5.Vector(x, y)
        this.lifetime = 100
        this.c = c // our color
    }

    show() {
        noFill()
        stroke(hue(this.c), saturation(this.c), brightness(this.c), this.lifetime)
        circle(this.pos.x, this.pos.y, (100-this.lifetime)*width/75)
    }

    update() {
        this.lifetime -= 1
    }
}


class Speaker {
    constructor(x, y) {
        this.pos = new p5.Vector(x, y)
        this.soundwaves = []
    }

    show() {
        let c = color((frameCount)%360, 100, 100)
        fill(c)
        noStroke()
        circle(this.pos.x, this.pos.y, 10)

        // let's show our sound waves!
        for (let wave of this.soundwaves) {
            wave.show()
        }
    }

    update() {
        // we always want to append a sound wave at our position
        let c = color((frameCount)%360, 100, 100)
        this.soundwaves.push(new SoundWave(this.pos.x, this.pos.y, c))

        // let's update our sound waves!
        for (let wave of this.soundwaves) {
            wave.update()
        }
    }
}


