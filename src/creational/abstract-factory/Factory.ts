import { DarkButton, DarkPanel, LightButton, LightPanel } from "./Concrete";
import { Button, GUIFactory, Panel } from "./abstractfactory.interface";

export class DarkModeFactory implements GUIFactory{
    createButton(): Button {
        return new DarkButton();
    }
    createPanel(): Panel {
        return new DarkPanel();
    }
}

export class LightModeFactory implements GUIFactory{
    createButton(): Button {
        return new LightButton();
    }
    createPanel(): Panel {
        return new LightPanel();
    }
}