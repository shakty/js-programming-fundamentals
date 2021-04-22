////////////////////////////////////////////////////////////////////////////////
// Welcome to the 1st exercise sheet of Programming Fundamentals in JavaScript!
///////////////////////////////////////////////////////////////////////////////

// This file is executed with a command like: node fileName arg1 arg2.
// So the args array contains ["node", "fileName", arg1, arg2, arg3], where
// arg1, arg2, and arg3 are optional.
const args = process.argv;

// By default don't do neither async, nor silly, nor exit.

// If TRUE, some silly actions might take place, so the preparation of the
// bread and butter of async programming might fail.
const doSilly = args.indexOf("--silly") !== -1 || false;
// If TRUE, some actions might take longer to execute, so the preparation of
// the bread and butter of async programming might fail.
const doAsync = args.indexOf("--async") !== -1 || false;
// If TRUE, it will exit the program early if the preparation of the bread and 
// butter of async programming fails.
const doExit = args.indexOf("--exit") !== -1 || false;

// Import libraries.

let { openFridge, takeButter, takeBread, sliceBread, spreadButter, yummy } = 
  require("./lib/actions.js")(doAsync, doSilly, doExit);

 
function breadAndButter() {
    console.clear();
    console.log();
    console.log("The Bread and Butter of async programming:");
    console.log();
    openFridge();
    takeButter();
    takeBread();
    sliceBread();
    spreadButter();
    yummy();
    console.log();
}
  
// Exercise 1.
///////////////

// Execute the bread and butter of async programming.

breadAndButter();

// Exercise 2.
///////////////

// Execute the bread and butter of async programming passing the --async flag.



