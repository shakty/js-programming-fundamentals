const Strategy = require('../strategy.js');

class Defect extends Strategy {

    constructor() {
        super();

    }

    action() {
        return this.DEFECT;
    }

    win() {
        console.log('I won! You suckers!');
    }

    defeat() {
        console.log('No comment.');
    }
}

module.exports = Defect;
