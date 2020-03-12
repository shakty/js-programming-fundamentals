////////////////////////////////////////////////////////////////////////////////
// Welcome to the 2st exercise sheet of Programming Fundamentals in JavaScript!
///////////////////////////////////////////////////////////////////////////////

// Part 2 Object Oriented Programming.

// EXERCISE 1. Extending a class.
/////////////////////////////////

// Let's start with creating the Person class from the previous exercise sheet.

class Person {

    constructor(first, last, year) {
        this.first = first;
        this.last = last;
        this.year = year;
    }

    sayHi() {
        console.log('Hi, I am ' + this.first + ' ' + this.last +
        ', I was born in ' + this.year);
    }
}

// Each function is executed within a given context. The context is different
// from the scope, and it specifically refers to the value of the `this`
// keyword. JavaScript, unlike most other programming languages, changes
// the value of `this` dynamically, depending on the position of the code
// in the hierachy of functions. Pretty confusing? You are right and you
// who to thank! Let's see few examples to understand.

// Let's create a class representing a shy person, who hesitates 1 second
// before saying hi to others. We use the setTimeout function to introduce
// a time lag in the execution of the code.
// The setTimeout function takes two parameters: the callback function to be
// executed after the timeout, and the waiting time in milliseconds.

class ShyPerson {

    constructor(first, last, year) {
        this.first = first;
        this.last = last;
        this.year = year;
    }

    sayHi() {
        console.log('I will tell you who I am in a second.')
        setTimeout(function() {
            console.log('Hi, I am ' + this.first);
        }, 1000)
    }
}

var brendan = new ShyPerson('Brendan', 'Eich', 1961);

brendan.sayHi();
// Will tell you 'Hi, I am undefined.' Why?
// Because inside the timeout function `this` is pointing to another object,
// that is the timeout function itself. How to recover the original value?

// Write function sayHi2 so that sayHi method returns the correct string.

// a. Use the old-timer that = this trick.

brendan.sayHi2 = function() {
    let that = this;
    console.log('I will tell you who I am in a second.')
    setTimeout(function() {
        console.log('Hi, I am ' + that.first);
    }, 1000);
}

brendan.sayHi2();

// b. Use the arrow function and this.

brendan.sayHi3 = function() {
    console.log('I will tell you who I am in a second.')
    setTimeout(() => {
        console.log('Hi, I am ' + this.first);
    }, 1000);
}

brendan.sayHi3();

// EXERCISE 2. Bonus. Apply and Call.
/////////////////////////////////////

// In JavaScript you can specify the context of execution of a function
// explicitly using the `call` and `apply` methods.

// b. Create a new person object. For instance: Linus Torvalds, class 1969.
linus = new ShyPerson('Linus', 'Torvalds', 1969);

brendan.sayHi2.call(linus);
brendan.sayHi2.apply(linus);
// Ah Brendan, you liar!

// In this example call and apply behave the same, they different in the
// you pass input parameters to them. Not so important right now.
