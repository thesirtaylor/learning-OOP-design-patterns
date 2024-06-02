import { Director } from "./rough/builderRough";
import { LightModeFactory } from "./creational/abstract-factory/Factory";
import { GUIFactory } from "./creational/abstract-factory/abstractfactory.interface";
import { GameCharacterBuilder } from "./creational/builder/Concrete";
import { CarFactory } from "./creational/factory/Factory";
import { Person } from "./creational/protoype/Concrete";

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


    const director = new Director();
    const buildFerrari = director.buildCar(2, 'V8').build();
    const buildSuzuki = director.buildMotorcycle('V2').build();

    console.log(buildFerrari);
    console.log(buildSuzuki)

    const rickSanches = new Person("Earth", "Rick", "c137");

    console.log({rickSanches});
    const cloneRickSanches = rickSanches.clone();
    console.log('Rick Sanches Clone')
    console.log(cloneRickSanches)
}

Main();