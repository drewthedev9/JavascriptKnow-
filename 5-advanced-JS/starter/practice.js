// Note to test function input the function into the console
// then call the function with a parameter.


//  basic adding function/
const add =(num)=> {
return num + 1;
}

// Create a function that takes a number as its only argument and returns true if it's less
// than or equal to zero, otherwise return false.

function lessThanOrEqualToZero(num) {
	if (num <= 0){
		return true;
	} else {
		return false;
	}
}

//Create a function that returns 
//true if an integer is divisible by 5, and false otherwise.

function divisibleByFive(n) {
	//the remainder means there will be no remainder of the dividded number
	// meaning its equal.
	if(n % 5 === 0){
		return true;
	} else {
		return false;
	}
}

//Create a function that takes in three arguments 
//(prob, prize, pay) and returns 
//true if prob * prize > pay; otherwise return false.

function profitableGamble(prob, prize, pay) {
	if(prob * prize > pay){
		return true;
	} else {
		return false;
	}
}

// Create a function that takes two s
// trings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total 
// number of characters in the second string.

function comp(str1, str2) {
	if(str1.length === str2.length){
		return true;
	} else{
		return false;
	}
}

//Create a function to concatenate
// two integer arrays.
function concat(arr1, arr2) {
	return arr1.concat(arr2);
	
}

//Write a function that takes the base 
//and height of a triangle and return its area.
function triArea(base, height) {
	return base * height /2
}