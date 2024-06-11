interface Builder {
    setSeats(seats: number): this;
    setEngine(engine: string): this;
}

class VehicleBuilder implements Builder {
    private vehicle = new Vehicle();
    setSeats(seats: number): this {
        this.vehicle.seats = seats;
        return this;
    }
    setEngine(engine: string): this {
        this.vehicle.engine = engine;
        return this;
    }

    build(): Vehicle {
        return this.vehicle;
    }

}

class Vehicle {
    seats!: number;
    engine!: string;
}
export class Director {
    constructor() { }
    vehicleBuilder = new VehicleBuilder();
    
    buildVehicle(seat: number, engine: string) {
        return this.vehicleBuilder.setSeats(seat).setEngine(engine);
    }
    
    returnVehicle(): Vehicle {
        return this.vehicleBuilder.build();
    }
}
