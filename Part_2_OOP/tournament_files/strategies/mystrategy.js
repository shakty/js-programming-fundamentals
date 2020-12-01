const Strategy = require('../strategy.js');

class MyCoolStrategy extends Strategy {

    action() {
        let history = this.history;
        // Number of moves played.
        let numMoves = this.history.length;

        let countCoop = 0;
        for (let i = 0; i < this.history.length; i++) {
            if (this.history[i].otherAction === this.COOPERATE) {
                countCoop++;
            }
        }
        if (this.history.length === 0) {
            if (Math.random() > 0.5) return this.COOPERATE;
            else return this.DEFECT;
        }
        if (countCoop/this.history.length >= 0.5) {
            return this.COOPERATE;
        }
        else {
            return this.DEFECT;
        }


        // The last element of the history array (object of type Outcome).
        // ownAction
        // otherAction
        // ownPayoff
        // otherPayoff
        // Second-last history round.
        this.history[-2];
        let lastOutcome = this.getOutcome();
        if (lastOutcome === undefined) return this.COOPERATE;
        if (lastOutcome.otherAction === this.COOPERATE) return this.COOPERATE;
        return this.DEFECT;
    }

    static win() {
        console.log('I am a REAALLY cool strategy');
    }

    static defeat() {
        console.log('Naaaah')
    }
}

module.exports = MyCoolStrategy;
