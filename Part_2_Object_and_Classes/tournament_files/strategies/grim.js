const Strategy = require('../strategy.js');

class Grim extends Strategy {

    constructor() {
        super();
        this.hasDefected = false;
        // Keep a reference to previous update function, we will need it.
        this._update = this.update;
    }

    action() {
        return this.hasDefected ? this.DEFECT : this.COOPERATE;
    }

    // This method overwrites the update method in Strategy.js,
    // but we still need to call the original one at every update.
    update(ownAction, otherAction, ownPayoff, otherPayoff) {
        if (otherAction === this.DEFECT) this.hasDefected = true;
        // Perform the original update.
        this._update(ownAction, otherAction, ownPayoff, otherPayoff);
    }

    win() {
        console.log('I won, do not mess up with me!');
    }

    defeat() {
        console.log('I lost, I am even more grim.')
    }
}

module.exports = Grim;
