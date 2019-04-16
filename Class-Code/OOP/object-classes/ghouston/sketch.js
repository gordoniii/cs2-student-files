//Your Name(s)
//Project Name
//Date

/* A brief description of what the program is */


let x, y, r;
let xVel = 5;
let yVel = 5;
let bubble;

function setup() {
    createCanvas(600, 400);
    // x = width / 2;
    // y = height / 2;
    // r = 10;

    bubble = new Bubble()

    ellipseMode(RADIUS)
}

function draw() {
    background(0, 50);
    bubble.move()
    bubble.display()
}
// moveBy();
// show();

//display
// fill(0, 255, 100);
// stroke(255);
// ellipse(x, y, r)

// //move ball

// x += xVel;
// y += yVel;

checkEdges

if (x + r >= width || x - r <= 0) xVel *= -1;
if (y + r >= height || y - r <= 0) yVel *= -1;

class Bubble {
    constructor() {
        this.x = 5
        this.y = 5
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
// bubble = new Bubble
//     constructor()
//     this.x = 10
//     this.y = 5
//     this.r = 5