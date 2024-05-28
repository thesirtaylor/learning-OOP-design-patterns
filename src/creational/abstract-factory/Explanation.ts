/**
 * https://medium.com/@phdmeyildiz/abstract-factory-pattern-in-typescript-8c3c5b71206d
 * Abstract Factory Explanation
 * 
 * It is a creational pattern that provides an interface to create families of related or dependent objects without specifying their concrete classes
 * 
 * abstract factory allows a system to be independent of how its objects are created, composed, and represented
 * it involves multiple factory methods(methods that create objects)[one for each object type to be created] and the return type of the method is an interface
 * 
 * in abstract factory when you need to extend the system to create objects that conform to a new criterion (interface), 
 * you do not need to modify the existing code you only need to add a new factory methods
 * 
 * usable
 * 1. when a system should be independent of how its objects are created, composed, and represented
 * 2. when the system needs to be configured with one of multiple families of objects
 * 3. when a family of related product objects is designed to be used together, and you need to enforce this constraint
 * 4. when you want to provide a class library of products, and reveal just their interfaces, not their implementations
 */

/**
 * step 1: Define abstract product and factory interfaces
 * step 2: Create concrete classes implementing the interfaces
 * step 3: Create a concrete factories to generate the objects of concrete classes
 */


/**
 * Abstract Factory defines an interface for creating all distinct products but leaves the actual product creation to concrete factory classes.
 * Each factory class corresponds to a specific product variant.
 * 
 * The client code calls the creation method of a factory object instead of creating products directly with a constructor call (new operator).
 * 
 * The client code works with factories and products only through their abstract interfaces. This lets the client code work with any concrete factory/product variant.  
 */