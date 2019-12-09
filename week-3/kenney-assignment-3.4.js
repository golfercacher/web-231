/*
============================================
; Title:  kenney-assignment-3.4.js
; Author: Professor Krasso - referenced starter code
; week 3 videos, and code written as part of other exercises
; Date:   08 December 2019
; Modified By: Sean Kenney
; Description: compares a random generated number against
; a number value I picked.  If the two values are equal
; a message that says they are equal is displayed.  If
; the numbers are not equal a message will be displayed saying
; they are not equal.  The comparison is done ten times.  The
; value I chose stays the same while the random number changes each
; time.  There are ten total comparisons done.
;===========================================
*/

/*
; include header called kenney-header.js
; This header will display my fist and last name
; and the assignment name
*/
const header = require('../kenney-header.js');

console.log(header.display("Sean", "Kenney", "Exercise Loops"));

// variable that holds a randomly assigned value between 1 and 10
var numberValue = 6;

/*
* Description: Returns a random integer value
* s.kenney added comment here - random number is between 1 and 10 inclusive
*/
function randomNumber() {
 return Math.floor((Math.random() * 10) + 1)
}

/*
; function that compares two values and if they are
; equal returns true and if they aren't equal
; returns false
*/
function match (firstValue, secondValue) {
  if (firstValue === secondValue) {
    return true;
  } else {
    return false;
  }
}

/*
; A function called logMismatch with two parameters,
; if the values are not equal a message will be displayed saying they are not equal.
; the messages will display the parameters being compared.
*/
function logMismatch (firstParameter, secondParameter) {
  console.log(firstParameter + " does not match " + secondParameter + "!");
}

/*
; A function called logMatch with two parameters,
; if the values are equal a message will be displayed saying they are equal.
; the messages will display the parameters being compared.
*/
function logMatch (firstParameter, secondParameter) {
  console.log(firstParameter + " does match " + secondParameter + "!");
}

//Title / header that will display before the results
console.log("\n-- DO THE NUMBERS MATCH GAME --")

//for loop that loops through a value 10 times
//a comparison between the value I chose and the number
//the random number generator produced is done.  If the numbers
//are the same a message is displayed saying such and if they are
//different a message is displayed saying they are different.
for (var x = 0; x < 10; x++) {
  var randomValue = randomNumber();
  if (match(numberValue, randomValue)) {
    logMatch(numberValue, randomValue);
  } else {
    logMismatch(numberValue, randomValue);
  }
}
