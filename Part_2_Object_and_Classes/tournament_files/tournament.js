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

        // If TRUE, more output is printed to console.
        // This is a condensed way of saying the following:
        // If options.verbose is defined and truthy, transform it into
        // the boolean true (with the double negation) else false.
        this.verbose = !!options.verbose || false;

        this.results = [];
        this.resultsByStrategy = [];
    }

    // Return the payoffs for a given pair of actions, for the first player.
    getPayoff(ownAction, otherAction) {
        let p = this.payoffMatrix;
        if (ownAction === Tournament.DEFECT) {
            if (otherAction === Tournament.DEFECT) return p.bothDefect;
            return p.temptationToDefect;
        }
        if (otherAction === Tournament.DEFECT) return p.suckerPayoff;
        return p.bothCooperate;
    }

    // Adds a strategy to the pool.
    addStrategy(filename) {
        let pathToFile = path.join(__dirname, 'strategies', filename);
        try {
            let strategy = require(pathToFile);
            // Check that the name is unique.
            if (this.strategyNames[strategy.name]) {
                console.log('Duplicated strategy name: ', strategy.name);
                return false;
            }
            this.strategies.push(strategy);
            // Map a strategy name to its strategy object.
            this.strategyNames[strategy.name] = this.strategies.length-1;
            if (this.verbose) console.log('Strategy added: ' + strategy.name);
        }
        catch(e) {
            console.log('An error occurred loading strategy: ' + filename);
            throw(e);
        }

    }

    // Start the tournament
    start(N = 1000) {
        // Rest the array of results.
        this.results = [];

        if (this.verbose) {
            coolPrint('Tournament begins!');
            coolPrint('Max Points: ' +
            (N * this.payoffMatrix.temptationToDefect));

            coolPrint('Battle Results: ');
        }

        let s = this.strategies;
        for (let i=0; i < s.length ; i++) {
            let strategy1 = new s[i]();
            this.resultsByStrategy[i] = 0;
            // Initialize a new row of results.
            this.results[i] = new Array(s.length);
            for (let j=0 ; j < s.length; j++) {                
                let strategy2 = new s[j]();
                strategy1.reset();
                strategy2.reset();

                this.battleStrategies(N, strategy1, strategy2);
                // Save results.
                this.results[i][j] = strategy1.payoff;
                this.resultsByStrategy[i] += strategy1.payoff;
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
        if (this.verbose) {
            let str =`${strategy1.name} vs ${strategy2.name}:\t`;
            if (str.length < 17) str += '\t';
            str += `${strategy1.payoff} - ${strategy2.payoff}`;
            console.log(str);
            console.log();
        }
    }

    declareWinner() {
        // Find the index of the strategy with most points.
        let winner = this.resultsByStrategy.reduce((iMax, x, i, arr) => {
            return x > arr[iMax] ? i : iMax;
        }, 0);

        let str = 'The winner is ' + this.strategies[winner].name +
        ' with ' + this.resultsByStrategy[winner] + ' points!';
        coolPrint(str);

        if (this.verbose) {
            console.log('The winner says:')
            this.strategies[winner].win();
            if (this.strategies.length < 2) return;
            console.log('\nThe losers say:\n');
            this.strategies.forEach((strategy, i) => {
                if (i !== winner) {
                    console.log(strategy.name + ' says:');
                    strategy.defeat();
                }
            });
        }
    }
}

function coolPrint(txt) {
    let len = txt.length;
    let stars = '';
    for (let i = 0 ; i < len ; i++) {
        stars += '*';
    }
    console.log('\n' + stars);
    console.log(txt);
    console.log(stars + '\n');
}

// Exports the class outside of the file.
module.exports = Tournament;
