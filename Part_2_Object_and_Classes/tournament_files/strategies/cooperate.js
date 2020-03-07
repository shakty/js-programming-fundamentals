import Strategy from 'strategy.js';

class Cooperate extends Strategy {

    constructor() {
        super();
    }

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
