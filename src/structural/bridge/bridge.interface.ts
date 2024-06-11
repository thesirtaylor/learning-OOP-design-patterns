export abstract class UI { //abstraction layer

    //in the next 4 lines is where the bridging really happens
    //the abstraction layer has a reference to the implementation layer
    //we can easily create new implementations of the backend and the UI without changing the existing code
    //by just implementing the abstract classes Backend and UI
    protected backend: Backend;
    constructor(backend: Backend) {
        this.backend = backend;
    }

    abstract render(): void;
}

export abstract class Backend { //implementation layer
    abstract getData(): string;
}