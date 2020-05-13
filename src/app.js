console.log('open');

// guess the height to start
let height = 152;
console.log('we guess you are ' + height + 'cms');

// then grab it from the input

// baseline board size

// probably smart with a good guess
// let size = 160;

//  if (height > 190) {
//     let size = height * 0.9;
// }

// if (height > 180) {
//     let size = height * 0.91;
// }

// if (height > 170) {
//     let size = height * 0.92;
// }

// if (height > 160) {
//     let size = height * 0.93;
// } 

// need to sort out all the good else if statements
// let size = height * 0.94;

// there might be a super smart math formula to this i.e.
// height * x = y 
// if x is 190 y = 0.85 (/2 = .95)
// if x is 180 y = 0.90 (/2 = .90)
// if x is 170 y = 0.95 (/2 = .85)

// this works but it goes too far I need to calm down the formula
// if x is 190 y = 0.85 (*.5 = .95) + (180 - x) = 0.85
// if x is 180 y = 0.90 (*.5 = .90) + (180 - x) = 0.90
// if x is 170 y = 0.95 (*.5 = .85) + (180 - x) = 0.95

// this is remarkably close for some random guessing
math = (( height * 0.5 ) + (( 180 - height ) / 1.5) ) / 100; // guessing the numbers is there something smarter to do with these?
console.log(math + ' trying');
let size = height * math;
console.log('size =' + size);

// do the same thing and make something up for this
let base_weight = height * 0.35; // there might be a universalequation for this

// weight is a baseline but also shows up
console.log('baseline weight =' + base_weight + 'kg');

let weight = 94;

let guess_weight = 93.5;

if (weight > guess_weight) {
    // add some cms
    let size_weight = size + 2;
    console.log('with you weight we think your board should be ' + size_weight + 'cms');
} 
if (weight < guess_weight) {
    //subtract some cms
    let size_weight = size - 2;
    console.log('with you weight we think your board should be ' + size_weight + 'cms');
}
    else {
    let size_weight = guess_weight
    console.log('with you weight we think your board should be ' + size_weight + 'cms');
}

if (weight > guess_weight && weight > (guess_weight * 1.1)) {
    console.log('tubby');
} else {
    console.log('skiny');
}

// setinnerhtml whateveer this code is


function page() {
    document.getElementById("pageSize").innerHTML = math; 
}

// make this happen when the page loads
window.onload = function() {
    page();
};

