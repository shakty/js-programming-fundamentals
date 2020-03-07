const Random = require('./random.js');

class Random09 extends Random {

    constructor() {
        super();
        this.probability = 0.9;
    }

    static win() {
        console.log('I 90% randomly won!');
    }

    static defeat() {
        console.log('I lost, 90% randomly.')
    }
}

module.exports = Random09;
