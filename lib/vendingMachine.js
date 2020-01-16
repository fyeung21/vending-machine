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

    viewInventory(view) {
        let inventoryItem = this.inventory[0].qty + ' ' + this.inventory[0].name + ' ' + this.inventory[0].price + ' cents';
        // let inventoryItems = this.inventory.map(() => {
        //     return this.inventory.qty + this.inventory.name
        // });

        if (view === 'view') {
            return inventoryItem;
        }
    }

    refill(refillCommand) {
        let inventoryItem = this.inventory[0].qty + ' ' + this.inventory[0].name + ' ' + this.inventory[0].price + ' cents';
        if (refillCommand === 'refill inventory') {
            return 'refilled, ' + inventoryItem
        } else {
            return 'please input correct command'
        }
    }

    checkPrice(name) {
        for (let i = 0; i < this.inventory.length; i++) {
            let productName = this.inventory[i].name
            if (name === productName) {
                return this.inventory[i].price
            } else {
                return "sorry, no product with this name exists."
            }
        }
    }


    dispense(insertMoney) {
        if (insertMoney >= this.inventory[0].price) {
            const change = insertMoney - this.inventory[0].price
            let dispenseItem = this.inventory[0].qty - 1
            return dispenseItem + ' bags of ' + this.inventory[0].name + ', your change is ' + change;
        } else {
            return "insufficient funds"
        }
    }

    coinChange(insertMoney) {
        const coinNames = ["toonies, loonies, quarters, dimes, nickles"]
        const coinValues = [200, 100, 25, 10, 5]

        let changeValue = insertMoney - this.inventory[0].price
        let coinChange = {}
        let amount

        for (let i = 0; i < coinValues.length; i++) {
            amount = Math.floor(changeValue / coinValues[i]);
            if (amount > 0) {
                coinChange[coinNames[i]] = amount;
                changeValue = changeValue % coinValues[i];
            }
        }
    }

};


module.exports = vendingMachine