// lecture: let and const

/*
// Es5  
var name5 = 'Jane smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5)

//Es6 

// const = variable that wont change.cannnot change the name6 with const setting of a variable.
// let = variable taht will/can change.
const name6 = 'Jane smith';
let age6 =23;
name6 = 'Jane Hiller'
console.log(name6);
*/

//ES5 
function diversLicense(passedTest){

    if (passedTest){
        var firstName ='John';
        var yearOfBirth = 1990;

    }
    // var variables still have access to things inside of the function
    console.log( firstName + 'born in' + yearOfBirth + " can drive");

}

diversLicense(true);

// ES6

function diversLicense6(passedTest){
    // if you want to access the variables you will have to declare them 
    // outside of teh function.

    let firstName;
    // const needs to be outside of the block of code.
    const yearOfBirth = 1990;
    
    if (passedTest){
        let firstName ='John';
       

    }
    // will get an error because let and const are block scoped.
    console.log( firstName + 'born in' + yearOfBirth + " can drive");

}

diversLicense6(true);

// Blocks And IIFEs

{
    const a = 1;
    let b = 2;
}
console.log(a + b);

// Es5 
// create a variable that is not accesible from the
// outside.
(function() {
    var c = 3;
})

console.log(c);