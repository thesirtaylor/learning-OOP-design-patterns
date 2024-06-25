import { CharacterFlyweight } from "./flyweight.interface";

//FlyweightFactory
export class FlyweightFactory {
  private flyweights: { [key: string]: CharacterFlyweight } = {};

  getFlyweight(species: string, affiliation: string): CharacterFlyweight {
    const key = `${species}-${affiliation}`;

    if (!this.flyweights[key]) {
      this.flyweights[key] = new Flyweight(species, affiliation);
    }

    return this.flyweights[key];
  }
}

//Flyweight
export class Flyweight implements CharacterFlyweight {
  constructor(private species: string, private affiliation: string) {}
  getSpecies(): string {
    return this.species;
  }
  getAffiliation(): string {
    return this.affiliation;
  }
}

//Context
//species and affiliation are intrinsic states that is why they are passed to the flyweight
//because they can be memory consuming, that's why they are passed into the flyweight which is only created once in the factory.
//name is extrinsic
export class StarWarsCharacter {
  private flyweight: CharacterFlyweight;

  constructor(
    private name: string,
    private species: string,
    private affiliation: string,
    factory: FlyweightFactory
  ) {
    this.flyweight = factory.getFlyweight(this.species, this.affiliation);
  }

  printDetails(): string{
    return `
    Character: ${this.name}
    Species: ${this.flyweight.getSpecies()}
    Affiliation: ${this.flyweight.getAffiliation()}`
  }
}
