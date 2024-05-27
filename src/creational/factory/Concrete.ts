import { Car } from "./factory.interface";

export class Tesla implements Car {
    drive(): void {
        console.log(`driving a self driven car`);
    }
    model = "Testla";
}

export class Mercedes implements Car {
    model = "Mercedes";
    drive(): void {
        console.log(`driving a high class German machine`);
    }
    
}