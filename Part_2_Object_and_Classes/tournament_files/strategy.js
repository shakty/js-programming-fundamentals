import { COOPERATE, DEFECT } from 'tournament.js';

class Strategy {

    constructor(name) {
        // Array of history of outcomes.
        this.history = [];

        // Available actions.
        this.DEFECT = DEFECT;
        this.COOPERATE = COOPERATE;

        // Total payoff.
        this.totPayoff = 0;
    }

    action() {
        throw new Error('Action not implemented!')
    }

    update(ownDecision, otherDecision, ownPayoff, otherPayoff) {
        let outcome = new Outcome(ownDecision, otherDecision,
                                  ownPayoff, otherPayoff);
        this.history.push(outcome);
        this.totPayoff += ownPayoff;
        if (this.comment) {
            this.comment(ownDecision, otherDecision, ownPayoff, otherPayoff);
        }
    }

    getOutcome() {
        let len = this.history.length;
        if (!len) return null;
        return this.history[len -1];
    }

    win() {
        console.log('I am the best!')
    }

    defeat() {
        console.log('This game is rigged.')
    }

    reset(all=false) {
        this.history = [];
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
