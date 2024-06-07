import { Director } from "./rough/builder.rough";
import { LightModeFactory } from "./creational/abstract-factory/Factory";
import { GUIFactory } from "./creational/abstract-factory/abstractfactory.interface";
import { GameCharacterBuilder } from "./creational/builder/Concrete";
import { CarFactory } from "./creational/factory/Factory";
import { Person } from "./creational/protoype/Concrete";
import { ComponentWithReference, Prototype } from "./rough/prototype.rough";
import { Singleton } from "./creational/singleton/Concrete";
import { SlackAdapter, SlackClient } from "./structural/adapter/Concrete";

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

    const prototype1 = new Prototype();
    prototype1.primitive = 245;
    prototype1.component = new Date();
    prototype1.circularReference = new ComponentWithReference(prototype1);

    console.log({"return prototype": prototype1.circularReference.returnPrototype()});

    const top = Singleton.Instance();
    const middle = Singleton.Instance();
    const bottom = Singleton.Instance();
    console.log(top === bottom)

    top.setConfig(5);
    bottom.setConfig(10);

    console.log(top.getConfig());
    console.log(middle.getConfig());


    const slackClient =  new SlackClient();
    const slackAdapter = new SlackAdapter(slackClient);

    slackAdapter.sendMessage("general", "ari", "Hello World");
}

Main();