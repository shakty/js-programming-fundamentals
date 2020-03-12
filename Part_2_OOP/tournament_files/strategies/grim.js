const Strategy = require('../strategy.js');

class Grim extends Strategy {

    constructor() {
        super();
        this.hasDefected = false;
    }

    action() {
        return this.hasDefected ? this.DEFECT : this.COOPERATE;
    }

    // This method overwrites the update method in Strategy.js,
    // but we still need to call the original one at every update.
    update(ownAction, otherAction, ownPayoff, otherPayoff) {
        if (otherAction === this.DEFECT) this.hasDefected = true;
        // Perform the original update.
        super.update(ownAction, otherAction, ownPayoff, otherPayoff);
    }

    static win() {
        console.log('I won, do not mess up with me, I am grim!');
    }

    static defeat() {
        console.log('I lost, I am even more grim.')
    }

    reset() {
        this.hasDefected = false;
        super.reset();
    }
}

module.exports = Grim;
