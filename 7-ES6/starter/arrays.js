// //////////////
// Arrays

// selects all of the boxes.
//  querySelectorAll makes a node list
// we then turn that node list into an array.
// reffering to thr HTML element in inde.html.
const boxes = document.querySelectorAll('.box');

// ES5
// grabs protoypeof array and then grba section of the array
// call also allows for us to reference the array above.
// gives an array list
// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function(cur){
//     cur.style.backgroundColor = "dodgerblue";
// });





//  ES5 
// loops hrough boxes if array an changes the text to blue.
// for(var i = 0; i < boxesArr5.length; i ++){

//     if(boxesArr5[i].className === 'box blue'){
//          continue;
//         // break; 
//         // would break from the loop and not get to he third box class.
//     }
//     // other wise change them to this text.
//     boxesArr5[i].textContent = 'I changed to blue!';
// } 

//Es6

// trannsforms the node list from boxes into an array.

//  gets the array from boxes variable.
const boxesArr6 = Array.from(boxes);
 boxesArr6.forEach(cur => cur.style.backgroundColor = "dodgerblue");


// ES6 looping through the array. Change the text.
for (const cur of boxesArr6){
    if (cur.className.includes('blue')){
        continue;
    }

cur.textContent = 'I changed to blue!';
}


// Es5

var ages =  [12,17,8,21,14,11];

var full= ages.map(function(cur){
    return cur >= 18;
});

console.log(ages);
console.log(full);

// fids the index of teh array above which is true according to the funcion
// which iundex is higher than 18 = index 3
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


// ES6
console.log(ages .findIndex(cur => cur >= 18));
console.log( ages.find(cur => cur >=18));




