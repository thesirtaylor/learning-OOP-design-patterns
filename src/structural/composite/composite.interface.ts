export interface SpaceshipComponent {
    getName(): string;
    getDescription(): string;
    showDetails(indent: string): void;
}