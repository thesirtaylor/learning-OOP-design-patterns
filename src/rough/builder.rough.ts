interface Builder {
    setSeats(seats: number): this;
    setEngine(engine: string): this;
}

class CarBuilder implements Builder {
    private car = new Car();
    setSeats(seats: number): this {
        this.car.seats = seats;
        return this;
    }
    setEngine(engine: string): this {
        this.car.engine = engine;
        return this;
    }

    build(): Car {
        return this.car;
    }

}

class MotorcycleBuilder implements Builder {
    private motorcycle = new Motorcycle();
    setSeats(seats: number): this {
        this.motorcycle.seats = seats;
        return this;
    }
    setEngine(engine: string): this {
        this.motorcycle.engine = engine;
        return this;
    }

    build(): Motorcycle {
        return this.motorcycle;
    }

}

class Car {
    seats: number = 0;
    engine: string = '';
}

class Motorcycle {
    seats: number = 0;
    engine: string = '';
}


export class Director {
    constructor() { }
    carBuilder = new CarBuilder();
    motorcycleBuilder = new MotorcycleBuilder();
    
    buildCar(seat: number, engine: string) {
        return this.carBuilder.setSeats(seat).setEngine(engine);
    }
    
    returnCar(): Car {
        return this.carBuilder.build();
    }

    buildMotorcycle(engine: string) {
        return this.motorcycleBuilder.setSeats(1).setEngine(engine);
    }

    returnMotorcycle(): Motorcycle {
        return this.motorcycleBuilder.build();
    }

}
