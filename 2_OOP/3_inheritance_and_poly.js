////////////////////////////////////////////////////////////////////////////////
// Welcome to the 3st exercise sheet of Programming Fundamentals in JavaScript!
///////////////////////////////////////////////////////////////////////////////

// Part 2 Object Oriented Programming.

// EXERCISE 1. Extending a class.
/////////////////////////////////

// Let's start with the following Person class.

class Person {

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    sayHi() {
        console.log('Hi, I am ' + this.name +
        ', I was born in ' + this.year);
    }
}

// a. Now let's extend it into the Liar class, you could take the last
// version we saw in the slides.

// b. Create an instance of Rosie Ruiz, the famous liar of the Boston
// marathon 1980.


// EXERCISE 2. Extend an extending class.
/////////////////////////////////////////
// Inheritance is cool! Let's do it again. Let's extend the Liar class
// into the ConfusedLiar class.

// a. The ConfusedLiar overrides the sayHi method of Liar and with
// probability 0.5 says 'Who am I?', otherwise invokes the sayHi method
// of the parent Liar class.




// Well done!
