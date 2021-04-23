////////////////////////////////////////////////////////////////////////////////
// Welcome to the 1st exercise sheet of Programming Fundamentals in JavaScript!
///////////////////////////////////////////////////////////////////////////////

// EXERCISE 1. Callbacks.
////////////////////////

// If you need to run some code _after_ some other event in the future, then
// the easiest solution is to use a callback (often shortened with "cb").

let printNews = (allNews) => {
  allNews.forEach(news => console.log(`- Breaking News: ${news.title}`));
};

let getLatestNews = (cb) => {
  // Imagine to connect to a server and getting back the  
  setTimeout(() => {
    let news = [ 
      {
        id: 'news1',
        title: 'Bitcoin price reached 60K!', 
      },
      {
        id: 'news2',
        title: 'Bitcoin price crashed 20%!'
      }
    ];
    if (cb) cb(news);
  }, 2000);
};

getLatestNews(printNews);