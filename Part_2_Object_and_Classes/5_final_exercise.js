////////////////////////////////////////////////////////////////////////////////
// Welcome to the 1st exercise sheet of Programming Fundamentals in JavaScript!
///////////////////////////////////////////////////////////////////////////////

// Part 2 Object Oriented Programming.

// EXERCISE 1. Classes.
///////////////////////////////

// Not really an exercise, it is more a small warm up to recall the different
// primitive types in JavaScript and to get you familiar with ATOM Hydrogen.


import Tournament from 'tournament_files/tournament.js';

let tournament = new Tournament();

// A strategy is the name of a file inside the strategies folder (without .js).
tournament.addStrategy('random');
tournament.addStrategy('grim');
tournament.addStrategy('defect');
tournament.addStrategy('cooperate');
tournament.addStrategy('random09');

// This needs to be implemented.
tournament.addStrategy('tit4tat');

tournament.start();
