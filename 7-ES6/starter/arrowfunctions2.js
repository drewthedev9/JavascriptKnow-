// ///////////////////////
// THIS keyword. 
//Lecture: Arrow functions 2

// ES5 
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        // have to use this to acces the keyword this
        // and therefore the box5 object.
        var self = this;
        document.querySelector('.green').addEventListener('click',
        function(){
            // the this key word does not point to the
            // box 5 0bject. But instead it points to the
            // window object. lecture 108 has good video on it.
            var str ='This is box number' + self.position + 
            'and it is' + self.color;
            alert(str);
        })
    }
}

// box5.clickMe();


// ES6 
var box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
       document.querySelector('.green').addEventListener('click',
        // Arrow function share the this keyword with their surrounding.
        () =>{
            var str ='This is box number' + this.position + 
            'and it is' + this.color;
            alert(str);
        })
    }
}

box6.clickMe();

function Person(name){
    this.name = name;
}

// ES5
Person.prototype.myFriends5 = 
function(friends){

    var arr = friends.map(function(el){
        return this.name + 'is friends with' + el;
    // bind to set the this key word manually
    }.bind(this));

    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person ('John').myFriends5(friends);

// ES6
Person.prototype.myFriends6 = 
function(friends){

    var arr = friends.map(el=> {
        return `${this.name} is friends with ${el}`
    // bind to set the this key word manually
    });

    console.log(arr);
}


new Person ('Mike').myFriends6(friends);