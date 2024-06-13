import { Cruiser, Fighter, Fleet } from "./Concrete";

const fighter1 = new Fighter('fighter1', 7);
const fighter2  = new Fighter('fighter2', 5);
const cruiser1 = new Cruiser('cruiser1', 10, 100);
const cruiser2 = new Cruiser('cruiser2', 15, 150);

const smallFleet = new Fleet('Small Fleet');
smallFleet.addSpaceship(fighter1);
smallFleet.addSpaceship(cruiser1);

const largeFleet = new Fleet('Large Fleet');
largeFleet.addSpaceship(fighter2);
largeFleet.addSpaceship(cruiser2);
largeFleet.addSpaceship(smallFleet);

console.log(largeFleet.showDetails());
console.log('\n')
console.log(smallFleet.showDetails());