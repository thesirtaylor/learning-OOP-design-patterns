import { BaseCompt, LayerOneDecorator, LayerTwoDecorator } from "./Concrete";

const compObject = new BaseCompt();

console.log('instance of base component created :'+compObject+'\n');
console.log('apply layerOne decorator')

const layerOne = new LayerOneDecorator(compObject);
console.log('layerOne decorator applied to base component\n');
console.log(layerOne.methodOne());
console.log(layerOne.methodTwo());


console.log('\napply layerTwo decorator');
const layerTwo = new LayerTwoDecorator(compObject);
console.log('layerTwo decorator applied to base component\n');
console.log(layerTwo.methodOne());
console.log(layerTwo.methodTwo());
console.log(layerTwo.methodThree());
