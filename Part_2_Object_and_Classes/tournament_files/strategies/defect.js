const Strategy = require('../strategy.js');

class Defect extends Strategy {

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
