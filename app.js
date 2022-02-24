// Part 1 - Create a class for vehicle
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return console.log("Beep");
    }

    toString() {
        const { make, model, year } = this;
        return console.log(`The vehicle is a ${make} ${model} from ${year}`);
    }
}


// Part 2- Create a class for Car

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

// Part 3 - Create a class for Motorcycle

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine() {
        return console.log("VROOM!!");
    }
}

// Part 4 - Create class for Garage

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(newVehicle) {
        const garage = this.vehicles;
        if (typeof (newVehicle) !== 'object') {
            return console.log('Only vehicles are allowed in here!');
        }
        if (garage.length < this.capacity) {
            garage.push(newVehicle);
            console.log('Vehicle added!');
        }
        else {
            return console.log("Sorry, we're full");
        }

    }
}

// All tests from part Four executed below
let garage = new Garage(2);
console.log(garage.vehicles); // []
garage.add(new Car("Hyundai", "Elantra", 2015)); // "Vehicle added!"
console.log(garage.vehicles); // [Car]
garage.add("Taco"); // "Only vehicles are allowed in here!"
garage.add(new Motorcycle("Honda", "Nighthawk", 2000)); // "Vehicle added!"
console.log(garage.vehicles); // [Car, Motorcycle]
garage.add(new Motorcycle("Honda", "Nighthawk", 2001)); // "Sorry, we're full."