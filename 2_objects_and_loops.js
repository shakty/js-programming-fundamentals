////////////////////////////////////////////////////////////////////////////////
// Welcome to the 2nd exercise sheet of Programming Fundamentals in JavaScript!
///////////////////////////////////////////////////////////////////////////////

// You have already learned about a few primitive types and you are ready
// to master objects and loops now. Great!

// EXERCISE 0. Definitions.
//////////////////////////

// Not really an exercise, it is more a small warm up to recall the different
// primitive types in JavaScript and to get you familiar with ATOM Hydrogen.

// Create a variable named morph and assign a value to it for each
// primitive type in JavaScript. The typeof operator gives the type
// of a variable.

// Objects.

obj = {};
// An empty object.
typeof obj;
// Objects are containers for variables indexed by a key (in other programming
// languages they may be called maps or dictionaries). They can contain
// variables of any type inside.

// Arrays.

array = [];
// An empty array.
typeof array;
// Arrays are containers for variables indexed by a number. They are faster
// to iterate through than objects. Like objects, they can contain variables
// of any type.

// A special type of object, the null object.
obj = null;
typeof null;
// Ok, this is confusing. null is an object? In fact, in JavaScript
// everything is an object behind the scenes, but this is an unfortunate
// design decision for the language. Just have to live with this quirk,
// it is not too terrible if you know about it.

// Question. How is null different from undefined? null is an explicit value
// assigned by the programmer.

// EXERCISE 1. Create an object to represent a person.
//////////////////////////////////////////////////////

// a. The person is identified by two properties: name and year of birth.
// Let's pick Brendan Eich, the creator of JavaScript. The guy who
// decided that the type of null is 'object'.
// Hint. The property name must contain the full name (Brendan Eich), and
// the property birth must contain the year in which he was born (1961).
person = {
    name: 'Brendan Eich',
    year: 1961
};

// b. Access the properties of the person object.
person.name;
person.year;

// EXERCISE 2. Add and remove properties to the person object.
//////////////////////////////////////////////////////

// Now you realize that it makes more sense to split the property 'name' into
// two: 'first' and 'last' name. Accordingly you delete the propery name.
person.first = 'Brendan';
person.last = 'Eich';
delete person.name;
person;

// EXERCISE 3. Create an array of persons.
//////////////////////////////////////////

// a. Create an array called persons containing three items.
// You already, have Brendan, now add another two inspiring personalities.
// For example, Pablo Picasso and Napoleon Bonaparte. When are they born?
persons = [
    person,
    { first: 'Pablo', last: 'Picasso', year: 1881 },
    { first: 'Napoleon', last: 'Bonaparte', year: 1821},
];

// b. Count how many elements are in the array.
persons.length;

// c. Access the second element of the array.
persons[1];
// Arrays are 0-indexed, that is the first element has index 0,
// the second element 1, and so on.

// d. Access the property year of the second element of the array.
persons[1].year;

// EXERCISE 3. Pick a random item in the array of persons.
//////////////////////////////////////////////////////////

// Hint. Generate a random number between 0 and the total
// number of elements in the array, then "floor" it with the corresponding
// method of the Math object.
randomNumber = Math.floor(Math.random()*persons.length);
persons[randomNumber];

// EXERCISE 4. Add a new elements to the array of persons.
//////////////////////////////////////////////////////////

// You just realized that Phil Katz (born 1962) also deserves to be
// added to the list. Who is Phil Katz? This is a sad story.
// Hint: There are a couple of ways of achieving this, depending to where
// you would like to add the element. For instance push will add at the bottom
// of the array.
persons.push({
    first: 'Phil',
    last: 'Katz',
    year: 1962
});
persons[3];

// EXERCISE 5. Replace an element to the array of persons.
//////////////////////////////////////////////////////////

// Maybe you hurried too much with Phil Katz. What about
// Linus Torvalds (1969) instead?
// Hint: simply assign a new value at a given array index.
persons[3] = {
    first: 'Linus',
    last: 'Torvalds',
    year: 1969
};
persons[3];



// Pat yourself on the back or ask the person to your right to do it,
// if that is appropriate.
