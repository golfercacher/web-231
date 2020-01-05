/*
============================================
; Title:  kenney-assignment-6.4.js
; Author: Professor Krasso - referenced starter code and video
; Date:   05 January 2020
; Modified By: Sean Kenney
; Description: Program for nested object literals
; Program will have an object called ticket with a nested object for person.
; the program will display the contents of the ticket and person.
; I did reference MDN Web Docs for reference
; https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
; I also referenced W3C schools
; https://www.w3schools.com/js/js_object_properties.asp
; Some additional resources I accessed for nested objects include
; https://hackernoon.com/accessing-nested-objects-in-javascript-f02f1bd6387f
; https://medium.com/javascript-inside/safely-accessing-deeply-nested-values-in-javascript-99bf72a0855a
; Code for current date came from
; https://tecadmin.net/get-current-date-time-javascript/
;===========================================
*/

/*
; include header called kenney-header.js
; This header will display my fist and last name
; and the assignment name
*/

const header = require('../kenney-header.js');

console.log(header.display("Sean", "Kenney", "Exercise 6.4 Nested Object Literals"));
/*
**********end including of header
*/

//Variable that stores current date
var today = new Date();
//Variable that puts the current date into YYYY-MM-DD format
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

//Object that holds ticket information and a nested object for the person assigned to the ticket
const ticket = {
  id: 105,
  name: "John Doe",
  dateCreated: date,
  priority: "High",

  // nested object for person assigned to ticket
  person: {
    id: 100,
    firstName: "Bob",
    lastName: "Jones",
    jobTitle: "Programmer I"
  }
}

//Output message for the ticket, when the ticket was created, who was assigned the ticket, and their title
console.log('Ticket ' + ticket.id + ' was created on ' + ticket.dateCreated + ' and assigned to employee '
+ ticket.person.firstName + ' ' + ticket.person.lastName + ' (' + ticket.person.jobTitle + ')' );

//end of program ***********************
