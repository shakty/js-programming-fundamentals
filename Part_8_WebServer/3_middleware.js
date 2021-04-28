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

// Exercise 1: Express Middleware.
//////////////////////////////////

// Full reference:
// https://expressjs.com/en/guide/using-middleware.html

const express = require('express');
const app = express();
const PORT = 3000;

// File in directory /public/ will be cached and served.
app.use(express.static('public'));

// Built-in. Parses incoming requests with JSON payloads.
app.use(express.json());

// Third-party. Load the cookie-parsing middleware.
const cookieParser = require('cookie-parser');
app.use(cookieParser())

// app.use((req, res, next) => {
//     console.log('Time: ', Date.now());
//     console.log('Request type: ', req.method);
//     next();
// });


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// app.use((err, req, res, next) => {
//     console.error(err.stack)
//     res.status(500).send('Something broke!')
//   })

// Intercepts all requests.
app.get('/', (req, res) => {
    res.send('Yay! The server is running!');
});

// Intercepts requests through the path /secret.
app.get('/secret', (req, res) => {
    res.send('How did you know about this route? It was a secret!');
});

// Start the server on port 3000.
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));



