/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
//  shorthand way of using many variables.
 var scores, roundScores, activeplayer, dice;

 scores = [0,0];
 roundScore = 0;
activePlayer = 1;

// math object with random 
dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

// Score-0 is the id in teh HTML. then change the text ( textContent) withe dice variable above.
// document.querySelector('#current-' + activePlayer).textContent = dice;

// SETTER.
// inner HTML can chnge an HTML element or in thsis case add. textContent cannot do this it only works on text.
// would have added the <em></em>
document.querySelector('#current-' + activePlayer).innerHTML ='<em>' +  dice + '</em>' ;

// GETTER.
//  reads teh html text insode the elementid current-o in the HTML // 43
var x = document.querySelector('#score-0').textContent; 
console.log(x);

//  style changer.
document.querySelector('.dice').style.display = 'none';


