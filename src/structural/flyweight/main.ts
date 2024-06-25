import { FlyweightFactory, StarWarsCharacter } from "./Concrete";


//client
const factory = new FlyweightFactory();

const luke = new StarWarsCharacter("Luke Skywalker", "Human", "Rebel Alliance", factory);
const vader = new StarWarsCharacter("Darth Vader", "Human", "Galactic", factory);

console.log(luke.printDetails());
console.log(vader.printDetails());