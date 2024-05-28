import { Button, Panel } from "./abstractfactory.interface";

//Concrete Products, variant 1
export class  DarkButton implements Button {
    click(): void {
        console.log('Dark button clicked')
    }
   
}

export class DarkPanel implements Panel {
    display(): void {
        console.log('Dark panel displayed')
    }
}


//Concrete Products, variant 2
export class LightButton implements Button {
    click(): void {
        console.log('Light button clicked')
    }
}

export class LightPanel implements Panel {
    display(): void {
        console.log('Light panel displayed')
    }
}