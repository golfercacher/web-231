/*
============================================
; Title:  kenney-assignment-4.1.js
; Author: Sean Kenney - I did not use instructor code
; Date:   12 December 2019
; Modified By: Sean Kenney
; Description: Simple array program that contains
; two errors.  This program intentionally has errors.
; One error is a syntax error and the other is a logic error.
; Spelling errors aren't included in the two total errors!
; Code is written based on textbook reading.
; I also referenced W3C schools code on arrays
; https://www.w3schools.com/js/js_arrays.asp
;===========================================
*/

/*
; include header called kenney-header.js
; This header will display my fist and last name
; and the assignment name
*/

const header = require('../kenney-header.js');

console.log(header.display("Sean", "Kenney", "Exercise 4.1 Arrays"));
/*
**********end including of header
*/

//Array with 5 text elements.
//Each element represents the name of a pet.
var new array petNames = ["Duke", "Bhoutros", "Squeaks", "Reagan", "Cloud"];

//Variable that holds the length of the array
const petNamesLength = petNames.length;

//Loop through the arrays and display to the console all the elements in the array
//Five items should be displayed to the console.
//Each item should be on its on line with a blank line in between.
for (i = 0; i < petNamesLength - 1; i++) {
  console.log("\nPet Name is " + petNames[i] + "!");
}
