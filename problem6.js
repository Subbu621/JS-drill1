// ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.

function bmwAndAudi(inventory){
    let cars = [];
    for(let index = 0;index < inventory.length ;index++){
        if(inventory[index].car_make === "BMW" || inventory[index].car_make === "Audi"){
            cars.push(inventory[index])
        }
    
    }
    return cars;
}
module.exports = bmwAndAudi;