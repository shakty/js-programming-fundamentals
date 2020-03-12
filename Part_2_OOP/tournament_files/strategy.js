const Tournament = require('./tournament.js');

class Strategy {

    constructor(name) {

        // Array of history of outcomes.
        this.history = [];

        // Available actions.
        this.DEFECT = Tournament.DEFECT;
        this.COOPERATE = Tournament.COOPERATE;

        // Total payoff.
        this.totPayoff = 0;

        // Tmp payoff is cleared by the reset method.
        this.payoff = 0;

        // Set the name to the class name (for extending classes).
        this.name = this.constructor.name;
    }

    action() {
        throw new Error('Action not implemented!')
    }

    update(ownDecision, otherDecision, ownPayoff, otherPayoff) {
        let outcome = new Outcome(ownDecision, otherDecision,
                                  ownPayoff, otherPayoff);
        this.history.push(outcome);
        this.totPayoff += ownPayoff;
        this.payoff += ownPayoff;
        if (this.comment) {
            this.comment(ownDecision, otherDecision, ownPayoff, otherPayoff);
        }
    }

    getOutcome() {
        let len = this.history.length;
        if (!len) return null;
        return this.history[len -1];
    }

    static win() {
        console.log('I am the best!')
    }

    static defeat() {
        console.log('This game is rigged.')
    }

    reset() {
        this.history = [];
        this.payoff = 0;
    }
}

class Outcome {
    constructor(ownAction, otherAction, ownPayoff, otherPayoff) {
        this.ownAction = ownAction;
        this.otherAction = otherAction;
        this.ownPayoff = ownPayoff;
        this.otherPayoff = otherPayoff;
    }
}

module.exports = Strategy;
