/*============================================

; Title:  lintel-exercise-3.1.js; Author: Jeff Lintel

; Date:   9 December 2019

; Description: Demonstrate control statement

; errors

;===========================================

*/

/*
; include header called kenney-header.js
; This header will display my fist and last name
; and the assignment name
*/

const header = require('../kenney-header.js');

console.log(header.display("Sean", "Kenney", "Fix Lintel 3.1"));


//this loop should count down from 10 to 1, displaying each number

for (i = 10; i > 0; i--) {

console.log(i);

}
