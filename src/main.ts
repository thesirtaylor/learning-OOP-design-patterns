import { LightModeFactory } from "./creational/abstract-factory/Factory";
import { GUIFactory } from "./creational/abstract-factory/abstractfactory.interface";
import { CarFactory } from "./creational/factory/Factory";

function Main() {
    const carFactory = new CarFactory();
    const tesla = carFactory.create("Tesla"); 
    console.log(tesla?.drive());
    
    const uiFactory: GUIFactory = new LightModeFactory();
    const button = uiFactory.createButton();
    console.log(button?.click()); 
}

Main();