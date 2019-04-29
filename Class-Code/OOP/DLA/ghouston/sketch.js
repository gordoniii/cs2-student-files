//Gordon Houston III
//DLA
//4/29/19

/* It is a randomly growing conecpt that */

class Walker {
    constructor(x, y, r) {
        this.x = x
        this.y = y
        this.r = r
        this.static = false
        
    }


    show() {
        if (this.static) {
            fill(400)
        } else {
            fill(4000)
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
            this.x += random(-5, 5);
            this.y += random(-5, 5);
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
    //for (let j = 0; j < 100; j++) {
    for (let i = 0; i < walkers.length; i++) {
        walkers[i].show();
        walkers[i].move();
        for (let j = i + 1; j < walkers.length; j++) {
            walkers[i].aggregate(walkers[j])
        }
    }
    //}
    //for(let w of walkers) w.show
    //aggregate(other)

}