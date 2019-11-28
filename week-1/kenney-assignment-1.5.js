/*
=================================================
; Title: Assignment 1.5
; Author: Sean Kenney - I did not reference any
; other code other than what was in the text
; I tried to find starter code but couldn't locate 
; anything that described the output
; Date: 27 November 2019
; Modified by: Sean Kenney
; Description: This program displays information
; about 3 different employees.  This includes first name,
; last name, address, pay rate, and hire date
=================================================
*/

// variables and assigned values for first employee
var firstNameFirstEmployee = "Jane";
var lastNameFirstEmployee = "Robinson";
var addressFirstEmployee = "819 South 6th Street Camanche, IA 52733"
var payRateFirstEmployee = 38.14; 
var hireDateFirstEmployee = new Date (1996, 1, 3);

// variables and assigned values for second employee
var firstNameSecondEmployee = "Sarah";
var lastNameSecondEmployee = "McGregor";
var addressSecondEmployee = "1707 27th Avenue South Pleasant Valley, CO 68135"
var payRateSecondEmployee = 39.34; 
var hireDateSecondEmployee = new Date (2006, 3, 4);

// variables and assigned values for third employee
var firstNameThirdEmployee = "Ruth";
var lastNameThirdEmployee = "Bader";
var addressThirdEmployee = "One Pennsylvanie Ave Washington, DC 63321"
var payRateThirdEmployee = 98.71; 
var hireDateThirdEmployee = new Date (1966, 11, 25);

//Display information for first employee
console.log("First Employee Information:");
console.log(firstNameFirstEmployee);
console.log(lastNameFirstEmployee);
console.log(addressFirstEmployee);
console.log(payRateFirstEmployee.toFixed(1));
console.log(hireDateFirstEmployee.toLocaleDateString());
console.log("");

//Display information for second employee
console.log("Second Employee Information:");
console.log(firstNameSecondEmployee);
console.log(lastNameSecondEmployee);
console.log(addressSecondEmployee);
console.log(payRateSecondEmployee.toFixed(1));
console.log(hireDateSecondEmployee.toLocaleDateString());
console.log("");

//Display information for third employee
console.log("Third Employee Information:");
console.log(firstNameThirdEmployee);
console.log(lastNameThirdEmployee);
console.log(addressThirdEmployee);
console.log(payRateThirdEmployee.toFixed(1));
console.log(hireDateThirdEmployee.toLocaleDateString());
console.log("");