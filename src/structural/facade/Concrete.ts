//implement the Facade

import { Light, Security } from "./facade.interface";

export class HomeAutomationFacade {
  constructor(private lightSystem: Light, private securitySystem: Security) {}

  goodMorning(){
    //turn on lights and disarm security
    const light = this.lightSystem.turnOn();
    const security = this.securitySystem.disarm();

    return `${light} and ${security}`;
  }

  goodNight(){
    //turn off lights and arm security
    const light = this.lightSystem.turnOff();
    const security = this.securitySystem.arm();

    return `${light} and ${security}`;
  }
}
