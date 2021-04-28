/////////////////////////////////////////////
// Programming Fundamentals in JavaScript! //
/////////////////////////////////////////////

// TODO: move somewhere else.
// npm install express-generator -g
// Might require admin rights.
// Follow instructions on screen to launch the web server.


// Module: Express Web Server.
//////////////////////////////

// Express is a fast web server for NodeJS.
// https://expressjs.com/

// A web server is a computer software that replies to incoming
// network requests by serving files (hmtl pages, images, videos, JSON, ...).

// The philosophy of Express is to be minimal and to allow for 
// complex configurations by the programmers.

// Exercise 1: Create your first Express server.
////////////////////////////////////////////////

// Type in the console:

// npm install express

// When ready, start the server and point the browser to:

// http://localhost:3000/

// to check that it is working.

const express = require('express');
const app = express();
const PORT = 3000;

// Start the server on port 3000.
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

// As I said, Express is **mininal**. Or lazy. It does not do
// anything unless you tell him so. So let's add some routes.

// Routes match a path from the root address to a callback function.
// The callback takes (at least) two input parameters:
// 
// - req: an object with info about the incoming network request,
// - res: an object with info and methods to respond to the request.

// Intercepts all requests.
app.get('/', (req, res) => {
    res.send('Yay! The server is running!');
});

// Intercepts requests through the path /secret.
app.get('/secret', (req, res) => {
    res.send('How did you know about this route? It was a secret!');
});

// Checkpoint.
// 1. What do you see?
// 2. What do you see at route: http://localhost:3000/secret/ ?
// 3. What do you see at route: http://localhost:3000/SECRET/ ?
// 4. What do you see at route: http://localhost:3000/notexisting/ ?
