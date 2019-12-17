// var initialize array using the array constructor with a default of 6 elements
//   var defaultArray = new array("w", "e", "b", 2, 3, 1);
   var defaultArray = ["w", "e", "b", 2, 3, 1];

 	// push an element into the defaultArray
   //defaultArray.Push("!");
   defaultArray.push("!");

 //	outPutArrayItems(defaultArray);

 	// function takes an array to iterate over the elements and log each of them.
 	//function outPutArrayItems(arrayItem) {
 	//item1.forEach(element => {
 	//console.log(element);
 	//});
  // }


defaultArray.forEach(defaultArray => console.log(defaultArray));

 	// expected output
 	/*
 	Angel Padilla
 	Exercise 4.1
 	Date: 12/16/2019
 	w
 	e
 	b
 	2
 	3
 	1
 	!
 	*/
