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

// The Bread and Butter of Async Programming.
/////////////////////////////////////////////

// The bread and butter of async programming consists of 5 actions:

// 1- Opening the fridge,                ** can be async
// 2- Taking the butter,                 ** can be async
// 3- Taking the bread,
// 4- Slicing the bread,                 ** can be async
// 5- Spreading the butter on the bread.


// Your goal is to say "Yummy!", with the function below, at the right 
// moment, after all actions have taken place in the right order.

function yummy() {
  console.log('\nYummy!\n');
}

// Exercise 0.
///////////////

// Import all 5 sync actions for the Bread and Butter of async programming.
// Run the breadAndButter function and contemplate the synchronous version of
// the Bread and Butter of async programming.

// Notice the parenthesis after the require: "./lib/actions.js" exports 
// a function that is immediately executed.
// let { openFridge, takeButter, takeBread, sliceBread, spreadButter } = 
//   require("./lib/actions.js")();

// function breadAndButter() {
//     console.clear();
//     console.log();
//     console.log("The Bread and Butter of async programming:");
//     if (!doAsync && !doSilly) console.log('\t(Synchronous Edition)\t');
//     console.log();
//
//     openFridge();
//     takeButter();
//     takeBread();
//     sliceBread();
//     spreadButter();
//
//     yummy();
// }


// Exercise 1.
///////////////

// Let's try out async.

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
// --async: If TRUE, it might take longer to find the butter, 
//          or to cutt the bread, so the preparation of
//          the bread and butter of async programming might fail.
//
// --silly: If TRUE, some silly actions might take place, so the preparation
//          of the bread and butter of async programming might fail.
//
// --throw: If TRUE, it will throw an error if the preparation of the bread 
//          and butter of async programming fails (else the order of 
//          execution of the actions might not make sense).
//
// By default all of those paramerters are FALSE.


const args = process.argv;

const doSilly = args.indexOf("--silly") !== -1 || false;
const doAsync = args.indexOf("--async") !== -1 || false;
const doThrow = args.indexOf("--throw") !== -1 || false;

// Now we the command-line parameters to the function exported by
// "./lib/actions.js" to alter its default behavior.

// { openFridge, takeButter, takeBread, sliceBread, spreadButter } = 
//   require("./lib/actions.js")(doAsync, doSilly, doThrow);

// Run the async version and observe what happens.

breadAndButter();

// Exercise 2.
///////////////

// Fix the async version of the Bread and Butter of async programming
// using the callback pattern. You will need to:

// 1- Copy "./lib/actions.js" and rename it to "./lib/actions_cb.js", 
// 2- Edit "./lib/actions_cb.js" to implement the callback pattern,
// 3- Write the missing code inside breadAndButterCb() that invokes 
//      the functions using the callback pattern.

// Remember that only openFridge, takeButter and sliceBread can be async.

// let { openFridge, takeButter, takeBread, sliceBread, spreadButter } = 
//   require("./lib/actions_cb.js")(doAsync, doSilly, doThrow);

// function breadAndButterCb() {
//   console.clear();
//   console.log();
//   console.log("The Bread and Butter of async programming:");
//   console.log('\tNOW WITH CALLBACKS!\t')
//   if (!doAsync && !doSilly) console.log('\t(Synchronous Edition)\t');
//   console.log();
  
//   openFridge(() => {
//     takeButter(() => {
//       takeBread();
//       sliceBread(() => {
//         spreadButter();
//         yummy();
//       });
//     });
//   });

// }

// breadAndButterCb();


// Exercise 3.
///////////////

// Fix the async version of the Bread and Butter of async programming
// using the Promise pattern. You will need to:

// 1- Copy "./lib/actions.js" and rename it to "./lib/actions_promise.js", 
// 2- Edit "./lib/actions_promise.js" to implement the Promise pattern,
// 3- Write the missing code inside breadAndButterCb() that invokes 
//      the functions using the callback pattern.

// Remember that only openFridge, takeButter and sliceBread can be async.

// Hint: Here there is an additional difficulty. When you create new promise
// with the Promise constructor, the function is immediately evaluated. 
// You will need a function to create new promises only when needed.

// let { openFridge, takeButter, takeBread, sliceBread, spreadButter } = 
//   require("./lib/actions_promise.js")(doAsync, doSilly, doThrow);

/////////////////////////////////////////////////////////////////////
// Promises are executed when created, so we need to create them 
// when we need them!
// const asyncActions = {
//   openFridge: openFridge,
//   takeButter: takeButter,
//   sliceBread: sliceBread
// };
// const promiseIt = action => new Promise(asyncActions[action]);
/////////////////////////////////////////////////////////////////////

 
// function breadAndButterPromise() {
//   console.clear();
//   console.log();
//   console.log("The Bread and Butter of async programming:");
//   console.log('\tNOW WITH PROMISES!\t')
//   if (!doAsync && !doSilly) console.log('\t(Synchronous Edition)\t');
//   console.log();
//
//   promiseIt('openFridge')
//     .then(() => promiseIt('takeButter'))
//     .then(() => { 
//       takeBread();
//       promiseIt('sliceBread')
//         .then(() => { 
//           spreadButter();
//            yummy();
//       })
//       .catch(err => {
//         console.log('An error happened while slicing the bread.', err)
//       })
//       .finally(() => console.log('Finally!'));
//     })
//     .catch(err => {
//       console.log('An error happened either taking the butter or slicing the bread:', err)
//     })
//
// }

// breadAndButterPromise();

// Exercise 4.
//////////////

// Fix the async version of the Bread and Butter of async programming
// using the Promise pattern. You will need to:

// 1- Copy "./lib/actions.js" and rename it to "./lib/actions_await.js", 
// 2- Edit "./lib/actions_await.js" to implement the Promise pattern,
// 3- Write the missing code inside breadAndButterCb() that invokes 
//      the functions using the callback pattern.

// Remember that only openFridge, takeButter and sliceBread can be async.

// Hint: Here there is an additional difficulty. When you create new promise
// with the Promise constructor, the function is immediately evaluated. 
// You will need a function to create new promises only when needed.

let { openFridge, takeButter, takeBread, sliceBread, spreadButter } = 
  require("./lib/actions_await.js")(doAsync, doSilly, doThrow);

  
async function breadAndButterAwait() {
    console.clear();
    console.log("The Bread and Butter of async programming:");
    console.log('\tNOW WITH ASYNC/AWAIT!\t')
    if (!doAsync && !doSilly) console.log('\t(Synchronous Edition)\t');
    console.log();
    
    await openFridge();
    await takeButter();
    takeBread();
    await sliceBread();
    spreadButter();
    yummy();

}
  
breadAndButterAwait();



