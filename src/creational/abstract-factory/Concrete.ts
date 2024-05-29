import { Button, Panel } from "./abstractfactory.interface";

//Concrete Products, variant 1
export class  DarkButton implements Button {
    click(): string {
        return 'Dark button clicked'
    }
   
}

export class DarkPanel implements Panel {
    display(): string {
        return 'Dark panel displayed'
    }
}


//Concrete Products, variant 2
export class LightButton implements Button {
    click(): string {
        return 'Light button clicked'
    }
}

export class LightPanel implements Panel {
    display(): string {
        return 'Light panel displayed'
    }
}