// Objective: Create interfaces for the abstract factory pattern.

//product interface
export interface Button {
    click(): void;
}

//product interface
export interface Panel {
    display(): void;
}

//factory interface
export interface GUIFactory {
    createButton(): Button;
    createPanel(): Panel;
}