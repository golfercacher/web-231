/*
============================================
; Title:  kenney-assignment-3.3.js
; Author: Professor Krasso - referenced starter code and video
; Date:   08 December 2019
; Modified By: Sean Kenney
; Description: Control Statements.  Convert if statements
; to use switch statemnt
;===========================================
*/

/*
; include header called kenney-header.js
; This header will display my fist and last name
; and the assignment name
*/

const header = require('../kenney-header.js');

console.log(header.display("Sean", "Kenney", "Exercise 3.3 Control Statements"));
console.log("\n");
/*
**********end including of header

  // Expected output
  The enter key was pressed
*/

// variable to be evaluated
let eventKeyCode = 13;

/* CODE TO convert from if block to switch
; if block being converted is noted below in this comment section
;
;  if (eventKeyCode === 13) {
;    console.log('The enter key was pressed.')
;  } else if (eventKeyCode === 16) {
;    console.log('The shift key was pressed.')
;  } else if (eventKeyCode === 32) {
;    console.log('The spacebar key was pressed.')
;  } else if (eventKeyCode === 8) {
;    console.log('The backspace / delete key was pressed.')
;  } else {
;    console.log('Unrecognized key.')
;  }
*/

/* Switch statemnt that evaluates the value of a variable and
; output a message based on that evaluation.
*/
switch (eventKeyCode) {
  case 13:
      console.log('The enter key was pressed.');
      break;
  case 16:
      console.log('The shift key was pressed.');
      break;
  case 32:
      console.log('The spacebar key was pressed.');
      break;
  case 8:
      console.log('The backspace / delete key was pressed.');
      break;
  default:
      console.log('Unrecognized key.');
}
