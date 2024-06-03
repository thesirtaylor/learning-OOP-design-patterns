import { prototype } from "events";

export class Prototype {
    public primitive: any;
    public component!: object;
    public circularReference!: ComponentWithReference;

    clone(): this{
        const clone = Object.create(this);
        clone.component = Object.create(this.component);
        clone.circularReference = {
            ...this.circularReference,
            prototype: {...this},
        }

        return clone;
    }
}

export class ComponentWithReference {
    public prototype;

    constructor(prototype: Prototype) {
        this.prototype = prototype;
    }

    returnPrototype(): Prototype {
        return this.prototype;
    }
}