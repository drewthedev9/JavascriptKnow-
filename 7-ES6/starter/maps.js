// maps//////////////
///

// maps use keys and can store anything as a key, better than objects
// They are itterable and can be looped through.
// fucntions, booleans, primitives.
// set sets the keys of the map they are the first params . 'question', 1,2,3,4
// you can look at the map by typing in map in the console.
const question = new Map();
question.set('question', " What is the official name of the latest major Javascript version?" )
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'correct answer :D');
question.set(false, 'wrong, please try again');

// .get reffering to the key  'question'
console.log(question.get(question));
console.log(question.size);
question.delete(4);
// if question k 4 has something do this.
if (question.has(4)){
    console.log('answer 4 is here');
}
// clears the whole map check by typing question into console.
question.clear();

// maps a re itterable liek aarrays and objects
// cosole logs the key and the value.
question.forEach((value, key) =>
console.log(`this is ${key}, and its set to ${value}`));

for (let [key, value] of question.entries()){
    if (typeof(key) === 'number'){
        console.log(`Answer ${key}: ${value}`);
    }
}

// redo this part on the video.
const ans = parseInt (prompt('Write the correct answer'));
console.log(quesion.get(ans === question.get('correct')));