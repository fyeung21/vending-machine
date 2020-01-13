class vendingMachine {
    constructor() {
        this.inventory = [
            {
                id: 0,
                name: "chips",
                price: 250,
                qty: 10
            },
            {
                id: 1,
                name: "pop",
                price: 150,
                qty: 10
            },
            {
                id: 2,
                name: "chocolate bar",
                price: 100,
                qty: 10
            },
            {
                id: 3,
                name: "granola bar",
                price: 125,
                qty: 10
            }
        ]
    }
};


module.exports = vendingMachine