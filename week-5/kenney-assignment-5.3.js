/*
============================================
; Title:  kenney-assignment-5.3.js
; Author: Professor Krasso - referenced starter code and video
; Date:   26 December 2019
; Modified By: Sean Kenney
; Description: Object Collections - Array Like Object Collections
; An array with 5 composer objects will be created.
; The objects in the array will have 4 fields, firstName,
; lastName, genre, and rating between 1 and 10 inclusive.
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

console.log(header.display("Sean", "Kenney", "Exercise 5.3 Object Collections"));
/*
**********end including of header
*/
//create an array that holds 5 composer objects
//object will be first name, last name, genre, and rating
var famousComposers = [
  {
    firstName: 'Ludwig',
    lastName: 'Beethoven',
    genre: 'Classical',
    rating: 8
  },
  {
    firstName: 'Wolfgang',
    lastName: 'Mozart',
    genre: 'Classical',
    rating: 9
  },
  {
    firstName: 'Johann',
    lastName: 'Bach',
    genre: 'Classical',
    rating: 9
  },
  {
    firstName: 'Franz',
    lastName: 'Haydn',
    genre: 'Classical',
    rating: 6
  },
  {
    firstName: 'Franz',
    lastName: 'Schubert',
    genre: 'Classical',
    rating: 5
  }
];

// output the array of objects to include a heading
// Note that the array of objects holds 4 items per composer
// but only 3 of them (last name, genre, and rating) are printed
// this is done to match the expected results per the starter code.
// first name is not printed due to this.
console.log('\n-- COMPOSERS --')
let index = 1
famousComposers.forEach( (composer) => {
  console.log('Last Name: ' + composer.lastName + ', Genre: ' + composer.genre + ', Rating: ' + composer.rating)
  index++
})
