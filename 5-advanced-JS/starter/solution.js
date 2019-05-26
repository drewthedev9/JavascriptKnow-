/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/


// IIFE immediatley invoked function expression. function so tehta if used someone else esl varibales will not clash 
// with the scope/
(function(){
// function  constructor to create quesions.
function Question(question, answers, correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

// Method using prototype chain.. of the question constructor.
Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (var i = 0; i< this.answers.length; i++) {
        console.log(i + ':' + this.answers[i]);
    }
}

// method for the cinstructor above
Question.prototype.checkAnswer = function(ans){
     if (ans ===this.correct){
        console.log('correct answer!');
     } else {
         console.log('wrong answer, Try again');
     }
 }


// makes a  nw object with the contructor Question above.
var q1 = new Question(' Is javascript the coolest programmin language?', 
['yes', 'No'],
0)

// index based the correct anwer will 2 on teh index array.
var q2 = new Question('What is the name of this course\'s teacher? ', 
['john', 'micheal', 'Jonas'], 2);

var q3 = new Question('What best describes coding', 
['boring','hard', 'fun', 'tedious'],2);

//  question 3 & 4

var questions = [q1, q2, q3];

// give a number between 0-2 for the above indexing of the aray above.
var n = Math.floor(Math.random() * questions.length); 

questions[n].displayQuestion();

// turns string into number - which we want for validating teh answers int he 
// questions above.
var answer = parseInt(prompt('Please select the correct answer.'));

questions[n].checkAnswer(answer);
})();

