////////////////////////////////////////////////////////////////////////////////
// Welcome to the 1st exercise sheet of Programming Fundamentals in JavaScript!
///////////////////////////////////////////////////////////////////////////////

// Part 2 Object Oriented Programming.

// I have already told JavaScript does not support encapsulation natively.
// What are you doing here?

// However if you want to learn about closures there is a bonus exercise.

// EXERCISE 1. Bonus. Closures.
///////////////////////////////
// Closures are more a thing of the past of JavaScript, when you were defining
// variables with the var keyword. But they are still useful and in
// some cases they are the only way to achieve your goal.

// a. Create a "self-executying anonymous function." What kind of beast is this?
// You start with creating a normal function, but without a name. That is
// an anonymous function. This function must do the following:
// - declares a variable counter initialized to zero (you may use the var
//   to feel like JS programmers felt 10 years ago.),
// - defines a method called increment that adds one to the variable counter,
// - returns a function that invokes the increment method and then prints
//   the current value of counter.
// Returning a function is pretty weird, but it is the key to understand
// closures. This function has accessed to both counter and increment,
// which are not defined outside of the closure. In other words,
// counter and increment are private, this is encapsulation in JavaScript.
// I just give the solution directly, just make sure to understand the
// concept of encapsulation.
myClosure = (function() {
    var counter = 0;
    function increment() {
        counter++;
    }
    return function() {
        increment();
        console.log(counter);
    }
})();

myClosure();
