// Solution.

// The naming of the exported variables must match the name
// in the import/require declaration.

let person1 = {
    
    first: 'Brendan',
    
    last: 'Eich'
    
};

let person2 = {

    first: 'Bill',

    last: 'Gates'

};

let getRandomPerson = () => Math.random() > 0.5 ? person1 : persone2;

module.exports = { person1, person2, getRandomPerson };

// Alternative, more verbose, module.exports.
// module.exports = {
//     person1: person1,
//     person2: person2,
//     getRandomPerson: getRandomPerson
// };