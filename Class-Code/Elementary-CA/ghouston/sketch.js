//Gordon Houston III
//2/28/19
//Elementary CA Project

//Class Project

let gen1 = Array(57).fill(0);
const ruleset = [0, 1, 1, 1, 1, 1, 1, 0]
let ca = [];
let gensize = 101;
let gridsize;

function setup() {
  createCanvas(400, 400);
  gen1[round(gen1.length / 2)] = 1;
  gridsize = width / gen1.length;
  console.log(gridsize);
  let gen0 = Array(gensize).fill(0);
  gen0[floor(gensize / 2)] = 1;
  ca.push(gen0);
  gridsize = width / gensize
  fill(0);
}

function draw() {
  background(120);

  for (let i = 0; i < gen1.length; i++) {
    if (gen1(i) == 1) {
      fill(0);
    } else {
      fill(255);
    }
    noStroke()
    rect(i * gridsize, 0, gridsize, gridsize);
  }
  background(255)
  //display
  noStroke();
  for (let j = 0; j < ca.length; j++)
    for (let i = 0; i < gensize; i++) {
      if (ca[j][i] == 1) {
        rect(i * gridsize, j * gridsize, gridsize, gridsize);
      }

    }
}
//generate
let thisGen = ca[ca.length - 1]
let nextGen = Array(gensize).fill(0);


for (let i = 1; i < nextGen.length - 1; i++) {
  let nextval = applyRules(thisGen[i - 1], thisGen[i], thisGen[i + 1]);
  nextGen[i] = nextval
}
ca.push(nextGen);


function applyRules(l, me, r) {
  if (l == 1 && me == 1 && r == 1) return ruleset[0]
  else if (l == 1 && me == 1 && r == 0) return ruleset[1]
  else if (l == 1 && me == 0 && r == 1) return ruleset[2]
  else if (l == 1 && me == 0 && r == 0) return ruleset[3]
  else if (l == 0 && me == 1 && r == 1) return ruleset[4]
  else if (l == 0 && me == 1 && r == 0) return ruleset[5]
  else if (l == 0 && me == 0 && r == 1) return ruleset[6]
  else if (l == 0 && me == 0 && r == 0) return ruleset[7]
}
// function draw() {
//     background(255);

//   for(let i = 0; i < gen1.length; i++){
//       if(gen1[i] == 1){