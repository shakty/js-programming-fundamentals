import Strategy from 'strategy.js';

class Random extends Strategy {

    constructor() {
        super();
        this.probability = 0.5;
    }

    action() {
        return Math.random() > this.probability ? this.DEFECT : this.COOPERATE;
    }

    win() {
        console.log('I won, do not mess up with me!');
    }

    defeat() {
        console.log('I lost, I am even more grim.')
    }
}
