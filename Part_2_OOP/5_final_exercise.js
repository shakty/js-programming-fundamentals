////////////////////////////////////////////////////////////////////////////////
// Welcome to the 1st exercise sheet of Programming Fundamentals in JavaScript!
///////////////////////////////////////////////////////////////////////////////

// Part 2 Object Oriented Programming.

// EXERCISE 1. Prisoner Dilemma Tournament!
///////////////////////////////////////////

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

tournament.start();
tournament.declareWinner()

console.log(tournament.results);

// tournament.save('./tournament_files/results/payoffs.csv');
