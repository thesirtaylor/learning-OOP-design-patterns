//define complex subsystems and their interfaces

interface LightSystem {
  turnOn(): string;
  turnOff(): string;
}

interface SecuritySystem {
  arm(): string;
  disarm(): string;
}

//implement complex subsystems
export class Light implements LightSystem {
  turnOn(): string {
    return "Turning on the light";
  }
  turnOff(): string {
    return "Turning off the light";
  }
}

export class Security implements SecuritySystem {
  arm(): string {
    return "Arming the security system";
  }
  disarm(): string {
    return "Disarming the security system";
  }
}
