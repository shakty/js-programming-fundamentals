////////////////////////////////////////////////////////////////////////////////
// Welcome to the 1st exercise sheet of Programming Fundamentals in JavaScript!
///////////////////////////////////////////////////////////////////////////////

// EXERCISE 1. Timeouts and Intervals.
/////////////////////////////////////

// This is async 101, I know you can make it.

let actionCounter = 0;

function printCounter(txt) {
  console.log(++actionCounter, txt);
}

function openFridge() {
  // Show notification about API call
  printCounter("I am opening the fridge.");
}

function takeButter() {
  // Show notification about processing data
  printCounter("Where the hell is the butter?");
  printCounter("Who took my butter?!");

  setTimeout(function () {
    printCounter("I am taking the butter.");
  }, 2000);
}

function takeBread() {
  printCounter("I am taking the bread.");
}

function sliceBread() {
  printCounter("I am slicing the bread.");
}

function spreadButter() {
  printCounter("I am spreading the butter on a slice of bread.");
}

function yummy() {
  printCounter("Yummy!");
}

function doItAll() {
  console.clear();
  console.log("The bread and butter of async programming.");
  console.log("---");
  openFridge();
  takeButter();
  takeBread();
  sliceBread();
  spreadButter();
  yummy();

  console.log();
}

doItAll();
