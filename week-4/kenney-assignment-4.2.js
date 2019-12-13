/*
============================================
; Title:  kenney-assignment-4.2.js
; Author: Professor Krasso - referenced starter code and video
; Date:   12 December 2019
; Modified By: Sean Kenney
; Description: Program has an array with five items.
; The five items in the array hold the names of fruits
; in no particular order.  The values contained in the array
; will be display via console.log
;===========================================
*/

/*
; include header called kenney-header.js
; This header will display my fist and last name
; and the assignment name
*/

const header = require('../kenney-header.js');

console.log(header.display("Sean", "Kenney", "Exercise 4.2 Arrays"));
/*
**********end including of header
*/

//Array with 5 text elements.
//Each element represents the name of a fruit.
var fruitNames = ["Apple", "Orange", "Banana", "Mango", "Pear"];

//Variable that holds the length of the array
const fruitNamesLength = fruitNames.length;

//function that processes the elements in the array
//Function, for each item in the array, prints on a new line the items in the array
function getFruit(arr) {
  for (i = 0; i < fruitNamesLength; i++) {
    console.log(arr[i]);
  }
}

//Output the 5 elements in the array
//call function getFruit and pass to it the array containing the 5 fruit names
getFruit(fruitNames);
