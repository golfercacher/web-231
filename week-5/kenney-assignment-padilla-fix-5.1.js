/*
============================================
; Title:  kenney-assignment-5.1.js
; Author: Professor Krasso - referenced starter code and video
; Date:   26 December 2019
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

// declaring cars array of objects;
var cars = [
  { make: "Audi", model: "S3" },
  { make: "BMW", model: "M3" },
//  [ make: "Ford", model: "Escort" }
  { make: "Ford", model: "Escort" }
];

// returning an a string array of the map() the is concatenating text with the make and model of the cars array
//var carInfo = cars.Map(x => {
  var carInfo = cars.map(x => {
  return `The make is: ${x.make} and the model is: ${x.model}`;
});

// Logging the result of carInfo
console.log(carInfo);
