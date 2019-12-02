/*
============================================
; Title:  kenney-assignment-2.4.js
; Author: Professor Krasso
; Date:   02 December 2019
; Modified By: Sean Kenney
; Description: Functions Assignment
;
; I used functionality from a variety of sites
; I noted the sites in the comments above the specifc code as well
; https://www.w3schools.com/jsref/jsref_concat_string.asp
; https://stackoverflow.com/questions/16597853/combine-date-and-time-string-into-single-date-with-javascript
; https://www.geeksforgeeks.org/javascript-parseint-with-examples/
; https://www.geeksforgeeks.org/javascript-parsefloat-with-examples/
;===========================================
*/

/*
; include header called kenney-header.js
; This header will display my fist and last name
; and the assignment name
*/

const header = require('../kenney-header.js');

console.log(header.display("Sean", "Kenney", "Excercise 2.4 Functions"));
/*
**********end including of header
*/

/*
********start of first part of assignment DISPLAY First and Last Name
*/

//Variables that hold a first name and a last name
var firstName = "Sean";
var lastName = "Kenney";

//Function that takes two variables, concatenates them with a space between, and returns
//the two variable values together with a space
//concantenate syntax via https://www.w3schools.com/jsref/jsref_concat_string.asp
function fullName (firstName, lastName) {
  return firstName.concat(" ", lastName) ;
}

//displays two variables with the message "Hello my name is...."
console.log("\nHello my name is " + fullName(firstName, lastName) + "!");
/*
********End First part of assignment to DISPLAY first and last name
*/


/*
********Start of second part of assignment to display current time and temperature
*/

//variable that gets full current current date
var fullDate = new Date();
//variable that holds current year
var year = fullDate.getFullYear();
//variable that holds current month - use plus one because javascript does 0-11 for months
var month = fullDate.getMonth() + 1;
//variable that holds current day
var day = fullDate.getDate();
//variable to hold current temperature as of the time I looked at it on 12/2
var currentTemperature = 41.13;
//variable to hold how many positions of precision to use for temperature
var fixedPositions = 1;

/*
; function that takes in variables for current year, month, and day
; and displays the current date as mm/dd/yyyy
; I used techniques from the text and W3C on how to extract year, month, and day values for current date.
; I used stack overflow for how to combine the current values for each variable - https://stackoverflow.com/questions/16597853/combine-date-and-time-string-into-single-date-with-javascript
*/
function dateWriter (year, month, day) {
  var dateString = '' + month + '-' + day + '-' + year;
  return dateString;
}

/*
; function that takes in a number that is whole or has decimals
; and formats it based on a variable value that indicates number of decimal positions
*/
function formatNumber (number, numOfFixedPositions){
  return number.toFixed(numOfFixedPositions);
}

/*
; displays the current date and the temperature message
*/
console.log("\nToday's date is " + dateWriter(year, month, day) + " and the current temperature is " +formatNumber(currentTemperature,fixedPositions) + " degrees.");

/*
********End second part of assignment to DISPLAY current date and temperature
*/


/*
*******Start third part of assignment to display age and amount wanted in savings account
*/
//variable that stores age as string
var currentAge = "46";
//variable that stores dollar amount as string
var savingsAmount = "323851.45"

//converts a string value to an integar value
//used resources from https://www.geeksforgeeks.org/javascript-parseint-with-examples/
function convertToInt (stringValue) {
  var parsedValue = parseInt(stringValue);
  return parsedValue;
}

//converts a float value to a float value
//used resources from https://www.geeksforgeeks.org/javascript-parsefloat-with-examples/
function convertToFloat (stringAmount) {
  var parsedAmount = parseFloat(stringAmount);
  return parsedAmount;
}

//display current age and amount of savings
console.log("\nI am " + convertToInt(currentAge) + " years old and my savings account goal is $" + convertToFloat(savingsAmount) + " dollars.");

/*
*******End third part of assignment to display age and amount wanted in savings account
*/
