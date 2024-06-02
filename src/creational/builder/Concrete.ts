import { CharacterBuilder, GameCharacterInterface } from "./ builder.interface";

class GameCharacter implements GameCharacterInterface {
  name?: string;
  charClass?: string;
  weapon?: string;
  armor?: string;
  describe(): string {
    return `${this.name} is a ${this.charClass} with ${this.weapon} and ${this.armor}`;
  }
}

export class GameCharacterBuilder implements CharacterBuilder {
  private character: GameCharacterInterface;
  constructor() {
    this.character = new GameCharacter();
  }
  setWeapon(weapon: string): void {
    this.character.weapon = weapon;
  }
  setArmor(armor: string): void {
    this.character.armor = armor;
  }
  build(): GameCharacter {
    return this.character;
  }
  setName(name: string): void {
    this.character.name = name;
  }
  setClass(charClass: string): void {
    this.character.charClass = charClass;
  }
}
