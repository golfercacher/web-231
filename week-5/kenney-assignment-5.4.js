/*
============================================
; Title:  kenney-assignment-5.4.js
; Author: Professor Krasso - referenced starter code and video
; Date:   26 December 2019
; Modified By: Sean Kenney
; Description: Filtering/Reducing Complex Data Structures
; An array with 5 composer objects will be created.
; The objects in the array will have 4 fields, firstName,
; lastName, genre, and rating between 1 and 10 inclusive.
; Using map functions, the array will be filtered a variety of ways (by rating and genre).
; The array contents will be displayed to the console twice.  Once by each filter
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

console.log(header.display("Sean", "Kenney", "Exercise 5.4 Filtering/Reducing Complex Data Structures"));
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

//create an array from the original array
//that has just rating and last name.
var ratingComposer = famousComposers.map(({rating, lastName}) => ({rating, lastName}));

//create an array from the original array
//that has just genre and last name.
var genreComposer = famousComposers.map(({genre, lastName}) => ({genre, lastName}));

//display heading for composer by rating
console.log('\n-- COMPOSER BY RATING --')
//display rating and composer last name on separate rows with a blank link separating the pairs
let index = 1
ratingComposer.forEach( (composer) => {
  console.log('Rating: ' + composer.rating + '\nComposer: ' + composer.lastName + '\n')
  index++
})

//display heading for composer by genre
console.log('\n-- COMPOSER BY GENRE --')
//display genre and composer last name on separate rows with a blank link separating the pairs
let index2 = 1
genreComposer.forEach( (composer) => {
  console.log('Rating: ' + composer.genre + '\nComposer: ' + composer.lastName + '\n')
  index2++
})
//End Program
