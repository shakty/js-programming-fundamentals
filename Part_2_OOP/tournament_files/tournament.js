const path = require('path');

class Tournament {

    // Codes for defection and cooperation.
    // Note: the grumpy-old-linter may show you red dot, because static
    // properties are a new feature, and it does not want to accept them yet.
    static DEFECT = 0;
    static COOPERATE = 1;

    // Initialize the tournament instance.
    // It is called once for every new object of type Tournament.
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
            this.payoffMatrix = options.payoffMatrix;
        }

        // Strategies (initialized later).
        this.strategies = [];
        this.strategyNames = {};

        // If TRUE, more output is printed to console.
        // This is a condensed way of saying the following:
        // If options.verbose is defined and truthy, transform it into
        // the boolean true (with the double negation) else false.
        this.verbose = !!options.verbose || false;

        // The payoff results of each strategy against all others
        this.results = [];

        // The total payoff of each strategy in a tournament
        this.resultsByStrategy = [];
    }

    /**
     * Return the payoffs for a given pair of actions, for the first player
     *
     * @param {number} Action player 1
     * @param {number} Action player 2
     *
     * @return {number} The payoff for player 1
     *
     * Tournament.COOPERATE
     * Tournament.DEFECT
     * payoffMatrix
     */
    getPayoff(ownAction, otherAction) {
        let p = this.payoffMatrix;
        if (ownAction === Tournament.DEFECT) {
            if (otherAction === Tournament.DEFECT) return p.bothDefect;
            return p.temptationToDefect;
        }
        if (otherAction === Tournament.DEFECT) return p.suckerPayoff;
        return p.bothCooperate;
    }

    /**
     * Loads a strategy from file and adds it to the pool
     *
     * The name of the stratefy (not the file name!) must be unique
     *
     * @param {string} filename The name of the strategy. All strategies
     *   are looked up inside the strategies/ folder.
     */
    addStrategy(filename) {
        let pathToFile = path.join(__dirname, 'strategies', filename);
        // In case the user specified the wrong file.
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

    /**
     * Play two strategies against each other for a fixed number of rounds
     *
     * Each calls resets the array of results.
     *
     * @param {number} N Optional. The number of rounds for the tournament.
     *   Default: 1000
     */
    start(N = 1000) {

        // Reset the array of results.
        this.results = [];

        if (this.verbose) {
            coolPrint('Tournament begins!');
            coolPrint('Max Points: ' +
            (N * this.payoffMatrix.temptationToDefect));

            coolPrint('Battle Results: ');
        }

        let s = this.strategies;
        for (let i=0; i < s.length ; i++) {
            // Instatiate a new strategy object as the main player of the round.
            let strategy1 = new s[i]();
            // Initialize the payoff count of the strategy to zero.
            this.resultsByStrategy[i] = 0;
            // Initialize a new row of results against each other strategy.
            this.results[i] = new Array(s.length);
            for (let j=0 ; j < s.length; j++) {

                // Instatiate a new strategy object as the opponent.
                let strategy2 = new s[j]();

                // Reset the old one, so that the payoff count goes to
                // zero and the previous history is erased.
                strategy1.reset();

                // Battle!
                this.battleStrategies(N, strategy1, strategy2);

                // Store the results.
                this.results[i][j] = strategy1.payoff;
                this.resultsByStrategy[i] += strategy1.payoff;
            }
        }
    }

    /**
     * Play two strategies against each other for a fixed number of rounds
     *
     * @param {number} nRounds The number of rounds for the tournament
     * @param {Strategy} strategy1 The first strategy
     * @param {Strategy} strategy2 The second strategy
     */
    battleStrategies(nRounds, strategy1, strategy2) {
        for (let i=0; i < nRounds ; i++) {
            // Collect both actions.
            let action1 = strategy1.action();
            let action2 = strategy2.action();
            // Compute both payoffs.
            let payoff1 = this.getPayoff(action1, action2);
            let payoff2 = this.getPayoff(action2, action1);
            // Inform the strategies about the outcome of the round.
            strategy1.update(action1, action2, payoff1, payoff2);
            strategy2.update(action2, action1, payoff2, payoff1);
        }
        if (this.verbose) {
            // The \t is a TAB character, it is used to roughly align
            // the strings.
            let str =`${strategy1.name} vs ${strategy2.name}:\t`;
            if (str.length < 17) str += '\t';
            str += `${strategy1.payoff} - ${strategy2.payoff}`;
            console.log(str);
            console.log();
        }
    }

    /**
     * Prints the name of the winner with the number of points
     *
     * If verbose is TRUE, the strategies comment the outcome
     *
     * @see verbose
     */
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

// Helper functions.

// These are private functions. JavaScript has encapsulation after all!
// None outside of this file can access them.

/**
 * Prints a string with asterisks above and below it
 *
 * It works nicely as long as the string is short.
 *
 * @param {string} txt The text to print
 */
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
