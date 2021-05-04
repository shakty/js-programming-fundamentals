////////////////////////////////////////////////////////////////////////////////
// Welcome to the 1st exercise sheet of Programming Fundamentals in JavaScript!
///////////////////////////////////////////////////////////////////////////////

// The await/async pattern is so called "sugar coating" over the Promise syntax
// It means that it makes writing code involing promises easier and faster.

// EXERCISE 1. Async/await.
///////////////////////////

// Now implement the example above in an async way.
// Hint: setTimeout

let hello = () => { return "Hello" };
hello();

let hello = async () => { return "Hello" };
hello();

hello().then((value) => console.log(value));
hello().then(console.log);


async function hello() {
  return greeting = await Promise.resolve("Hello");
};
hello().then(alert);


wrapper();

// promise
//   .then(res => console.log(`2. Yes, he/she is one of them!`))
//   .catch(res => console.log(`2. Nope, let's keep searching.`));



  