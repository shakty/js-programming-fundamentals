// Hi, I am a comment.
// I am preceded by a double "slash", that is: //
// Whatever follows the double slash is ignored, it is just for you to read.

// Empty lines are also ignore, obviously.

// What do programmers write in these comments?
// Imagine yourself opening this file in 2 years. What would you
// like to know in the most concise way possible?

// In this file, comments contain the text of the exercise as well as
// useful hints.

// Enough said. Let's begin with the basics of JavaScript and computing!

// I hope you don't get bored. If so, just continue with the exercises
// in the next file at your own pace. You will find the solutions in the
// folder called solutions. Who would expect that?

// EXERCISE 1. Computation and use of comments.
//////////////////////////////////////////////////////////////////////////////
// Perform the following computations and store the results in three
// separate variables named a, b, and c.
// Multiply the three variables to obtain the size of
// the population of Luzern as reported on Wikipedia Eng. on 03.06.2020.

// Important: If you are using the ATOM Hydrogen package, you do
// not need to use the variable operator let. This has two advantages:
//  - you can re-run the same command without throwing errors
//    of "variable already defined",
// - you can immediately see the output of your commands.

// a. Compute (18 + 107) / (5 * 25)
a = (18 + 107) / (5 * 25);
// b. Compute the square root of one million.
b = Math.sqrt(1000000);
// c. Take the remainder of the division betwen 18 and 11.
c = 18 % 11;

a*b*c;

// EXERCISE 2. Variable Naming.
// Give a proper name the value of the previous computation.
// It is really important to name variables with meaningful names.
// I mean not meaningful names. I mean, not meaningful for you, such as
// your best friend or your dog, meaningful with respect to the context of
// the computer program in which they belong.
// For instance, you could name it:
// the_population_of_Luzern_according_to_Wikipedia
// However, that would be impractically long.
// Pick a shorter name such as:
// Luzern_Population
// However, this is still not correct. In fact, in JavaScript, as well as
// in every programming language, you should follow the


// Objects

morph = {};
typeof morph;
// We will learn objects later in the course, this is just to show you
// that they exists and that they belong to their own special type.

morph = null;
typeof null;
// Ok, this is confusing. null is also of type object. In fact in JavaScript
// everything is an object behind the scenes, but this is an unfortunate
// design decision for the language.





// EXERCISE 3. Generate a random number between 0 and 1, and store
// its value in a variable.
let randomNumber = Math.random();

// EXERCISE 4. Generate a random number between 0 and the 100.000 and
// store its value in a variable.
// Hint: you can easily modify the result of the previous exercise.
randomNumber*= 100000;


// EXERCISE 4. Conditionals.
// Write a short code statement that compares the size of the population
// in Luzern computed in exercise 1, with the size of the population



// EXERCISE 2.Fibonacci sequence.
// Write a function which computes the Fibonacci sequence of a
// given number n and returns the result in a vector.
// The Fibonacci sequence, such that each number is the sum of the two
// preceding ones, starting from 0 and 1.
