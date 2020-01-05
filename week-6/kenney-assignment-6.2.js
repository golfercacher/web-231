/*
============================================
; Title:  kenney-assignment-6.2.js
; Author: Professor Krasso - referenced starter code and video
; Date:   05 January 2020
; Modified By: Sean Kenney
; Description: Program that uses a Try, Catch, and Finally block that handles runtime
; errors gracefully.
; Program has defined a variable "aValue".
; The try statement includes code that does some math on the variable
; however the variable is misspelled and an error then gets thrown.
; I did reference MDN Web Docs for reference
; https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
; https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
; I also referenced W3C schools
; https://www.w3schools.com/js/js_object_properties.asp
; https://www.w3schools.com/jsref/jsref_try_catch.asp
; I also reference several javascript tutorials
; https://www.javascripttutorial.net/javascript-try-catch/
; https://alligator.io/js/error-handling-try-catch/
;===========================================
*/

/*
; include header called kenney-header.js
; This header will display my fist and last name
; and the assignment name
*/

const header = require('../kenney-header.js');

console.log(header.display("Sean", "Kenney", "Exercise 6.2 Exception Handling"));
/*
**********end including of header
*/

let aValue = 2;
try {
  console.log(aVal + 77);
} catch (e) {
  console.log('Catch clause: See if the variable is defined or spelled correctly');
} finally {
  console.log('Finally clause reached...');
}
