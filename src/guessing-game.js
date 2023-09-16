class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.middle = Math.round((this.max - this.min) / 2 + this.min)
    }

    guess() {
        return this.middle;
    }

    lower() {
        this.max = this.middle;
        this.middle = Math.round((this.max - this.min) / 2 + this.min);
    }

    greater() {
        this.min = this.middle;
        this.middle = Math.round((this.max - this.min) / 2 + this.min);
    }
}

module.exports = GuessingGame;
