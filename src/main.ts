import { CarFactory } from "./creational/factory/Factory";

function Main() {
    console.log('Hello World');
    const carFactory = new CarFactory();
    const tesla = carFactory.create("Tesla"); 
    console.log(tesla?.drive());
    
}

Main();