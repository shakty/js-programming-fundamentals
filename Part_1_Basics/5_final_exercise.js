////////////////////////////////////////////////////////////////////////////////
// Welcome to the 3nd exercise sheet of Programming Fundamentals in JavaScript!
///////////////////////////////////////////////////////////////////////////////

// Here we try to put things together

// EXERCISE 1. Fibonacci.
/////////////////////////

// The Fibonacci sequence is such that each number is the sum of
// the two preceding ones in the sequence, starting from 0 and 1.
// You can learn more here: https://en.wikipedia.org/wiki/Fibonacci_number

// a. Implement a function that computes the fibonacci number for
//  any input number.
// For instance, if input is 10, the result is 55.

function fibonacci(n) {
    let fibo = [ 0, 1 ];
    if (n < 2) return fibo[n];
    for (let i=2; i <= n; i++) {
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo[n];
}

fibonacci(10);

// EXERCISE 2. Bonus. Recursive Fibonacci.

// Recursion is the


function fibonacciRecursive(n, counter) {
    counter = counter || 0;
    if (n > 1) fibo = fibonacciRecursive(n-1, n);
    else fibo = n;
    return fibo + counter;
}

fiboArray = [0, 1];
function fibonacciRecursive(n) {
    if (n > 2) {
        fiboArray[n] = fibonacciRecursive(n-1);
        fiboArray[n+1] = fibonacciRecursive(n) +
        fibonacciRecursive(n-1);
    }
}

fibonacciRecursive(10);

counter = 0;
myInterval = setInterval(function() {
    console.log(new Date());
    if (++counter > 10) clearInterval(myInterval);
}, 2000);


// FUN EXERCISE

// You have done everything! You are a Jenius (shorthand for JavaScript Genius)!
// Why don't you relax and have some fun programming a JS robot?
// Check out: https://lab.reaal.me/jsrobot/





// Great work! You finish the third exercise sheet!
// Stop patting yourself, enough.
