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
  "Honeybunny"
];

let idx = Math.floor(Math.random() * salutations.length);
document.getElementById("sal").innerHTML = salutations[idx];
