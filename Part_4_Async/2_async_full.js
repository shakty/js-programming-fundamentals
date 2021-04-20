////////////////////////////////////////////////////////////////////////////////
// Welcome to the 1st exercise sheet of Programming Fundamentals in JavaScript!
///////////////////////////////////////////////////////////////////////////////

// EXERCISE 1. Timeouts and Intervals.
/////////////////////////////////////

// let args = process.argv;
// let breadType 

// This is async 101, I know you can make it.


let doThrow = false;
let doAsync = true;

// Random variables.

let breadType = Math.random() > 0.5 ? "Whole Wheat" : "White";

let fridgeCluttered = Math.random() > 0.5;

let nSlices = Math.ceil(Math.random() * 10);
// I will cut between 1 and the number of available slices.
let nSlicesNeeded = Math.ceil(Math.random() * nSlices);

// State variables.
///////////////////


let fridge = {
  opened: false,
  stuff: {
    butter: true,
    water: true,
    soda: true,
    misteryJar: true,
  },
};

if (fridgeCluttered) {
  fridge.stuff.mushrooms = true;
  fridge.stuff.pizza = true;
  fridge.stuff.giantPot = true;
}

let table = {
  plate: {},
  knife: true
};

let bread = {
  availableSlices: nSlices,
  type: breadType
};

// Logging.
/////////////////////////////////

let actionCounter = 0;

function logCounter(txt) {
  console.log(++actionCounter, txt);
}

function quit() {
  console.log('I cannot go ahead like this...');
  process.exit(-1);
}

function err(txt) {
  txt = "**** Aaaah!!! " + txt;
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

    // Is there too much stuff in the fridge?
    if (Object.keys(fridge.stuff).length > 4) {
      // With a certain probability the fridge is cluttered
      // and you cannot find the butter immediately.
      console.log("Where the hell is the butter?");
      console.log("Who took my butter?! Brendan!!");

      setTimeout(_justTakeTheButter, 2000);
    } else {
      _justTakeTheButter();
    }
  };
})();

// We are just taking the bread and putting on the table.
function takeBread() {
  table.bread = bread;
  logCounter("I am taking the bread.");
}



function _putBreadSliceOnPlate() {
  table.plate.breadSlice = true;
}

function sliceBread() {
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
      if (Math.random() > 0.1) {
        err("I cut myself, I told you!");
      }
  }

  if (bread.type === "Whole Wheat") {
      console.log("Oh, it is a " + bread.type + " bread, its crust is kind of hard...it'll take a while without a chainsaw.");
      setTimeout(function() {
        logCounter('I finally managed to cut a slate from that stone-bread.');
        _putBreadSliceOnPlate();
      }, 3000);
  }
  else {
    logCounter("I am slicing the bread.");
    _putBreadSliceOnPlate();
  }
}

function spreadButter() {
  if (!table.butter) {
    err("There is no butter on the table? How can I spread it?");
  }
  if (!table.plate.breadSlice) {
    err("I haven't sliced my bread yet, how can I spread the butter?");
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
