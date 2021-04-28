/////////////////////////////////////////////
// Programming Fundamentals in JavaScript! //
/////////////////////////////////////////////

// Module: Web Server.
//////////////////////

// Exercise 6: Publish your web server on the cloud.
////////////////////////////////////////////////////

// You have created a beatiful web server!

// a. It is time to share it with the world. On the cloud.

// There is a plethora of options available, but just a few 
// are free. Amongst these, Heroku is quite popular:

// https://www.heroku.com/

// 1. Create a free account on Heroku.

// 2. Create a new folder outside of the exercises folder
// (must not be a git repo).

// 3. Copy file 4_rest.js and rename to app.js (you can pick any name).

// 4. On Heroku, you can no longer set the port for your serer, 
// Heroku will decide it for you at runtime. So, you need to modify 
// the PORT declaration with this line:

// const PORT = 3000;

// to:

// const PORT = process.env.PORT || 80;

// 5. Create a Procfile that will tell Heroku how to launch your app:
// https://devcenter.heroku.com/articles/procfile
//
// TL;DR, a Procfile is a file named Procfile (without extentions) containing:
// web: node 4_rest.js

// 6. Copy package.json inside the folder: it will tell Heroku which
// dependencies to install (e.g., express).

// 7. Create a public/ folder and add fetch_post.html, the css and js folders.
// Rename fetch_post.html to index.html.

// 8. Head over to:

// https://devcenter.heroku.com/articles/git#tracking-your-app-in-git

// and follow the instructions to deploy your server to Heroku.
// 
// Pay attention at the name of your branch (master vs main),
// command "git branch" will show you the name of your branch. 

// b. You will get assigned a unique URL for your web site, such as
// thawing-inlet-61413.herokuapp.com.

// Locally: copy the file fetch_post.html to fetch_post_remote.html,
// and fetch the list of activities from the remote server on Heroku.


// c. Optional. Do you want to be really cool? Create a new folder, only with
// fetch_post.html and related files. Push it to Heroku, and let the two heroku
// apps communicate with each other.



