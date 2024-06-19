/**
 * https://blog.bitsrc.io/decorator-design-pattern-in-typescript-701dfbf24420
 * Decorator is a design pattern that allows adding new bahaviors to objects dynamically by placing them inside special wrapper objects(that contain the intended behavior), called decorators. 
 * 
 * Using decorators we can wrap objects countless number of times since both target objects and decorators follow the same interface. The resulting object will get a stacking behavior of all wrappers.
 */

/**
 * "Wrapper" is the alternative nickname for the Decorator pattern that clearly expresses the main idea of the pattern.
 * 
 * A wrapper is an object that can be linked to a target object.
 * The wrapper contains the same set of methods as the target and delegates to it all requests it receives.
 * 
 * However, the wrapper may alter the result by doing something either before or after it passes the request to the target.
 * the wrapper implements the same interface as the target, that's why from the client's perspective, the wrapper is identical to the target.
 */

/**
 * Structure:
 * 1. The "Component" declares the common interface for both wrappers and the target.
 * 2. The "Concrete Component" is the class of objects being wrapped.
 *  it defines the basic behavior, which can be altered by decorators.
 * 3. The "Base Decorator" class has a field for referencing a wrapped object.
 *      The field should be declared with the "Component" type to allow linking to concrete components as well as decorators.
 *     The base decorator delegates all operations to the wrapped object.
 * 4. Concrete Decorators define extra behaviors that can be added to components dynamically.
 * 5. The client code can wrap components in multiple layers of decorators, as long as they follow the component's interface.
 */

/**
 * How to Implement:
 * 1. Make sure your business domain can be represented as a primary component with multiple optional layers over it.
 * 2. Figure out what methods are common to both the primary component and the optional layers. Create the component interface and declare those methods there.
 * 3. Create a concrete component class and define the core business logic inside it.
 * 4. Create a base decorator class. It should have a field for storing a reference to a wrapped object. The field should be declared with the component interface type to allow linking concrete components and decorators.
 * 5. Make sure all classes implement the component interface.
 * 6. Create concrete decorators by extending them from the base decorator. A concrete decorator must execute its behavior before or after the call to the parent method (which always delegates to the wrapped object).
 * 7. The client code must be responsible for creating the composition and executing it.
 */

/**
 * Applicability:
 * 1. Use the Decorator pattern when you need to be able to assign extra behaviors to objects at runtime without breaking the code that uses these objects.
 * 2. Use the pattern when it's awkward or not possible to extend an object's behavior using inheritance.
 * 3. use the pattern when there's need to add new behavior to an existing object without modifying the class.
 */