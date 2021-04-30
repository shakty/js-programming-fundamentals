// This is a normal JS file operating on "hello.html".

let salutations = [
  "Mr",
  "Ms",
  "Mrs",
  "Dr",
  "Doc",
  "You",
  "Dear",
  "Honey",
  "Sweatheart",
  "Honey Bunny"
];

let pushes = [
  'You can do it',
  'Keep it up',
  'Don\'t give up',
  'Hang tight',
  'You are the best',
  'You are not the worst',
  'No pain no gain',
  'Go Go Go',
  'Keep it rolling'
];

// Random integer between 0 and number of items in the 
// salutations array.
let idx = Math.floor(Math.random() * salutations.length);
// Substitute the text inside the element with ID "salutation".
document.getElementById("salutation").innerHTML = salutations[idx];

// Do it again for pushes.
idx = Math.floor(Math.random() * pushes.length);
document.getElementById("push").innerHTML = pushes[idx];
