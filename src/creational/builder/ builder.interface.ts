export interface CharacterBuilder {
    setName(name: string): void;
    setClass(charClass: string): void;
    setWeapon(weapon: string): void;
    setArmor(armor: string): void;
    build(): GameCharacterInterface;
}


export interface GameCharacterInterface {
    name?: string;
    charClass?: string;
    weapon?: string;
    armor?: string;
    describe(): string;
}