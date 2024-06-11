import { Backend, UI } from "./bridge.interface";

/**
 * instead of having maybe a giant UI class with a bunch of if statements to check which platform we are on
 * or a bunch of different classes for each platform, we just use the bridge pattern to separate the UI from the backend, so that we can easily create new implementations of the backend and the UI without changing the existing code
 */
export class AndroidUI extends UI {
  render(): void {
    const data = this.backend.getData();
    console.log(`Rendering data: ${data} on Android UI`);
  }
}

export class iOSui extends UI {
  render(): void {
    const data = this.backend.getData();
    console.log(`Rendering data: ${data} on iOS UI`);
  }
}

export class MobileBackend implements Backend {
  getData(): string {
    return "Method not implemented.";
  }
}

const iPhoneUI = new iOSui(new MobileBackend());
iPhoneUI.render();