import { SpaceshipComponent } from "./composite.interface";

export class Fighter implements SpaceshipComponent {
  constructor(private name: string, private capacity: number) {}

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return `${this.constructor.name} jet with capacity of ${this.capacity} men`;
  }

  showDetails(indent: string = ""): void {
    console.log(`${this.getDescription()}`);
  }
}

export class Cruiser implements SpaceshipComponent {
  constructor(
    private name: string,
    private capacity: number,
    private shieldLevel: number
  ) {}
  getName(): string {
    return this.name;
  }
  getDescription(): string {
    return `${this.constructor.name} jet with capacity of ${this.capacity} men, and ${this.shieldLevel} shield level`;
  }
  showDetails(indent: string = ""): void {
    console.log(` ${this.getDescription()}`);
  }
}

//composite class
export class Fleet implements SpaceshipComponent {
  private spaceships: SpaceshipComponent[] = [];

  constructor(private name: string) {}
  getName(): string {
    return this.name;
  }
  getDescription(): string {
    return `${this.name} fleet cotaining ${this.spaceships.length} ships`;
  }

  addSpaceship(spaceship: SpaceshipComponent): void {
    this.spaceships.push(spaceship);
  }

  removeSpaceship(spaceship: SpaceshipComponent): void {
    this.spaceships = this.spaceships.filter((s) => s !== spaceship);
  }

  showDetails(indent: string = ""): void {
    // console.log(`${indent}${this.getName()} (${this.getDescription()})`);
    for (const spaceship of this.spaceships) {
      spaceship.showDetails(indent + "  ");
    }
  }
}
