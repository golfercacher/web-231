/*
============================================
; Title:  kenney-assignment-6.1.js
; Author: Sean Kenney - I did not use instructor code
; Date:   13 January 2020
; Modified By: Sean Kenney
; Description: Program fixes errors found in a fellow students program
; https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
; I also referenced W3C schools
; https://www.w3schools.com/js/js_object_properties.asp
;===========================================
*/

/*
; include header called kenney-header.js
; This header will display my fist and last name
; and the assignment name
*/

const header = require('../kenney-header.js');

console.log(header.display("Sean", "Kenney", "Exercise 6.1 Objects and Built-In Objects"));
/*
**********end including of header
*/

// Intented output:
// Cat
// Dog
// Horse
// Bear
// Deer

// Defines Array
var animals = ["Cat", "Dog", "Horse", "Bear", "Deer"];

// Prints out Array
//animals.forEach((animal){console.log(animals.Species)});

animals.forEach(element => console.log(element));
