import {Person} from "./Person";

// want to inherit walk from Person. for React
export class Teacher extends Person{
    constructor(name, degree){
       //  initialaize the name property from parent class.
       super(name);
       this.degree = degree;
    }
   
       teach(){
           console.log("teach");
       }
   }