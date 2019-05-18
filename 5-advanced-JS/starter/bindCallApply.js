// Bind , call, and apply

var john = {
    name: 'john',
    age: 26,
    job: 'teacher',
    // methofd for john to present stuff.
    presentation : function(style,timeOfDay){
        if (style === 'formal'){
            console.log('good '  + timeOfDay + ' ladies and gentle men! I\'m',
             this.name + ', I\'m a ' + 
             this.job + ' and I\'m ' +
             this.age  + 'years old');
        } else if (style === 'friendly'){
            console.log( 'Hey! whats\'s up? I\'m ' + 'I\'m a ' + 
            this.job + ' and I\'m ' +
            this.age  + ' years old. Have a nice ' + timeOfDay 
            );
        }
    }
}

var emily = {
    name: 'emily',
    age: 35,
    job : 'designer'
};

//  call function john variable,presentaion method

john.presentation ('formal', 'morning');

// call back method on the function above.

john.presentation.call(emily, 'friendly', 'aftrernoon');