const path = require('path');

class Tournament {

    static DEFECT = 0;
    static COOPERATE = 1;

    constructor(options = {}) {

        // Initialize the payoff matrix.
        if (!options.payoffMatrix) {
            // Payoff matrix as in Axelrod (1984) The Evolution of Cooperation.
            // Notice: 3+3 > 5+0
            this.payoffMatrix = {
                bothDefect: 1,
                bothCooperate: 3,
                temptationToDefect: 5,
                suckerPayoff: 0
            };
        }
        else {
            this.payoffMatrix = optpayoffMatrix;
        }

        // Strategies (initialized later).
        this.strategies = [];
        this.strategyNames = {};

        this.results = [];
    }

    getPayoff(ownAction, otherAction) {
        let p = this.payoffMatrix;
        if (ownAction === this.DEFECT) {
            if (otherAction === this.DEFECT) return p.bothDefect;
            return p.temptationToDefect;
        }
        if (otherAction === this.DEFECT) return p.suckerPayoff;
        return p.bothCooperate;
    }

    addStrategy(filename) {
        let pathToFile = path.join(__dirname, 'strategies', filename);
        try {
            debugger
            let strategy = require(pathToFile);
            // Check that the name is unique.
            if (this.strategyNames[strategy.name]) {
                console.log('Duplicated strategy name: ', strategy.name);
                return false;
            }

            // Instatiate the object.
            strategy = new strategy();

            this.strategies.push(strategy);
            // Map a strategy name to its strategy object.
            this.strategyNames[strategy.name] = this.strategies.length-1;
        }
        catch(e) {
            console.log('An error occurred loading strategy: ' + filename);
            throw(e);
        }
    }

    start(N = 100) {
        let s = this.strategies;
        for (let i=0; i < s.length ; i++) {
            let strategy1 = s[i];
            for (let j=0 ; j < s.length; j++) {
                let strategy2 = s[j];
                strategy1.reset();
                strategy2.reset();
                this.battleStrategies(N, strategy1, strategy2);

                this.results[i, j] = strategy1.tmpScore;
                this.results[j, i] = strategy1.tmpScore;
            }
        }
    }

    battleStrategies(nRounds, strategy1, strategy2) {
        for (let i=0; i < nRounds ; i++) {
            let action1 = strategy1.action();
            let action2 = strategy2.action();
            let payoff1 = this.getPayoff(action1, action2);
            let payoff2 = this.getPayoff(action2, action1);
            strategy1.update(action1, action2, payoff1, payoff2);
            strategy2.update(action2, action1, payoff2, payoff1);
        }
    }
}

module.exports = Tournament;
