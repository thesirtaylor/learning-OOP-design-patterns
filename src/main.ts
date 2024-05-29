import { LightModeFactory } from "./creational/abstract-factory/Factory";
import { GUIFactory } from "./creational/abstract-factory/abstractfactory.interface";
import { GameCharacterBuilder } from "./creational/builder/Concrete";
import { CarFactory } from "./creational/factory/Factory";

function Main() {
    const carFactory = new CarFactory();
    const tesla = carFactory.create("Tesla"); 
    console.log(tesla?.drive());
    
    const uiFactory: GUIFactory = new LightModeFactory();
    const button = uiFactory.createButton();
    console.log(button?.click()); 


    const builder: GameCharacterBuilder = new GameCharacterBuilder();
    builder.setName("Ariana");
    builder.setWeapon("Bow");
    builder.setArmor("Shield");
    builder.setClass("Ranger");
    const character = builder.build();
    console.log(character.describe());
}

Main();