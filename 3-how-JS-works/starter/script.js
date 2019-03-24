///////////////////////////////////////
// Lecture: Hoisting

// main point can call above function declarations.-    Overall
// can use before declaring functions.
calculateAge(1965);


// // doesnt work with new functions!
// const calculateAge =(year) => {
//     console.log (2016 - year);
// }

function calculateAge(year){
    console.log(2019 - year) 
}


// function expression - function as a variable.
//  years till they retire.
// doesnt work with function expressions.
var retirement = function(year){
    console.log(65 - (2019 - year));
} 

retirement(1990);

// variables

// calling a variable above will be undfined the way the stack works
// needs ro be underneath the variable then logged.
console.log(age);
var age = 23;
console.log(age);

const foo = () =>{
    var age =65;
    console.log(age)
}

foo();
// =65 functional context.
console.log(age);
//=23 global context





///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

// scoping can only acccess var a & d 
function third() {
    var d = 'John';
    console.log(a  + d);
}
// Hello!john.




///////////////////////////////////////
// Lecture: The this keyword



const calculateAge2 = (year) => {
    console.log(2019 - year);
    console.log(this);
}

calculateAge2(1985);


var john = {
    name: 'John',
    yearOfBirth: 1990 ,
    // method = function inside of an object.
    calculateAge: function() {
        // This reffering to this object john.
        console.log(this);
        console.log(2019- this.yearOfBirth);

        // = window object is still a normal function although inside
        // a obeject with a function.
        // DOES not poiny to the joh object like the other "this" word.
        // const innerFunction =() =>{
        //     console.log(this);
        // }
        // innerFunction();
    }
}


// calls the calculateAge function on the john object above.
john.calculateAge();

const mike = {
    name:' mike',
    yearOfBirth : 1984
}

//  Method borrowing -> use johns method(above) for mikes object

// No perentheses necessary. 
mike.calculateAge = john.calculateAge;
mike.calculateAge();