const vendingMachine = require('../lib/vendingMachine.js');
let vendingMachine1 = new vendingMachine;
describe('check if vending machine functions like one', () => {
    describe('view inventory', () => {
        it('view inventory on input "view"', () => {
            expect(vendingMachine1.viewInventory('view')).toEqual(this.inventory[i].name + this.inventory[i].price + ' cents each. qty ' + this.inventory[i].qty);
        });
    });
    describe('change inventory: buy 1 bag of chips', () => {
        it('inventory becomes 9 bags of chips', () => {
            expect(vendingMachine1.dispense(500)).toEqual("10 bags of chips");
        });
    });
    describe('change inventory: buy 1 bag of chips', () => {
        it('inventory becomes 9 bags of chips', () => {
            expect(vendingMachine1.dispense(500)).toEqual("10 bags of chips");
        });
    });
    describe('change inventory: buy 1 bag of chips', () => {
        it('inventory becomes 9 bags of chips', () => {
            expect(vendingMachine1.dispense(500)).toEqual("10 bags of chips");
        });
    });
});