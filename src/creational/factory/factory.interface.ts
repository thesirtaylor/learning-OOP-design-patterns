export interface Car {
    model: string;
    drive(): string;
}

export interface Factory {
    create(type: string): void;
}

export enum CarTypes{
    TESLA = "Tesla",
    MERCEDES = "Mercedes",
    Tesla = "Tesla"
}