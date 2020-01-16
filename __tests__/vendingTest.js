const vendingMachine = require('../lib/vendingMachine.js');
let vendingMachine1 = new vendingMachine;
describe('check if vending machine functions like one', () => {

    describe('view inventory', () => {
        it('view inventory on command', () => {
            expect(vendingMachine1.viewInventory('view')).toEqual("10 chips 250 cents");
        });
    });
    // describe('view inventory', () => {
    //     for (let i = 0; i < this.inventory.length; i++) {
    //         it('view inventory on input "view"', () => {
    //             expect(vendingMachine1.viewInventory('view')).toEqual(this.inventory[i].name + this.inventory[i].price + ' cents each. qty ' + this.inventory[i].qty);
    //         });
    //     }
    // });
    describe('buy 1 bag of chips', () => {
        it('insert more than price', () => {
            expect(vendingMachine1.dispense(500)).toEqual("9 bags of chips, your change is 250");
        });
        it('insert less than price', () => {
            expect(vendingMachine1.dispense(100)).toEqual("insufficient funds");
        });
    });
    describe('refill inventory', () => {
        it('correct command with refill inventory', () => {
            const refilled = 'refilled, ' + inventory
            expect(vendingMachine1.refill('refill inventory')).toEqual(refilled);
        });
        it('incorrect command with refill inventory', () => {
            expect(vendingMachine1.refill("restock")).toEqual("please input correct command");
        });
    });
    describe('return change in coins', () => {
        it('dispense change in coins', () => {
            expect(vendingMachine1.coinChange('450')).toEqual("2 toonies 2 quarters");
        });
    });
    describe('when checking price for specific item', () => {
        it('check price for chips', () => {
            expect(vendingMachine1.checkPrice("chips")).toEqual(250);
        });
        it('check price for pop', () => {
            expect(vendingMachine1.checkPrice("pop")).toEqual(150);
        });
        it('false name', () => {
            expect(vendingMachine1.checkPrice('chocolate')).toEqual("sorry, no product with this name exists.");
        });
    });
});