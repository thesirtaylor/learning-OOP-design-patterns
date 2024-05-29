/**
 *https://blog.bitsrc.io/the-builder-design-pattern-in-typescript-1ae601450cc

    The Builder pattern is a creational pattern that allows constructing complex objects step by step.
    The pattern allows you to produce different types and representations of an object using the same construction code(avoiding "constructor pollution").

    The Builder pattern is especially useful when you need to create an object with lots of possible configuration options.
    For example, when you want to create a complex object that requires laborious, step-by-step initialization of many fields and nested objects.
    Real life example: a car builder that allows you to configure the car with different options like color, engine, wheels, etc.
                        a game character that has several attributes like health, attack, defense, etc.
    instead of having one class with several constructor parameters, you can have a builder class that receives the parameters one by one and then returns the constructed object.

    Usable:
    1. when you need to construct a complex object with lots of configuration options
    2. when you want to create an object that should be immutable
    3. when you want to create an object that should be easy to construct
    4. when you want to create an object that should be easy to understand
    5. when you want to create an object that should be easy to maintain
    6. when you want to create an object that should be easy to test
    7. when you want to create an object that should be easy to extend
    8. when you want to create an object that should be easy to reuse
    9. when you need to create different representations of an object
 *  
 */

    /**
     * step 1: Define the product class
     * step 2: Create a builder class and interface
     */