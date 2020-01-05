/*
============================================
; Title:  kenney-assignment-6.3.js
; Author: Professor Krasso - referenced starter code and video
; Date:   05 January 2020
; Modified By: Sean Kenney
; Description: Program for object literals
; The program will create an object with an ID name and requestor
; and display those items to the console log.
; I did reference MDN Web Docs for reference
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

console.log(header.display("Sean", "Kenney", "Exercise 6.3 Object Literals"));
/*
**********end including of header
*/

// object for ticketing system
const ticketInfo = {
  id: 101,
  name: "Help Desk Support",
  requestor: "Bob Jones"
}

// output object info
console.log(ticketInfo);

//end of program
