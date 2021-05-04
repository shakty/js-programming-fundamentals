////////////////////
// App Dev Course //
////////////////////

// Module: Packages, npm, and require
/////////////////////////////////////


// EXERCISE 1. Require local files.
///////////////////////////////////

// a. The folder lib/ contains a file named "misteryFile.js".

// Do not look inside that file! But what's inside that file?

// For you it is enough to know that it returns a function.
// Execute it and solve the mistery.


// Solution.
const mistery = require('../lib/misteryFile.js');
mistery();

// Note! This solution works only relative to the location of _this_ file.
// How to change it to make it work inside the main directory (the location
// of file 2_require.js)?
// OMG is this an exercise inside a solution? Life is unfair.

// Hint: the two dots (../) points to the directory above current one, try to 
// remove them.

// b. Optional. If you are really cool, you might use the path module
// to create cross-platform paths.

// Ref: https://nodejs.org/api/path.html

// Solution.
const path = require('path');
let crossPath = path.resolve(__dirname, '..', 'lib', 'misteryFile.js');
const mistery2 = require(crossPath);
mistery2(true);
// Note: same issue as before, this solution works only inside this directory.
// Note2: Now you are allowed to look inside the function.  

// EXERCISE 2. Export your own file.
////////////////////////////////////

// Sometimes one export needs to return multiple variables, and not just
// one function as in the "misteryFile.js" of Exercise 1. 
// Create a new file inside the lib/ folder and name it "persons.js". This 
// file must export two objects containing persons metadata of the type
// 
// { first: 'Brendan', last: 'Eich' }
// 
// and one method to get a random person object. In other words, the code below 
// must run.
 
let { person1, person2, getRandomPerson } = require('./lib/persons.js');

console.log(person1);
console.log(person2);
console.log(getRandomPerson());

// The solution is in file persons.js. Copy it over the lib/ folder to test.


