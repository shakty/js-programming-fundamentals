const Strategy = require('../strategy.js');

class Cooperate extends Strategy {

    action() {
        return this.COOPERATE;
    }

    win() {
        console.log('When you cooperate, you win, like my mama told me.')
    }

    defeat() {
        console.log('It\'s all right. Cooperation is a principle.')
    }
}

module.exports = Cooperate;
