export class Singleton {
  static instance: Singleton;
  private instrument!: number;
  private constructor() {}

  static Instance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  setConfig(value: number) {
    this.instrument = value;
  }

  getConfig() {
    return this.instrument;
  }
}
