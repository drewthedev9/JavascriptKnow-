// lecture: laet and const

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

        console.log( firstName + 'born in' + yearOfBirth + " can drive");
    }

}

diversLicense(true);

// ES6

function diversLicense6(passedTest){

    if (passedTest){
        var firstName ='John';
        var yearOfBirth = 1990;

        console.log( firstName + 'born in' + yearOfBirth + " can drive");
    }

}

diversLicense6(true);