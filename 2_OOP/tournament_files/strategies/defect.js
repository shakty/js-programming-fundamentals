const Strategy = require('../strategy.js');

class Defect extends Strategy {

    action() {
        return this.DEFECT;
    }

    static win() {
        console.log('I won! You suckers!');
    }

    static defeat() {
        console.log('No comment.');
    }
}

module.exports = Defect;
