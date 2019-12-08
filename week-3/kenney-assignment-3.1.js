/*
============================================
; Title:  kenney-assignment-3.1.js
; Author: Sean Kenney - I did not use instructor code
; Date:   08 December 2019
; Modified By: Sean Kenney
; Description: Control statements that contains errors
; This program intentionally has errors.
; Code is written based on textbook reading,
; specifically page 95 for how to setup a switch statement
; I also referenced W3C for switch structure
; https://www.w3schools.com/js/js_switch.asp
; I also referenced digital ocean for switch examples
; https://www.digitalocean.com/community/tutorials/how-to-use-the-switch-statement-in-javascript
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

var currentAge = 23;

switch (true) {
  case currentAge >=0 && currentAge <= 20:
      console.log("\nBelow legal drinking age");
      break:
  case currentAge > 20 && currentAge <= 100:
      console.log("\nAbove legal drinking age");
      break;
  default;
      console.log("\nAge needs to be a value of 0-100");

}
