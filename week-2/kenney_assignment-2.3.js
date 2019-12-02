/*
============================================
; Title:  kenney-assignment-2.3.js
; Author: Professor Krasso
; Date:   02 December 2019
; Modified By: Sean Kenney
; Description: Function Properties Assignment
;===========================================
*/

/*
; include header called kenney-header.js
; This header will display my fist and last name
; and the assignment name
*/

const header = require('../kenney-header.js');

console.log(header.display("Sean", "Kenney", "Excercise 2.3 Function Properties"));

// function property definitions - assigned a value of my first and last name
myName.sean = "Sean Kenney";

/**
 * Params: none
 * Response: function property value
 * Description: returns the value assigned to a function property
 */
function myName() {
  return myName.sean;
}

// output - inserts a new line to match required output then shows my first and last name
console.log('\nHello ' + myName() + '!')
