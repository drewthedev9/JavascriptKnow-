// practicing the this key word.
import { Person } from './modules examples/Person';

const person ={
    name: "Andrew",
    skatebaording(){
        console.log("Im skateboarding")
        console.log(this);
    }

}

person.skatebaording();

// this is a reference to the person object above.
// we are NOT calling it here.
// sk8 is now a funtion referenced from object above.
const sk8 = person.skatebaording;
// this is console that referenc
console.log(sk8);
// stand alone object or function this doesnt have acces 
// the object above because it is referencing the global window object.
skatebaording();

// classes and and inheritance:
const person ={
    name: "Andrew",
}


class Person {
    
    walk() {
    console.log("Im walkig")
}
}
