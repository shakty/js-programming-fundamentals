const Strategy = require('../strategy.js');

class Tit4Tat extends Strategy {

    constructor() {
        super();
    }

    action() {
        let lastOutcome = this.getOutcome();
        if (!lastOutcome || lastOutcome.otherAction === this.COOPERATE) {
            return this.COOPERATE;
        }
        return this.DEFECT;
    }

    win() {
        console.log('Tit for Win!');
    }

    defeat() {
        console.log('Tat for Lost.')
    }
}

module.exports = Tit4Tat;
