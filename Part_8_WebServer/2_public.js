/////////////////////////////////////////////
// Programming Fundamentals in JavaScript! //
/////////////////////////////////////////////

// TODO: move somewhere else.
// npm install express-generator -g
// Might require admin rights.
// Follow instructions on screen to launch the web server.


// Module: Web Server.
///////////////////////////////

// Express is a fast web server for NodeJS.

// Exercise 1: Install Express.
///////////////////////////////

// npm install express

// Start the server and open the browser:
// http://localhost:3000/
// to test that it is working.

const express = require('express');
const app = express();
const PORT = 3000;

// File in directory /public/ will be cached and served.
app.use(express.static('public'));

// Intercepts all requests.
app.get('/', (req, res) => {
    res.send('Yay! The server is running');
});

// Intercepts requests through the path /ASDA.
app.get('/asda', (req, res) => {
    res.send('How did you know about this route? ASDA!');
});

// Start the server on port 3000.
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));



