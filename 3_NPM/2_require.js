//////////////////////////////////////////
// Programming Fundamentals in JavaScript!
//////////////////////////////////////////
// Module: Packages, npm, and require


// EXERCISE 1. Require local files.
///////////////////////////////////

// The folder lib/ contains a file named "misteryFile.js".
// Do not look inside that file. 

// Solution.
const mistery = require('./lib/misteryFile.js');

mistery();


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



