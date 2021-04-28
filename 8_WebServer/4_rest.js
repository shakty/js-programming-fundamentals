/////////////////////////////////////////////
// Programming Fundamentals in JavaScript! //
/////////////////////////////////////////////

// Module: Web Server.
//////////////////////

// Exercise 5: REST.
////////////////////

// REST (Representational Transfer State) is a widely used pattern
// to create API which is implemented by Express.

// It contains four methods to do CRUD operations: 

// - POST:     Create a new resource, 
// - GET:      Read an existing resource,
// - PUT:      Update an existing resource,
// - DELETE:   Delete an exiting resource.

// More details here: 
// https://restfulapi.net/
// https://www.edureka.co/blog/what-is-rest-api/

// In practice this semantic representation is seldom implemented in full,
// and only GET and POST requests are used. 

// The main difference between GET and POST is that POST submits additional
// information as a payload to body of the HTTP request, while GET as a query
// string. For this, POST is preferred when larger pieces of information are 
// transferred or when dealing with sensitive data. 

// More details here:
// https://www.w3schools.com/tags/ref_httpmethods.asp
// https://www.guru99.com/difference-get-post-http.html

const express = require('express');
const app = express();
const PORT = 3000;

// Need these instructions for cloud.
// const cors = require('cors');
// app.use(cors());

// File in directory /public/ will be cached and served.
app.use(express.static('public'));

// POST (and PUT) requests require additional middleware to parse
// the HTTP requests' body.
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// Third-party. Load the cookie-parsing middleware.
const cookieParser = require('cookie-parser');
app.use(cookieParser())

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

// Exercise 5: REST.
////////////////////

// a. Create a new route "/activities" that returns all the activities used
// in app developed in the Bootstrap chapter. 
// Simulate a delay in accessing a database creating an async function and 
// with a timeout. 

app.get("/activities/", async (req, res) => {
	const activities = await getActivities();
	res.send(activities)
});

// b. Copy index.html and rename to fetch.html. Update it to to fetch
// the activities with a using the REST API that you created here.
// Hint: use the fetch command.

// c. Express can assign route segments to variables. This is
// useful to create more readable and compact urls, avoiding the use of
// query string. For instance, these two routes are equivalent:

// /activities/?id=1
// /activities/1

// To parse "1" as an id in the second route in the example above, 
// create the route using the colon operator followed by a variable name:

// "/activities/:id" 

// The id variable will theh be available in the res object under

// res.params.id

// Create a route that returns just one activity, the id of which is its
// position in the array of activities as returned by getActivities().

// Finally, copy file fetch.html and rename to fetch_one.html and fetch
// a random activity.

// Hint: generate a random integer between 0 and 11 (tot num of activities):
// https://www.w3schools.com/JS/js_random.asp  

app.get("/activities/:id", async (req, res) => {
	const activities = await getActivities();
	res.send(activities[req.params.id]);
});


// d. Optional. 
// You want to protect your precious list of activities with a super secret
// access key (equal to "123").
//
// You know by now that GET requests are not well-suited for sensitive data
// and you decided to reimplement a., b. using POST routes. 
//
// Finally, copy file fetch.html and rename to fetch_post.html and fetch
// the activities with a POST request instead of a GET request. 

// Hint1: On Express, you can simply specify a route as app.post(...). 
// Hint2: On the browser, the fetch implements GET requests by default. You
// can modify this behavior with additional configuration object:

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// Hint3: Do not forget to call JSON.stringify on your payload.

// We could use a middleware, but it would apply also to GET requests. So
// we create this "poor-man" middleware and use it as a function inside
// the route's callback.
let checkAuth = (req, res) => {
  if (req.body.key !== "123") {
      res.status(500);
      res.send("You are not authorized");
      return false;  
  };
  return true;
}

app.post("/activities/", async (req, res) => {
  if (!checkAuth(req, res)) return;
	const activities = await getActivities();
	res.send(activities);
});

// Get Activities Functions.
////////////////////////////

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
