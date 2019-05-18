// Bind , call, and apply

var john = {
    name: 'john',
    age: 26,
    job: 'teacher',
    // methofd for joh to present stuff.
    presentation : function(style,timeOfDay){
        if (style === 'formal'){
            console.log('good' + timeOfDay + 'ladies and gentle men! I\'m',
             this.name + ', I\'m a' + 
             this.job + ' and I\'m' +
             this.age );
        } else if (style === 'friendly'){
            console.log()
        }
    }
}