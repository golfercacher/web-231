/*
============================================
; Title:  kenney-assignment-4.4.js
; Author: Professor Krasso - referenced starter code and video
; Date:   12 December 2019
; Modified By: Sean Kenney
; Description: Program
; I also referenced W3C schools reference code on arrays
; https://www.w3schools.com/js/js_arrays.asp
;===========================================
*/

/*
; include header called kenney-header.js
; This header will display my fist and last name
; and the assignment name
*/

const header = require('../kenney-header.js');

console.log(header.display("Sean", "Kenney", "Exercise 4.4 Predicates"));
/*
**********end including of header
*/

//Array with 5 text elements.
//Each element represents the name of a state.
var stateNames = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];

//Variable that holds the length of the array
const stateNamesLength = stateNames.length;


/**
 * Params: element, value
 * Response: true/false
 * Description: Returns true/false given the comparision
 */
function getState(el, value) {
  return el === value
}

/*
; unsorted array using JavaScript's built-in forEach() function
; Output the array values to match expected results as noted in the starter code
; start with a blank line, again to match expected results noted in starter code
*/
console.log('\n-- ORIGINAL ARRAY --');
stateNames.forEach(stateNames => console.log(stateNames));

/*
; sorted array using JavaScript's built-in sort() and forEach() functions
; Output the array values to match expected results as noted in the starter code
; start with a blank line, again to match expected results noted in starter code
*/
console.log('\n-- SORTED ARRAY --');
stateNames.sort().forEach(stateNames => console.log(stateNames));


console.log("\n --Selected value-- ");
// output
console.log(
  stateNames.filter // built-in JavaScript function for returning a subset of records
  (
    function (el) {
      return getState(el, "Iowa") // use the getState function to return a matching State
    }
  )[0] // return the first element in the return array
);
