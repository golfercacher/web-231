/*
============================================
; Title:  kenney-assignment-3.1.js
; Author: Professor Krasso - referenced starter code
; Date:   08 December 2019
; Modified By: Sean Kenney
; Description:
;
;===========================================
*/

/*
; include header called kenney-header.js
; This header will display my fist and last name
; and the assignment name
*/

const header = require('../kenney-header.js');

console.log(header.display("Sean", "Kenney", "Exercise 3.2 Pattern Matching Functions"));
console.log("\n");
/*
**********end including of header
*/

/*
; 6 variables to test the functions
*/
const vehicleCar = "Car";
const vehicleTruck = "Truck";
const vehicleBike1 = "Bike";
const vehicleBike2 = "Bike";
const numberFour = "Four";
const numberThree = "Three";

// output to test match function
console.log(match("A","B"));
console.log(match(2,2));
console.log("\n");

// test a do not match
if (match(vehicleCar, vehicleTruck)) {
  logMatch(vehicleCar, vehicleTruck);
} else {
  logMismatch(vehicleCar, vehicleTruck);
}

// test a do match
if (match(vehicleBike1, vehicleBike2)) {
  logMatch(vehicleBike1, vehicleBike2);
} else {
  logMismatch(vehicleBike1, vehicleBike2);
}

// test a do not match
if (match(numberFour, numberThree)) {
  logMatch(numberFour, numberThree);
} else {
  logMismatch(numberFour, numberThree);
}

/*
; function that compares two values and if they are
; equal returns true and if they aren't equal
; returns false
*/

function match (firstValue, secondValue) {
  if (firstValue === secondValue) {
    return true;
  } else {
    return false;
  }
}


/*
; A function called logMismatch with two parameters,
; if the values are not equal a message will be displayed saying they are not equal.
; the messages will display the parameters being compared.
*/
function logMismatch (firstParameter, secondParameter) {
  if (firstParameter !== secondParameter) {
    console.log(firstParameter + " and " + secondParameter + " do not match!");
  }
}

/*
; A function called logMatch with two parameters,
; if the values are equal a message will be displayed saying they are equal.
; the messages will display the parameters being compared.
*/
function logMatch (firstParameter, secondParameter) {
  if (firstParameter === secondParameter) {
    console.log(firstParameter + " and " + secondParameter + " do match!");
  }
}


