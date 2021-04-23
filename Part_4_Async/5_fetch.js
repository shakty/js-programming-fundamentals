////////////////////////////////////////////////////////////////////////////////
// Welcome to the 1st exercise sheet of Programming Fundamentals in JavaScript!
///////////////////////////////////////////////////////////////////////////////

// Execute
// npm i node-fetch --save

const fetch = require('node-fetch');

const ENDPOINT = 'https://swapi.dev/api/';

let query = 'people/1';

// fetch(ENDPOINT + query)
//   .then(res => console.log(res));

// Have a look inside.

// Why 400.
// https://en.wikipedia.org/wiki/List_of_HTTP_status_codes

fetch(ENDPOINT + query)
  .then(res => {
    if (res.status >= 400) {
      throw new Error("Bad response from server");
    }
    return res.json();
  })
  .then(user => {
    console.log(user);
  })
  .catch(err => {
    console.error(err);
  });


// Exercise 2. Async Fetch.
///////////////////////////

// Await works only inside an async function.
(async() => {
  try {
    const res = await fetch(ENDPOINT + query);

    if (res.status >= 400) {
      throw new Error("Bad response from server");
    }

    const user = await res.json();

    console.log(user);

  } 
  catch(err) {
    console.error(err);
  }
})();
  