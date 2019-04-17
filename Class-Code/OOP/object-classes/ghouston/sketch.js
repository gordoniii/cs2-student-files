//Gordon Houston III
//OOP
//4/17/19

/*OOP Project*/


let x, y, r;
let xVel = 5;
let yVel = 5;
let bubble0;
let bubble1;

function setup() {
    createCanvas(600, 400);
    bubble0 = new Bubble()
    bubble1 = new Bubble()
    ellipseMode(RADIUS)
}

function draw() {
    background(0, 50);
    bubble0.move()
    bubble0.display()
    bubble0.checkEdges()

    bubble1.move()
    bubble1.display()
    bubble1.checkEdges()
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