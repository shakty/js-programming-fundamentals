const Strategy = require('../strategy.js');

class Random extends Strategy {

    constructor() {
        super();
        this.probability = 0.5;
    }

    action() {
        return Math.random() > this.probability ? this.DEFECT : this.COOPERATE;
    }

    static win() {
        console.log('I randomly won!');
    }

    static defeat() {
        console.log('I lost, randomly.')
    }
}

module.exports = Random;
