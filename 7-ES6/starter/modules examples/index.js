//  thIS IS FROM THE REACT COURSE.
 
 class Person {
    constructor(name){
        this.name = name;
    }

    walk(){
        console.log("Walk");
    }
}

// want to inherit walk from Person. for React
 class Teacher extends Person{
    constructor(name, degree){
       //  initialaize the name property from parent class.
       super(name);
       this.degree = degree;
    }
   
       teach(){
           console.log("teach");
       }
   }

// inherit from techer.
const teacher = new Teacher("Mosh", "MSc");
teacher.teach();
