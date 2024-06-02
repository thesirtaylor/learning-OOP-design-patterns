import { Cloneable } from "./prototype.interface";

export class Person implements Cloneable {

    constructor(private planet: string, private name: string, private dimension: string) {}

    returnName(): string {
        return this.name;
    }
    
    clone(): Cloneable {
        return new Person(this.planet, this.name, this.dimension);
    }
    
}