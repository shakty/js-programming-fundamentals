////////////////////////////////////////////////////////////////////////////////
// Welcome to the 1st exercise sheet of Programming Fundamentals in JavaScript!
///////////////////////////////////////////////////////////////////////////////

// Part 2 Object Oriented Programming.

// You can have a look around, but wait for everybody to get here!

// EXERCISE 1. Prisoner Dilemma Tournament!
///////////////////////////////////////////

// Warning: This command might not run properly on Hydrogen.
const Tournament = require('./tournament_files/tournament.js');

let tournament = new Tournament({ verbose: true });

// A strategy is the name of a file inside the strategies folder (without .js).
tournament.addStrategy('random');
tournament.addStrategy('grim');
tournament.addStrategy('defect');
tournament.addStrategy('cooperate');
tournament.addStrategy('random09');

// This needs to be implemented.
tournament.addStrategy('tit4tat');

tournament.addStrategy('mystrategy');

tournament.start();
tournament.declareWinner()

console.log(tournament.results);
