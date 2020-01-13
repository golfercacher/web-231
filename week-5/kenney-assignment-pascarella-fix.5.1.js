/*
============================================
; Title:  kenney-assignment-5.1.js
; Author: Professor Krasso - referenced starter code and video
; Date:   05 January 2020
; Modified By: Sean Kenney
; Description: Fixing assignment that has two errors.
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

console.log(header.display("Sean", "Kenney", "Exercise 5.1 Padilla Fix"));
/*
**********end including of header
*/
/*
 	// Start Program

 	// Declare Variables

  // var restaurants = ["mcdonald's", "chick-fil-a", "wendy's"];
   var restaurants = [
     {"mcdonald's"},
     {"chick-fil-a"},
     {"wendy's"}];

     var restFix = restaurants.map(function(item) { return item.toUpperCase(); });

 	// Output
 	console.log(restaurants.map); // Prints Mcdonald's, Chick-fil-a, Wendys
/*
