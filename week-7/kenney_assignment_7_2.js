/*
============================================
; Title:  kenney-assignment-7.2.js
; Author: Professor Krasso - referenced starter code and examples
; Date:   22 January 2020
; Modified By: Sean Kenney
; Description: Program for Constructor functions
; An employee constructor object with 4 parameters will be created.
; The parameters are id, first name, last name, and title.
; An array will then be created and that array will hold 5 employees
; The contents of the array will then be displayed to the console.
;===========================================
*/

/*
; include header called kenney-header.js
; This header will display my fist and last name
; and the assignment name
*/

const header = require('../kenney-header.js');

console.log(header.display("Sean", "Kenney", "Exercise 7.2 Constructor Functions"));
/*
**********end including of header
*/

//sets the id, first name, last name, and title for employee
function Employee(id, firstName, lastName, title) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
}

// create 5 new employees
const employees = [
  new Employee(1, 'Thomas', 'Edison', 'Software Engineer'),
  new Employee(2, 'Benjamin', 'Franklin', 'Programmer'),
  new Employee(3, 'Nikola', 'Tesla', 'Project Manager'),
  new Employee(4, 'Charles', 'Babbage', 'Product Manager'),
  new Employee(5, 'Alexander', 'Bell', 'Business Analyst')
];

// output a blank line then the contents of the 5 employees
console.log(' ')
let index = 1
for (let x = 0; x < employees.length; x++) {
  console.log(employees[x].id + ' ' + employees[x].firstName + ' ' + employees[x].lastName +' ' + employees[x].title)
  index++
}
