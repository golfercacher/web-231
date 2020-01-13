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

//Define the ticket object with person nested object
var ticket = {id:"105",
name:"Help Desk Support",
//dateCreated; new Date(),
dateCreated: new Date(),
priority:"1",
person: {id:"105",
fullName: "Bob",
lastName: "Jones",
jobTitle: "Programmer I"
}
};
//Display expected output
console.log("Ticket " + ticket.id + " was created on " + ticket.dateCreated +
//" and assigned to employee " + ticket.person.firstName + " " + ticket.person.lastName +
" and assigned to employee " + ticket.person.fullName + " " + ticket.person.lastName +
"(" + ticket.person.jobTitle + ").");
