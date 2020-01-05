/*
============================================
; Title:  kenney-assignment-6.1.js
; Author: Sean Kenney - I did not use instructor code
; Date:   05 January 2020
; Modified By: Sean Kenney
; Description: Program that uses Object Properties.  This program intentionally has errors.
; Spelling errors aren't included in the two total errors!
; Both errors are syntax errors.  Code is written based on textbook reading.
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

console.log(header.display("Sean", "Kenney", "Exercise 6.1 Objects and Built-In Objects"));
/*
**********end including of header
*/

//variables that hold contents of an object
var race1 = new Race('Hitchcock Experience'; 100; 'miles');
var race2 = new Race('Hitchcock The Hard Way'; 101; 'kilometers');

//function that creates an object that holds information about a race
function Race(name, distance, measurement) {
  this.name = name,
  this.distance = distance,
  this.measurement = measurement,
  this.displayRace = displayRace,
}

//function that displays the contents of an object
function displayRace() {
  var result = `The race ${this.name} is ${this.distance} ${this.measurement} long`;
  console.log(result);
}

//Display to the console information about race 1
race1.displayRace();
//Display to the console information about race 2
race2.displayRace();

/* Expected Results
;
; The race Hitchcock Experience is 100 miles long
; The race Hitchcock The Hard Way is 101 kilometers long
;
*/
//End of Program ***************************************
