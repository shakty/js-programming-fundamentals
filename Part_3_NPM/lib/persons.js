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