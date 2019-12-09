/*
============================================
; Title:  kenney-assignment-3.4.js
; Author: Professor Krasso - referenced starter code
; Date:   08 December 2019
; Modified By: Sean Kenney
; Description:
;===========================================
*/

/*
; include header called kenney-header.js
; This header will display my fist and last name
; and the assignment name
*/

const header = require('../kenney-header.js');

console.log(header.display("Sean", "Kenney", "Exercise Loops"));

/*
* Description: Returns a random integer value
*/
function randomNumber() {
 return Math.floor((Math.random() * 10) + 1)
}
