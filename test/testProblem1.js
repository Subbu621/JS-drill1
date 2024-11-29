
const inventory = require('../data');
const problem1 = require('../problem1');
const car = problem1(inventory);

if (car) {
    console.log(`Car 33 is a ${car.car_year} ${car.car_make} ${car.car_model}`);
} else {
    console.log("Car with ID 33 not found.");
}
