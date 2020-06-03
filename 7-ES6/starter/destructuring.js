// ///////////////////////
//destructuring: convenient way to extract data from an object or an
// array.


// ES5 
// var john = ['john', 26];
// var name =john[0];
// var age = john[1];

// ES6
// cretaes a variable for each one.
const [name, age] = ['john',26];
console.log(name);
console.log(age);

const obj = {
    firstNames: 'John',
    lastNames: 'smith'
};

const {firstNames, lastNames} = obj;
console.log(firstNames);
console.log(lastNames);


// practical way of doing that.
function calAgeRetirement(year){
    const age = new
    Date().getFullYear() - year;
    return [age, 65 - age];

}

// we are pulling teh values from the function.
// destructure part.
const [age2, retirement] = calAgeRetirement(1990);
console.log(age2);
console.log(retirement);
