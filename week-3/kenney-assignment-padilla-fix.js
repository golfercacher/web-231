/*
============================================
; Title:  padilla-discussion-board-main.js
; Author: Angel Padilla
; Date:   10 Dec 2019
; Modified By: Sean Kenney - bebugging the program to find errors
; Description: bebugging the program to find errors
;===========================================
*/
/*
; include header called kenney-header.js
; This header will display my fist and last name
; and the assignment name
*/

const header = require('../kenney-header.js');

console.log(header.display("Sean", "Kenney", "Exercise 3.1 Control Statements"));
/*
**********end including of header
*/

// declaring string array to later iterate
var stringArray = ["a", "b", "c", "z", "d", "r", "k"];
var result = false;

//for (let index == 0; index < stringArray.length; index++) {
//first error found was index using comparison == instead of assigning the variable
//a value of 0
for (let index = 0; index < stringArray.length; index++) {
  const currentItem = stringArray[index];
  if (currentItem === "z") {
    result = true;
    console.log("Found it! The current item is " + currentItem);
    //true; //exit loop
    //second error is not using break statement.  True is just a boolean statement.  Break is
    //what should be used to get out of the loop.
    //I'd likely refactor this statement to maybe use a switch statement.
    break; // exit loop
  } else console.log(currentItem);
}

// if statement to see if the loop finished iterating and finding the z in the array and if not logging that it didn't find it.
if (result === true) {
  console.log("The loop matched the 'z' item in the array!");
} else {
  console.log("The loop did not find the 'z' item in the array.");
}

// output
/*
Angel Padilla
Week 3 Main Discussion Board
Date: 12/10/2019
a
b
c
Found it! The current item is z
*/
