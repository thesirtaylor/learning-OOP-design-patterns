import { Mercedes, Tesla } from "./Concrete";
import { CarTypes, Factory } from "./factory.interface";

export class CarFactory implements Factory{
    create(type: string) {
       switch (type) {
        case CarTypes.TESLA:
            return new Tesla();       
        case CarTypes.MERCEDES:
            return new Mercedes();
        default:
            break;
       }
    }
    
}