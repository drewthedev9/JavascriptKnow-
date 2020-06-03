// //////////////////
// Lecture: strings.

let firstName = 'John';
let lastName = 'smith';
const yearOfBirth = 1990;

const calcAge=(year)=>{
    return 2016 - year;
}

// es5 The old way 
console.log("This is " + firstName + '' 
+ lastName + "He was born in" + yearOfBirth 
+ "today he is" + 
calcAge(yearOfBirth) + "years old" );

// es6 better way.
console.log(`This is ${firstName}${lastName}.
 He was born in ${yearOfBirth}. 
 Today he is ${calcAge(yearOfBirth)}`);

//  test if a string starts ,ends or includes letters.
 const n = `${firstName} ${lastName}`;
 console.log(n.startsWith('J'));
 console.log(n.endsWith('J'));
 console.log(n.includes('oh'));