/////////////////////////////////////////////
// Programming Fundamentals in JavaScript! //
/////////////////////////////////////////////

// Exercise 4: Express Middleware.
//////////////////////////////////

// We are going to use a few more middleware functions
// to get familiar with them.

// Full reference:
// https://expressjs.com/en/guide/using-middleware.html

const express = require('express');
const app = express();
const PORT = 3000;

// Note: make sure these middlewares come before everyting.

// First thing first. Let's have a look at the incoming request.
app.use((req, res, next) => {
    console.log();
    console.log('First Middleware looks into the req objects:')
    
    console.log('Protocol: ', req.protocol)    // "https"
    console.log('Host: ', req.hostname)        // "example.com"
    console.log('Path: ', req.path)            // "/users"
    console.log('URL: ', req.originalUrl)      // "/user?id=123"
    console.log('Subdomain: ', req.subdomains) // "[]"
    console.log('Method: ', req.method);       // "'GET'"
    console.log('IP: ', req.ip);               // "'123.123.123.123'"

    console.log(req.query);

    // Passes control to the next middleware.
    next();
});

// Secondly, let's check the headers sent by the browser.
app.use((req, res, next) => {
    console.log();
    console.log('Second middleware checks the headers.');
      
    console.log('Type: ', req.header('Content-Type'));           // "application/json"
    console.log('User Agent: ', req.header('user-agent'));       // "Mozilla/5.0 (Macintosh Intel Mac OS X 10_8_5) AppleWebKi..."
    console.log('Authorization: ', req.header('Authorization')); // "asdasda..."

    // Passes control to the next middleware.
    next();
});

// We have used the static function in the previous exercise.
app.use(express.static('public'));

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


// Checkpoint.
//////////////

// 1. Go to: http://localhost:3000/ and check the console output.
// 2. How many times you get the output per request?


// Exercise 4: Create a simple auth middleware.
///////////////////////////////////////////////

// a. Create a middleware function that applies only to the route
// '/secret'. The middleware function should just print to console
// "You will be checked in the next exercise".

// Hint: Remember that the order in which middlewares and routes
// added matters.


app.use('/secret', (req, res, next) => {
    console.log('You will be checked in the next exercise');
    next();
});


// b. Check if the request includes the secret key "123" as query string,
// and block unauthorized connections. That is, a connection to the secret/ 
// area of your app is valid if it is specified as follows:
//
// http://localhost:3000/secret/?key=123

// Hint: The query string is available _unparsed_ through req.originalUrl,
// however the req.query object will contain the parsed query strings (e.g., 
// req.query.key).

// Hint2: How to block the connection? Simply don't send a message saying
// that the connection is not authorized, e.g. with res.send, and do not 
// invoke next.


app.use('/secret', (req, res, next) => {
    if (req.query.key === "123") next();
    else res.send('You are not authorized.');
});

// TODO: maybe not needed.

// Catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // Error handler
// app.use(function(err, req, res, next) {
//   // Set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// //   res.send('err')
// });

// app.use((err, req, res, next) => {
//     console.error(err.stack)
//     res.status(500).send('Something broke!')
//   })



