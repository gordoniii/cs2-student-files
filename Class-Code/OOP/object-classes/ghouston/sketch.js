//Gordon Houston III
//OOP
//4/17/19

/*A template that creates 3 balls that move in a random order seperate from each other*/


let bubbles = new Array()

function setup() {
    createCanvas(600, 400);
    for (let i = 0; i < 100; i++) {
        bubbles.push(new Bubble(i))
    }
    ellipseMode(RADIUS)
}

function draw() {
    background(0, 50);
    for (let i = 0; i < 100; i++) {
        bubbles[i].move()
        bubbles[i].display()
        bubbles[i].checkEdges()
    }
}
class Bubble {
    constructor() {
        this.x = random(10, width - 10)
        this.y = random(10, height - 10)
        this.r = 10
        this.xVel = 5
        this.yVel = 5
    }

    display() {
        fill(0, 255, 100);
        stroke(255);
        ellipse(this.x, this.y, this.r)
    }
    checkEdges() {
        if (this.x + this.r >= width || this.x - this.r <= 0) this.xVel *= -1;
        if (this.y + this.r >= height || this.y - this.r <= 0) this.yVel *= -1;
    }


    move() {
        this.x += this.xVel;
        this.y += this.yVel;
    }
}