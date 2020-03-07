////////////////////////////////////////////////////////////////////////////////
// Welcome to the 1st exercise sheet of Programming Fundamentals in JavaScript!
///////////////////////////////////////////////////////////////////////////////

// Part 2 Object Oriented Programming.

// EXERCISE 1. Classes (Old syntax).
///////////////////////

function Person(first, last, year) {
    this.first = first;
    this.last = last;
    this.year = year;
}

var brendan = new Person('Brendan', 'Eich', 1961);

Person.prototype.sayHi = function() {
    console.log('Hi, I am ' + this.first);
};

brendan.sayHi();

// EXERCISE 1. Classes (New syntax).
///////////////////////////////////

class Person {

    constructor(first, last, year) {
        this.first = first;
        this.last = last;
        this.year = year;
    }

    sayHi() {
        console.log('Hi, I am ' + this.first);
    }
}

var brendan = new Person('Brendan', 'Eich', 1961);

// Behind there is still a prototype object.
// So if you make changes to
console.log(Person.prototype);
console.log(brendan.__proto__)
