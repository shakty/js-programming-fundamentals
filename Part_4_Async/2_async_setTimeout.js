////////////////////////////////////////////////////////////////////////////////
// Welcome to the 1st exercise sheet of Programming Fundamentals in JavaScript!
///////////////////////////////////////////////////////////////////////////////

// EXERCISE 1. Timeouts and Intervals.
/////////////////////////////////////

// This is async 101, I know you can make it.


let doThrow = false;
let doAsync = false;

// State variables.
///////////////////


let fridge = {
  opened: false,
  stuff: {
    butter: true,
    water: true,
    chicken: true,
    misteryJar: true,
  },
};

let table = {
  plate: true,
  knife: true
};

let bread = {
  availableSlices: 1,
  type: "integral",
};

// Logging.
/////////////////////////////////

let actionCounter = 0;

function logCounter(txt) {
  console.log(++actionCounter, txt);
}

function quit() {
  process.exit(-1);
}

function err(txt) {
  txt = "Aaaah!!! " + txt;
  if (doThrow) throw new Error(txt);
  console.log(txt);
  quit();
}

//////////////////////////////

function openFridge() {
  logCounter("I am opening the fridge.");
  if (fridge.opened) {
    logCounter(
      "Wait...it is already open! Who left it opened??? Brendan was it you?"
    );
    // Early return.
    return;
  }
  fridge.opened = true;
}

// Closure.
let takeButter = (function() {

  // Private function.
  function _justTakeTheButter() {
    logCounter("I am taking the butter.");
    fridge.stuff.butter = false;
    table.butter = true;
  }

  // The actual function that will be called.
  return function() {
    if (!fridge.opened) {
      err("The fridge is closed, you fool!");
    }
    if (!fridge.stuff.butter) {
      err("There is no butter in the fridge, we are all going to die!");
    }

    if (doAsync && Math.random() > 0.5) {
      // With a certain probability the fridge is cluttered
      // and you cannot find the butter immediately.
      logCounter("Where the hell is the butter?");
      logCounter("Who took my butter?!");

      setTimeout(_justTakeTheButter, 2000);
    } else {
      _justTakeTheButter();
    }
  };
})();

// We are just taking the bread and putting on the table.
function takeBread() {
  table.bread = true;
  logCounter("I am taking the bread.");
}

// We 
function sliceBread() {
  let bread = table.bread;
  // Switch-true pattern to check multiple conditions.
  // It is equivalent to multiple if/else statements.
  switch (true) {
    case !table.bread:
      err('I have no knife!');
    case !bread:
      err("I am not in the mood to slice air.");
    case bread.availableSlices <= 0:
      err("No more bread to slice.");
    case bread.availableSlices < 3:
      log("There is a little bread left, it's kind of difficult to cut it.");
      if (Math.random() > 0.1) {
        err("I cut myself, I told you!");
      }
  }
  logCounter("I am slicing the bread.");
}

function spreadButter() {
  if (!table.butter) {
    err("There is no butter on the table? How can I spread it?");
  }
  logCounter("I am spreading the butter on a slice of bread.");
}

function yummy() {
  logCounter("Yummy!");
}

function doItAll() {
  console.clear();
  console.log("The bread and butter of async programming:");
  console.log();
  openFridge();
  takeButter();
  takeBread();
  sliceBread();
  spreadButter();
  yummy();
}

doItAll();
