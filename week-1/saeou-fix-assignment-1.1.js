

/*
============================================
; Title: Assignment 1.1
; Author: Joann Saeou
; Date: 11/27/2019
; Modified By: Sean Kenney - I also updated this section to reflect
; that I modified the code on 12/27/2019
; Description: Javascript Variables and Values while finding the 2 errors
============================================
*/

/* I updated the formatting a bit by adding some white space between
; the variables and the = sign.
; I changed the code to use console.log instead of document.write
; I also updated the output for that statement as it was using 
; the variable mystring1 twice.  I replaced the second mystring1 with
; the variable mystring2.
*/
var mystring1 = "I am learning";
var mystring2 = "Javascript with Bellevue University";
console.log(mystring1 + " " + mystring2);

/* I updated the formatting to use white space between the
; variables and the = sign.
;The problem I found was that the second variable was initially
; called mynum2 and the if statement referenced myNum2.  I changed the 
; variable name to use an upper case N.
; I also changed the alert to console.log to display the output
*/
var myNum1 = 7;
var myNum2 = 10;
if(myNum1<myNum2){
    console.log("I am starting to like learning about Javascript");
}