const path = require('path');

class Tournament {

    // Codes for defection and cooperation.
    static DEFECT = 0;
    static COOPERATE = 1;

    // Initialize the tournament instance.
    // It is called once for every new object of type tournament.
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

    // Return the payoffs for a given pair of actions, for the first player.
    getPayoff(ownAction, otherAction) {
        let p = this.payoffMatrix;
        if (ownAction === this.DEFECT) {
            if (otherAction === this.DEFECT) return p.bothDefect;
            return p.temptationToDefect;
        }
        if (otherAction === this.DEFECT) return p.suckerPayoff;
        return p.bothCooperate;
    }

    // Adds a strategy to the pool.
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

    // Start the tournament
    start(N = 100) {
        // Rest the array of results.
        this.results = [];

        let s = this.strategies;
        for (let i=0; i < s.length ; i++) {
            let strategy1 = s[i];
            // Initialize a new row of results.
            this.results[i] = new Array(s.length);
            for (let j=0 ; j < s.length; j++) {
                debugger
                let strategy2 = s[j];
                strategy1.reset();
                strategy2.reset();
                this.battleStrategies(N, strategy1, strategy2);
                // Save results.
                this.results[i, j] = strategy1.payoff;
            }
        }
    }

    // Play two strategies against each other for a fixed number of rounds
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

    set ve(verbose=true) {
        this.verbose = verbose;
    }
}

// Exports the class outside of the file.
module.exports = Tournament;
