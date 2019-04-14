// primitives vs objects.
//  undefined , null , boolean , string and number .
//  Everything else is an object.

// primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// Objects 
var obj1 = {
    name:'john',
    age: 26
}

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age)
console.log(obj2.age)

// Functions

var age = 27;
var obj = {
    name: 'Jonas',
    city: 'lisbon'
}

function change(a,b){
    a=38;
    b.city ='san fransisco';

} 

console.log(age); //27
console.log(obj.city); //san fransisco
//  the var age valuw wont change but the obj.city proprty will,
// it only makes areference to the object ist creating a new one.
// check in lesson 64 - Primitives and objects. 3rd book mark
