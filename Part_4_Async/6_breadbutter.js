/////////////////////////////////////////////
// Programming Fundamentals in JavaScript! //
/////////////////////////////////////////////

// Module: Async Programming.
/////////////////////////////

// This is an optional final exercise that teaches you 
// the bread and butter of async programming. 

// To complete this exercise, you should understand
// how callbacks, promises, async/await, and require work in NodeJS.

// You will also learn something (probably) new: how to specify and read
// command-line parameters through the process.argv array. See below.

// Exercise 0.
///////////////

// Not really an exercise, but it explains you how to execute this file.

// To execute any NodeJS program you type in the console something like: 
//
// node ./fileName.js arg1 arg2 ...
//
// Where arg1 and arg2 are optional arguments.
//
// All that is related to the environment in which you run Node.JS is 
// available through the `process` module. Precisely, `process.argv` is
// an array containing all that you typed to launch this file, e.g:
//
//  ["node", "fileName", arg1, arg2, arg3]
//
// This program accepts three inputs parameters, which are:
// 
// --async: If TRUE, some actions might take longer to execute, 
//          so the synchronous preparation of the bread and butter of 
//          async programming might fail.
// --silly: If TRUE, some silly actions might take place, so the preparation
//          of the bread and butter of async programming might fail.
// --exit:  If TRUE, it will exit the program early if the preparation of 
//          the bread and butter of async programming fails.
//
// By default all of those paramerters are FALSE.


const args = process.argv;

const doSilly = args.indexOf("--silly") !== -1 || false;
const doAsync = args.indexOf("--async") !== -1 || false;
const doExit  = args.indexOf("--exit")  !== -1 || false;

// The Bread and Butter of Async Programming.
/////////////////////////////////////////////

// Import all the actions necessary to execute the bread and butter 
// of async programming.

let { openFridge, takeButter, takeBread, sliceBread, spreadButter, yummy } = 
  require("./lib/actions.js")(doAsync, doSilly, doExit);

// Do it! 
function breadAndButter() {
    console.clear();
    console.log();
    console.log("The Bread and Butter of async programming:");
    if (!doAsync) console.log('\t(Synchronous Edition)\t');
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

// Run the program as usual (i.e., without additional parameters) and 
// contemplate the synchronous version of the bread and butter of async
// programming.

breadAndButter();

// Exercise 2.
///////////////

// Execute the bread and butter of async programming passing the --async flag.

