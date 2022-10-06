//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class sedan extends vehicle {
    constructor(make, model, year, make, color, milage){
        super(make, model, year, make, color, milage)
        this. maxPassengers = 5;
        this. passenger = 0;
        this. numberOfWheels = 4;
        this. maximumSpeed = 160;
        this. fuel = 10;
        this. scheduleService = false;
    }

        loadPassenger (num) {
            if ((num + this.passengers) <= this.maxPassengers) {
                this.passenger = num;
                console.log('Room available');
             } else {
                 console.log('Car is full');
             }
        
        }
    

        start() {
            if(this.fuel > 0) {
                console.log('start successful');
                return this.start == true
            } else {
                console.log('no fuel');
                return this.start == false;
            }
        }

        scheduleService(mileage) {
            if (this.mileage > 30000) {
                this.scheduleService == true;
                console.log('Time for maintenance');
            } else {
                console.log('Maintenance not required');
            }
        }
    
}
