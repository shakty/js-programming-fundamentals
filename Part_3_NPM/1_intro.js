////////////////////////////////////////////////////////////////////////////////
// Welcome to the 1st exercise sheet of Programming Fundamentals in JavaScript!
///////////////////////////////////////////////////////////////////////////////

// EXERCISE 1. Getting started with NPM Packages.
/////////////////////////////////////////////////

// a. Search the NPM catalogue for the package 'is-odd'.
// Guess what the package is doing before looking it up.
// Yes, it is doing what you think is doing.

// b. Make the following lines of code executables without 
// errors.

const isOdd = require('is-odd');
let odd  = 1;
console.log(isOdd(odd));


// c. Now, make these lines work...
const isEven = require('is-even');
let even = 2;
console.log(isEven(even));

// EXERCISE 2. Make the one-liners.
///////////////////////////////////////////

// It is a good coding practice to limit the number of dependencies to the
// essential. So, you should never use the packages is-odd and is-even in your
// projects, unless for demostration or for fun. Or both. 
// If you don't know why, you can read this article:
// https://www.sciencealert.com/how-a-programmer-almost-broke-the-internet-by-deleting-11-lines-of-code

// Now, I know you know how to do it, so why don't you  write down the two 
// one-liners that reproduce the methods isOdd and isEven used above?

console.log(odd % 2 === 1);
console.log(even % 2 === 0);

// EXERCISE 3. Understanding the packaging.
///////////////////////////////////////////

// Did you notice that the 'is-odd' package has more than twice the downloads
// the package 'is-even'? (Right-column on the NPM web site, "Weekly Downloads")
// Are developers more insecure when it comes to odd numbers? There is actually 
// a more rational explanation. Check the source code of the packages inside the node_modules/ folder.

// Hint: each nodeJS package contains a package.json file. This file contains
// all the metadata about the project (name, author, keywords, etc.). The field // "main" contains the file that it is executed when you require it. Look 
// inside the file referenced in "main" to answer the question.
// To know everything about package.json files read here:
// https://docs.npmjs.com/cli/v6/configuring-npm/package-json


// Solution.
// The file referenced in "main" node_modules/is-even/package.json is 
// "index.js". So you may open node_modules/is-even/index.js. You will see
// that is-even requires the package is-odd, and executes isOdd and negates it.
//
// If you look inside node_modules/is-odd/index.js you will notice that, to be
// fair, the package is-odd does a little bit more than the one-liner of 
// Exercise 2. It also checks if the value is a valid integer. Still not worth
// a dependency.




