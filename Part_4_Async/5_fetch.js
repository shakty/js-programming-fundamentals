 /////////////////////////////////////////////
 // Programming Fundamentals in JavaScript! //
 /////////////////////////////////////////////

 // Module: Async Programming.
 /////////////////////////////

// In a world where nothing is like it was, "fetch" is one of the 
// few things you can still rely upon. It does what it "promises":
// it will fetch something for you.

// Fetch is very good at fetching stuff from remote servers and
// it is very well supported in modern browser.
// However, alas, it does not go along well with old browsers,
// for which the old-school AJAX (Asynchronous JavaScript And XML) requests 
// are still the way to go. There is no native support in NodeJS, but 
// don't worry, exercise 1 has got you covered.

// Exercise 1: install and require node-fetch.
//////////////////////////////////
// a. Fetch yourself the node-fetch with this command:

// npm i node-fetch --save

// After you have installed node-fetch, require it and assign it 
// to a variable named fetch.

// Solution.
const fetch = require('node-fetch');


// Exercise 2: Star Wars API.
//////////////////////////////

// Now that you have unleashed the power of fetch on your computer,
// let's use its "force" to do something cool.

// 

const ENDPOINT = 'https://swapi.dev/api/';

let query = 'people/';

// fetch(ENDPOINT + query)
//   .then(res => console.log(res));

// Have a look inside.

// Why 400.
// https://en.wikipedia.org/wiki/List_of_HTTP_status_codes

// fetch(ENDPOINT + query)
//   .then(res => {
//     if (res.status >= 400) {
//       throw new Error("Bad response from server");
//     }
//     return res.json();
//   })
//   .then(json => {
//     console.log(json);
//   })
//   .catch(err => {
//     console.error(err);
//   });


// // Exercise 2. Async Fetch.
// ///////////////////////////

// // Await works only inside an async function.
// (async() => {
//   try {
//     const res = await fetch(ENDPOINT + query);

//     if (res.status >= 400) {
//       throw new Error("Bad response from server");
//     }

//     const user = await res.json();

//     console.log(user);

//   } 
//   catch(err) {
//     console.error(err);
//   }
// })();
  

// Exercise 3. Optional. Fetch them all.
////////////////////////////////////////

let db = [];
let page = 1;

let doFetch = (page = 1) => {
  console.log('Fetching page ' + page);
  fetch(ENDPOINT + query + '?page=' + page)
    .then(res => {
      if (res.status >= 400) {
        throw new Error("Bad response from server");
      }
      return res.json();
    })
    .then(json => {
      db = [ ...db, ...json.results ];
      doFetch(++page);
    })
    .catch(err => {
      console.log(`Fetched ${db.length} Star Wars characters.`);
      // console.error(err);
      // fetching = false;
    });
}

doFetch();




// let fetchAll = async () => {
//   let db = [];
//   let fetching = true;
//   let page = 1;
//   try {
//     while(fetching) {
//       console.log('Fetching page ' + page);
//       const res = await fetch(ENDPOINT + query + '?page=' + page++);
      
//       if (res.status >= 400) {
//         throw new Error("Bad response from server");
//       }

//       const json = await res.json();

//       db = [ ...db, ...json.results ];
//     }
//   } 
//   catch(err) {
//     // console.error(err);
//     fetching = false;
//   }
//   return db;
// };

// (async() => {
//   let db = await fetchAll();
//   console.log(`Fetched ${db.length} Star Wars characters.`);
// })();



