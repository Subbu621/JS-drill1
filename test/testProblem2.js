const inventory = require('../data');
const problem2 = require('../problem2');

const lastCar = problem2(inventory)
if(lastCar){
    console.log(`Last car is a ${lastCar.car_make} ${lastCar.car_model}`);
} else {
    console.log("Inventory is empty.");
} 