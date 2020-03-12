const Tournament = require('./tournament.js');

class Strategy {

    constructor() {

        // Array of history of outcomes.
        this.history = [];

        // Available actions.
        this.DEFECT = Tournament.DEFECT;
        this.COOPERATE = Tournament.COOPERATE;

        // Payoff of the strategy.
        this.payoff = 0;

        // Magic trick.
        // Set the name to the class name (for extending classes).
        this.name = this.constructor.name;
    }

    /**
     * Abstract method, must return either COOPERATE or DEFECT
     *
     * COOPERATE
     * DEFECT
     */
    action() {
        throw new Error('Action not implemented!')
    }

    /**
     * TODO:
     *
     */
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

    /**
     * TODO:
     *
     */
    getOutcome() {
        let len = this.history.length;
        if (!len) return null;
        return this.history[len -1];
    }

    /**
     * TODO:
     *
     */
    static win() {
        console.log('I am the best!')
    }

    /**
     * TODO:
     *
     */
    static defeat() {
        console.log('This game is rigged.')
    }

    /**
     * TODO:
     *
     */
    reset() {
        this.history = [];
        this.payoff = 0;
    }
}

/**
 * TODO:
 *
 */
class Outcome {
    constructor(ownAction, otherAction, ownPayoff, otherPayoff) {
        this.ownAction = ownAction;
        this.otherAction = otherAction;
        this.ownPayoff = ownPayoff;
        this.otherPayoff = otherPayoff;
    }
}

module.exports = Strategy;
