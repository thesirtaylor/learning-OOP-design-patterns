import { Car } from "./factory.interface";

export class Tesla implements Car {
    drive(): string {
        return `driving a self driven car`;
    }
    model = "Testla";
}

export class Mercedes implements Car {
    model = "Mercedes";
    drive(): string {
        return `driving a high class German machine`;
    }
    
}