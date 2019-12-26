/*
============================================
; Title:  kenney-assignment-5.1.js
; Author: Sean Kenney - I did not use instructor code
; Date:   26 December 2019
; Modified By: Sean Kenney
; Description: Advanced array program that contains
; two errors.  This program intentionally has errors.
; Spelling errors aren't included in the two total errors!
; Both errors are syntax errors.
; Code is written based on textbook reading.
; I also referenced MDN Web docs
; https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections
;===========================================
*/

/*
; include header called kenney-header.js
; This header will display my fist and last name
; and the assignment name
*/

const header = require('../kenney-header.js');

console.log(header.display("Sean", "Kenney", "Exercise 5.1 Advanced Arrays"));
/*
**********end including of header
*/

//Create a map
var races = createnew Map();

//enter four key value pairs into map
races.set(1,'Marine Corps Marathon');
races.set(2,'Dizzy Goat 12 Hour');
races.set(3,'Feast and Feathers Half Marathon');
races.set(4,'Hitchcock Experience 101k');

//print to the console the size of the map
console.log('\n' + races.size + ' items are in the map');

//print a blank line
console.log('\n');

//print to the console the keys and values;
for (var [key;value] of races) {
  console.log(key + ' race ' + value);
}


//expected results - Note - Your header should display instead of mine
/*

Sean Kenney
Exercise 5.1 Advanced Arrays
Date: 12/26/2019

4 items are in the map


1 race Marine Corps Marathon
2 race Dizzy Goat 12 Hour
3 race Feast and Feathers Half Marathon
4 race Hitchcock Experience 101k
 */
