//Your Name(s)
//Project Name
//Date

/* A brief description of what the program is */

class Walker {
    constructor(x, y, r) {
        this.x = x
        this.y = y
        this.r = r
        this.static = false
    }

    show() {
        if (this.static) {
            fill(0)
        } else {
            fill(200)
        }
        ellipse(this.x, this.y, this.r)
    }
    aggregate(other) {
        if (!this.static && other.static) {
            let d = dist(this.x, this.y, other.x, other.y)
            let sumOfRadii = this.r + other.r
            let collide = d <= sumOfRadii

            if (collide) {
                this.static = true
            }
        }
    }

    move() {
        if (!this.static) {
            this.x += random(-10, 10);
            this.y += random(-10, 10);
            //this.r += random(-5, 5);
        }
    }
}


let walkers = [];

function setup() {
    createCanvas(600, 600);
    ellipseMode(RADIUS)
    for (let i = 0; i < 100; i++) {
        walkers.push(new Walker(random(width), random(height), 10));
    }

    let seed = new Walker(width / 4, height / 4, 20);
    seed.static = true;
    walkers.push(seed);
}

function draw() {
    background(220);
    for (let i = 0; i < walkers.length; i++) {
        walkers[i].show();
        walkers[i].move();
        for (let j = i + 1; j < walkers.length; j++) {
            walkers[i].aggregate(walkers[j])
        }
    }
    //aggregate(other)

}