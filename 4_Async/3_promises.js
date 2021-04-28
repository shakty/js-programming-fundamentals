////////////////////////////////////////////////////////////////////////////////
// Welcome to the 1st exercise sheet of Programming Fundamentals in JavaScript!
///////////////////////////////////////////////////////////////////////////////

// I promise that you will master async coding.
// Then you will be happy.
// Catch the meaning of this intro after you understand promises.
// Finally you will be really happy.

// EXERCISE 1. Promises.
////////////////////////

// Promises are really simple. Let me break it down for you.
// - They are one function, 
// - taking two input parameters,
// - those input parameters are also functions,
// - you execute the first one on success, and the second on failure.

// According to the authoritative source bestlifeonline.com
// (https://bestlifeonline.com/crazy-statistics/), one third of adults sleeps
// with a comfort object (teddy bear, etc.). Let's set the probability
// of success 1/3 and write a promise that is on average accurate in detecting
// if you are sleeping with a comfort object.

let comfortObj = 1/3;

let promise = new Promise(function(resolve, reject) {
  if (Math.random() > comfortObj) resolve(true);
  else reject(false);
});

promise
  .then(res => console.log(`1. Yes, he/she is one of them!`))
  .catch(res => console.log(`1. Nope, let's keep searching.`));


console.log();  
console.log('******************************************************');
console.log();
// Ok, but I thought that this section was for async code, the example above
// is synchronous. The beauty of promises is that they don't care about it.
// They just have two functions resolve/reject and want to execute one of them.


// Now implement the example above in an async way.
// Hint: setTimeout

promise = new Promise(function(resolve, reject) {
  setTimeout(() => {
    if (Math.random() > comfortObj) resolve(true);
    else reject(false);
  }, 2000);   
});

promise
  .then(res => console.log(`2. Yes, he/she is one of them!`))
  .catch(res => console.log(`2. Nope, let's keep searching.`));


// EXERCISE 2. Finally.
///////////////////////

// I didn't tell you about it before, but promises have a third method: finally.
// It is called regardless of whether the promise was successefull or failed.
// Modify the promise declaration to use finally instead of then and catch.

let exerciseIsOver = false;
promise = new Promise(function(resolve, reject) {
  setTimeout(() => {
    if (Math.random() > comfortObj) resolve(true);
    else reject(false);
  }, 2000);   
});

promise
  .then(res => console.log(`3. Yes, he/she is one of them!`)) 
  .catch(res => console.log(`3. Nope, let's keep searching.`))
  .finally(() => {
    isSearching = true;
    console.log('Is the exercise over?', isSearching);
  });

  