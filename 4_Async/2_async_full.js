////////////////////////////////////////////////////////////////////////////////
// Welcome to the 2nd exercise sheet of Programming Fundamentals in JavaScript!
///////////////////////////////////////////////////////////////////////////////

// EXERCISE 1. The Bread and Butter of Async Programming.
/////////////////////////////////////////////////////////

// You are going to learn about the bread and butter of async programming.
// Instead of jumping into network requests straight away, we will simulate
// network latency with setTimeout and setInterval methods that we used in 
// async 101.

// 


// Variable process represents this NodeJS process, and argv
// contains all command-line arguments to execute this file.

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


///////////////////////
// Random variables. //
///////////////////////

// If TRUE, there is too much stuff in the fridge and it will
// take more time to find the butter.
let fridgeCluttered = doAsync;

// The Whole Wheat bread develops a notoriously hard crust if
// left outside for too long. It will take more time to slice it.
let breadType = "White";
if (doAsync && doSilly && Math.random() > 0.5) breadType = "Whole Wheat"; 

// How much sliceable bread is left?
let nSlicesAvailable = Math.max(3, Math.ceil(Math.random() * 10));
if (doSilly) nSlicesAvailable = 2;

// I will cut between 1 and the number of available slices.
let nSlicesNeeded = doAsync ?
  Math.ceil(Math.random() * nSlicesAvailable) : 1;

///////////////////////////
// Init State variables. //
///////////////////////////

// Might be open or closed, and contains more or less stuff,
// including the butter of async programming.
let fridge = {
  opened: false,
  stuff: {
    butter: true,
    water: true,
    soda: true
  }
};

// Do silly stuff.
if (doSilly) {
  if (Math.random() > 0.5) fridge.opened = true;
  if (Math.random() > 0.9) fridge.stuff.butter = false;
}

// If fridge is supposed cluttered, fill it with extra stuff.
if (fridgeCluttered) {
  
  // Add properties directly.
  fridge.stuff.mushrooms = true;
  fridge.stuff.pizza = true;
  fridge.stuff.giantPot = true;
  
  // USE ES6 spread operator ...
  // Find out more here:
  // https://oprearocks.medium.com/what-do-the-three-dots-mean-in-javascript-bc5749439c9a
  fridge.stuff = {
    ...fridge.stuff,
    alfredoSauce: true,
    fruitPunch: true,
    chineseLeftover: true,
    misteryJar: true
  }
}

// The bread is floating around waiting to be grabbed and sliced.
// There might be just a few slices left, so it becomes difficult
// to cut and you might get hurt. Silly.
let bread = {
  availableSlices: nSlicesAvailable,
  type: breadType
};

// The table holds the knife to cut the bread and the plate where
// we will put the sliced bread. 
let table = {
  plate: {},
  knife: true
};

////////////////////////////////////////
// Some simple functions for logging. //
////////////////////////////////////////

let actionCounter = 0;

function log(txt) {
  console.log('    ' + txt);
}

function logCounter(txt) {
  console.log(++actionCounter, txt);
}

function quit() {
  console.log('\nI cannot go on like this...\n');
  process.exit(-1);
}

function err(txt) {
  txt = "Aaaah!!! " + txt;
  log(txt);
  if (doExit) quit();
}

///////////////////////////////////////////////////////////////////
// Actions to prepare the bread and butter of async programming. //
///////////////////////////////////////////////////////////////////

function openFridge() {
  logCounter("I am opening the fridge.");
  if (fridge.opened) {
    log(
      "Wait...it is already open! Who left it opened??? Brendan was it you?"
    );
    // Early return to skip execution of the code below.
    return;
  }

  if (doAsync && Math.random() > 0.8) {
    fridge.opened = false;
    log('Oh no, the door is stuck I cannot open the fridge!')
    
    setTimeout(() => {
      log('OK, I removed the baby-lock and I opened the fridge\'s door.');
      fridge.opened = true;
    }, 2000);
  }
  else {
    fridge.opened = true;
  }
}

// Self-executing function (closure) to create private variables. 
let takeButter = (function() {

  // Private function.
  function _justTakeTheButter() {
    logCounter("I am taking the butter.");
    fridge.stuff.butter = false;
    table.butter = true;
  }

  // The actual function that will be assigned to takeButter.
  return function() {
    if (!fridge.opened) {
      err("The fridge is closed, you fool!");
    }
    if (!fridge.stuff.butter) {
      err("There is no butter in the fridge, we are all going to die!");
    }

    // Is there too much stuff in the fridge?
    if (Object.keys(fridge.stuff).length > 4) {
      // With a certain probability the fridge is cluttered
      // and you cannot find the butter immediately.
      log("Where the hell is the butter?");
      log("Who took my butter?! Brendan!!");

      setTimeout(_justTakeTheButter, 2000);
    } else {
      _justTakeTheButter();
    }
  };
})();

// We are just taking the bread and putting on the table.
// At least this one does not fail.
function takeBread() {
  table.bread = bread;
  logCounter("I am taking the bread.");
}

// Self-executing function (closure) to create private variables. 
let sliceBread = (function() {
  
  function _putBreadSliceOnPlate(txt = "I am slicing the bread.") {
    logCounter(txt);
    // Increment the number of bread slices on the plate.
    if (!table.plate.breadSlices) table.plate.breadSlices = 1;
    else table.plate.breadSlices++;
  }
  
    // The actual function that will be assigned to sliceBread.
  return function() {
    let bread = table.bread;
    // Switch-true pattern to check multiple conditions.
    // It is equivalent to multiple if/else statements.
    switch (true) {
      case !table.bread:
        err('I have no knife!');
      case !bread:
        err("There is no bread, I am not in the mood to slice air.");
      case bread.availableSlices <= 0:
        err("No more bread to slice.");
      case bread.availableSlices < 3:
        logCounter("There is a little bread left, it's kind of difficult to cut it.");
        if (Math.random() > 0.4) {
          err("I cut myself, I told you!");
        }
    }
  
    // Whole wheat is complicated and we always do at most one slice.
    if (bread.type === "Whole Wheat") {
        log("Oh, the bread is " + bread.type.toLowerCase() + "; its crust is kind of hard...it'll take a while to slice it without a chainsaw.");
        
        // Create async function executed after a timeout of 3 seconds.
        setTimeout(() => {
          _putBreadSliceOnPlate('I finally managed to cut a slate from that stone-bread.');
        }, 3000);

    }
    // If it is white bread we might do more slices.
    else {

      // Cut the first slice.
      _putBreadSliceOnPlate();

      if (nSlicesNeeded > 1) {

        // Create async function executed with a periodic interval of 1 second.
        // We keep a reference to the interval, so that we can remove it when
        // we are done slicing. 
        let intervalSlicing = setInterval(() => {
          let stillNeeded = nSlicesNeeded - table.plate.breadSlices;
          log(`Just ${stillNeeded} slices left to cut...`);
          
          _putBreadSliceOnPlate();

          if (nSlicesNeeded === table.plate.breadSlices) {
            clearInterval(intervalSlicing);
          }
        }, 1000);
      }
    }
  }
  
})();


function spreadButter() {
  if (!table.butter) {
    err("There is no butter on the table? How can I spread it?");
  }
  if (!table.plate.breadSlices) {
    err("I haven't sliced my bread yet, how can I spread the butter?");
  }
  logCounter("I am spreading the butter on the bread.");
}

function yummy() {
  logCounter("Yummy!");
}

function doItAll() {
  console.clear();
  console.log();
  console.log("The bread and butter of async programming:");
  console.log();
  openFridge();
  takeButter();
  takeBread();
  sliceBread();
  spreadButter();
  yummy();
  console.log();
}

doItAll();
