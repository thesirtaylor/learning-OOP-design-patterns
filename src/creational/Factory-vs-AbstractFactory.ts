/**
 * Factory Pattern
 * purpose: provides an interface for creating an object but allows subclasses to alter the type of objects that will be created (at run time);
 * it is all about creating single a object.
 * 
 * structure: typically involces a single method with different implementations or overrides, 
 * returning different object types based on conditions or parameters.
 * 
 * 
 * example: a factory that creates different types of cars based on the input 
 * [a pay method that initiates different payment methods based on the input(credit card, paypal, etc)]
 * 
 * 
 * 
 * 
 * Abstract Factory Pattern
 * purpose: provides an interface for creating families of related or dependent objects without specifying their concrete classes;
 * it is all about creating multiple objects.
 * 
 * structure: focuses on multiple factory methods, with each method responsible for creating a different type of object.
 * these methods return objects that conform to a common interface.(they are usually grouped into families[a single class])
 * 
 * example: Revisiting the UI toolkit from earlier, the “Dark Mode Factory” can produce dark-themed buttons, 
 * panels, and windows, while the “Light Mode Factory” produces light-themed counterparts
 * 
 * 
 * 
 * In essence, the Factory pattern is about creating a single object, while the Abstract Factory is about creating multiple(or family of related) objects.
 */