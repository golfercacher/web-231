/*
============================================
; Title:  kenney-assignment-4.3.js
; Author: Professor Krasso - referenced starter code and video
; Date:   12 December 2019
; Modified By: Sean Kenney
; Description: Program has an array with five items.
; The five items are vehicles.  An evaluation of the array
; will be done in a function.  If a match is found that match
; will be output using console.log.
; I also referenced W3C schools reference code on arrays
; https://www.w3schools.com/js/js_arrays.asp
;===========================================
*/

/*
; include header called kenney-header.js
; This header will display my fist and last name
; and the assignment name
*/

const header = require('../kenney-header.js');

console.log(header.display("Sean", "Kenney", "Exercise 4.3 Arrays"));
/*
**********end including of header
*/

//Array with 5 text elements.
//Each element represents the name of a vehicle.
var vehicleTypes = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"];

//Variable that holds the length of the array
const vehicleTypesLength = vehicleTypes.length;


//function that processes the elements in the array
//Function, for each item in the array, prints on a new line the items in the array
function getVehicles(arr) {
  for (i = 0; i < vehicleTypesLength; i++) {
    console.log(arr[i]);
  }
}

/**
 * Params: array, filterValue
 * Response: array element
 * Description: Returns a filtered value from an array
 */
function getValue(arr, filterValue) {
  for (let k = 0; k < vehicleTypesLength; k++) {
    if (arr[k] === filterValue) {
      return arr[k];
    }
  }
}


/*
; Output the array values to match expected results as noted in the starter code
; start with a blank line, again to match expected results noted in starter code
*/
console.log("\n-- DISPLAYING ARRAY ITEMS --");
getVehicles(vehicleTypes);

/*
; output a match for motorcycle to match expected results
; from starter code
*/
console.log("\n -- SELECTED VALUE --");
console.log(getValue(vehicleTypes, "Motorcycle"));

/*
; output a match for bus to match expected results
; from starter code
*/
console.log("\n -- SELECTED VALUE --");
console.log(getValue(vehicleTypes, "Bus"));
