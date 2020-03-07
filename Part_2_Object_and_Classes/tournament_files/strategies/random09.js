const Random = require('./random.js');

class Random09 extends Random {

    constructor() {
        super();
        this.probability = 0.9;
    }
}

module.exports = Random09;
