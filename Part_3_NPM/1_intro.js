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
// I know you know how to do it, but just write down the two one-liners that 
// achieve the same goal.

console.log(odd % 2 === 1);
console.log(even % 2 === 0);

// EXERCISE 3. Understanding the packaging.
///////////////////////////////////////////


// Did you notice that the 'is-odd' package has more than twice the downloads
// the package 'is-even'? (Right-column on the NPM web site, "Weekly Downloads". Are developers more insecure when it comes to odd numbers? There is actually a more rational explanation. Check the source code of the packages inside the node_modules/ folder.

// Open



