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

app.use(express.urlencoded({ extended: true }));

// You DO NOT NEED express.json() and express.urlencoded() for GET Requests or DELETE Requests.

// You NEED express.json() and express.urlencoded() for POST and PUT requests, because in both these requests you are sending data (in the form of some data object) to the server and you are asking the server to accept or store that data (object), which is enclosed in the body (i.e. req.body) of that (POST or PUT) Request


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
    res.send('Yay! The server is running');
});

// Intercepts requests through the path /ASDA.
app.get('/asda', (req, res) => {
    res.send('How did you know about this route? ASDA!');
});

app.get("/activities/", async (req, res) => {
	const activities = await getActivities();
	res.send(activities)
});

app.get("/activities/:id", async (req, res) => {
	const activities = await getActivities();
	res.send(activities[req.params.id]);
});


// Start the server on port 3000.
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));



async function getActivities() {
     // Activity Cards.
     let activities = [
     {
       title: 'Adopt A Pet Dog.',
       description: 'Don\'t wait, the bet pets go early.',
       link: 'https://www.petfinder.com/pet-adoption/dog-adoption/'
     },
     {
       title: 'Host A Dinner Party With Friends.',
       description: 'Pandemic friendly.',
       link: 'https://www.foxnews.com/food-drink/coronavirus-self-isolation-how-dinner-party-quarantine'
     },
     { 
       title: 'Play With Legos.',
       description: 'You won\'t believe what you can do with plastic bricks.',
       link: 'https://bestlifeonline.com/lego-structures/'
     },
     {
       title: 'Make Coffee Ice Cubes.',
       description: 'It takes just 10 minutes.',
       link: 'https://www.delish.com/cooking/recipe-ideas/recipes/a53453/coffee-ice-cubes-recipe/'
     },
     {
       title: 'Have A Karaoke Night.',
       description: 'Or Karaoke Mondays.',
       link: 'https://www.youtube.com/watch?v=L9fOLMDkQoU'
     },
     {
       title: 'Volunteer To Babysit For A Friend.',
       description: 'Or not.',
       link: 'https://wehavekids.com/childcare/How-to-Avoid-Babysitting-Your-Friends-Children'
     },
     {
       title: 'Try A Science Experiment.',
       description: 'Great questions to be answered still.',
       link: 'https://www.ranker.com/list/science-fair-fails/nathandavidson'
     },
     {
       title: 'Learn To Juggle.',
       description: 'With supporting text below as a natural lead-in to additional content.',
       link: 'https://www.youtube.com/watch?v=7RDfNn7crqE'
     },
     {
       title: 'Have A Water Balloon Fight.',
       description: 'The largest one involved 8,957 people. Pre-pandemic.',
       link: 'https://www.guinnessworldrecords.com/world-records/largest-water-balloon-fight'
     },
     {
       title: 'Take A Power Nap.',
       description: 'Take a Nap! Change Your Life.',
       link: 'https://www.webmd.com/balance/features/the-secret-and-surprising-power-of-naps'
     },
     {
       title: 'Make S\'mores.',
       description: 'Ready. In. 3. Minutes.',
       link: 'https://www.allrecipes.com/recipe/22146/smores/'
     },
     {
       title: 'Watch The Sunset.',
       description: 'Really',
       link: 'https://i.pinimg.com/originals/54/e4/ef/54e4efc532962909ac803fe3ab47561a.jpg'
     }
   ];

   return await new Promise((resolve, reject) => {
      setTimeout(() => resolve(activities), Math.random() * 10000);
   });
}
