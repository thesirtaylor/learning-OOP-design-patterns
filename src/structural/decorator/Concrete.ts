import { Comptia } from "./decorator.interface";

abstract class BaseDecorator implements Comptia {
  //base decorator
  protected baseCompt: BaseCompt;

  constructor(baseCompt: BaseCompt) {
    this.baseCompt = baseCompt;
  }

  abstract methodOne(): void;

  abstract methodTwo(): void;
}

export class BaseCompt implements Comptia {
  //base component
  methodOne(): string {
    return "base component methodOne";
  }
  methodTwo(): string {
    return "base component methodTwo";
  }
}

export class LayerOneDecorator extends BaseDecorator {
  //decorator1
  methodOne(): string {
    return this.baseCompt.methodOne();
  }
  methodTwo(): string {
    return `${this.baseCompt.methodTwo()} and layerOne methodTwo`;
  }
}

export class LayerTwoDecorator extends BaseDecorator {
  //decorator2
  methodOne(): string {
    return this.baseCompt.methodOne();
  }
  methodTwo(): string {
    return `${this.baseCompt.methodTwo()} and layerTwo methodTwo`;
  }
  methodThree(): string {
    return `we are giving ${this.baseCompt.constructor.name} a methodThree that it never had before`;
  }
}
