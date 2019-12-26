/*
============================================
; Title:  kenney-assignment-5.2.js
; Author: Professor Krasso - referenced starter code and video
; Date:   26 December 2019
; Modified By: Sean Kenney
; Description: ES5 Built-In Functions
; String array will be created and contain five foods.
; I used the foods noted in the start code expected results.
; The built-in javascript function forEach() will be used to iterate over the
; array and output the results.
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

console.log(header.display("Sean", "Kenney", "Exercise 5.2 ES5 Built-In Functions"));
/*
**********end including of header
*/

// array of foods - values in array are sourced from expected results
const favoriteFoods = ['Oysters', 'Shrimp', 'Steak', 'Tacos', 'Sushi'];

//output blank line to match expected results from starter code
console.log('\n');

// output the 5 foods items to the console
favoriteFoods.forEach((item) => {
  console.log(item)
})
