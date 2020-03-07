const path = require('path');

export const DEFECT = 0;
export const COOPERATE = 1;

export class Tournament {
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
        if (ownAction === DEFECT) {
            if (otherAction === DEFECT) return p.bothDefect;
            return p.temptationToDefect;
        }
        if (otherAction === DEFECT) return p.suckerPayoff;
        return p.bothCooperate;
    }

    addStrategy(filename) {
        let pathToFile = path.join(__dirname, 'strategies', filename);
        try {
            let s = require(pathToFile);
            // Check that the name is unique.
            if (this.strategyNames[s.name]) {
                console.log('Duplicated strategy name: ', s.name);
                return false;
            }
            // Instatiate the object.
            this.strategies.push(StrategyManager.create(s));
            // Map a strategy name to its strategy object.
            this.strategyNames[s.name] = this.strategies.length-1;
        }
        catch(e) {
            console.log('An error occurred loading strategy: ' + filename);
        }
    }

    start(N = 100) {
        let s = this.strategies;
        for (let i=0; i < s.length ; i++) {
            for (let j=0 ; j < s.length; j++) {
                let strategy1 = s[i];
                strategy1.reset();
                let strategy2 = s[j];
                strategy2.reset();
                [ score1, score2 ] =
                this.battleStrategies(N, strategy1, strategy2);

                this.results[i, j] = score1;
                this.results[j, i] = score2;
            }
        }
    }

    battleStrategies(nRounds, strategy1, strategy2) {
        for (let i=0; i < nRounds ; i++) {
            let action1 = strategy1.decide();
            let action2 = strategy2.decide();
            let payoff1 = this.getPayoff(action1, action2);
            let payoff2 = this.getPayoff(action2, action1);
            strategy1.update(action1, action2, payoff1, payoff2);
            strategy2.update(action2, action1, payoff2, payoff1);
        }
    }
}
