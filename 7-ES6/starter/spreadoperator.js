// Spreadoperator
// /////////////////

function addFourages(a,b,c,d){
    return a + b + c + d;
}

var sum1 = addFourages(18,30,12,21);
console.log(sum1);

// ES5

var ages = [18,30,12,21];
// apply will  take the elements aof the ages arry and 
// apply them to the function.
var sum2 = addFourages.apply(null, ages);
console.log(sum2);

// ES6
// Spread operator = same as Es5 above. (...ages).
// No need for apply and null 
const sum3 = addFourages(...ages);
console.log(sum3);

// spread takes them out of the array and joins the arrays
// together.
const familySmith = ["john", 'Jane', "mark"];

const familyMiller = ["mary", "Bob", "Ann"];

const bigFamily = [...familySmith,"Lilu",...familyMiller];
console.log(bigFamily);

// only selects a node
const h = document.querySelector('h1');
// quesryselector all returns a node list.
const  boxes = document.querySelectorAll(".box");
// combine the two lists togther 
const all = [h,...boxes];
// then convert them to an array.Array.from(all)
// then loops through all of them. chamges the style with 
// and arrow function.

Array.from(all).forEach(cur => cur.style.color="purple");




