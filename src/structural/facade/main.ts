import { HomeAutomationFacade } from "./Concrete";
import { Light, Security } from "./facade.interface";

const light = new Light();
const security = new Security();

const facade = new HomeAutomationFacade(light, security);

console.log("Good Morning: ", facade.goodMorning());
console.log("Good Night: ", facade.goodNight());