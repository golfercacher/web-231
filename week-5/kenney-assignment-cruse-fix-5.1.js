/*
============================================
; Title:  kenney-assignment-5.1.js
; Author: Professor Krasso - referenced starter code and video
; Date:   27 December 2019
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

console.log(header.display("Sean", "Kenney", "Exercise 5.1 Cruse Fix"));
/*
**********end including of header
*/

//START PROGRAM

//var spaceHistory = new array();
//the syntax needs to be Map, not array.
var spaceHistory = new Map();
spaceHistory.set('4 October 1957', 'The worlds first artificial satellite.');
spaceHistory.set('28 May 1959', 'First creatures to return alive from space.');
spaceHistory.set('12 April 1961 ', 'The first man in space.');
spaceHistory.set('16 June 1963', 'The first woman in space.');
spaceHistory.set('18 March 1965', 'First-ever spacewalk.');
spaceHistory.set('20 July 1969', 'First man on the Moon.');
spaceHistory.set('9 April 1971', 'The first space station is launched.');

//for (var (key, value) of spaceHistory) {
// () needs to be []
for (var [key, value] of spaceHistory) {
  console.log(key + ' - ' + value);
}
  console.log('\nLearn more at “10 Key Moments in Space Exploration.” BBC News, BBC, 15 Jan. 2016, https://www.bbc.com/news/science-environment-35326827.');

//EXPECTED OUTPUT
//4 October 1957 - The worlds first artificial satellite. ...
//28 May 1959 - First creatures to return alive from space. ...
//12 April 1961 - The first man in space. ...
//16 June 1963 - The first woman in space. ...
//18 March 1965 - First-ever spacewalk. ...
//20 July 1969 - First man on the Moon. ...
//19 April 1971 - The first space station is launched.
//Learn more at “10 Key Moments in Space Exploration.” BBC News, BBC, 15 Jan. 2016, https://www.bbc.com/news/science-environment-35326827.'

spaceHistory.clear();
spaceHistory.size; // 0

//END PROGRAM
