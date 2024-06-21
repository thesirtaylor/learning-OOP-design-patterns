/**
 * https://blog.bitsrc.io/simplify-complexity-with-the-facade-design-pattern-in-typescript-6f0959b30b90
 * 
 * 
 * A facade is a class that provides a simple interface to a complex subsystem which contains lots of moving parts.
 * 
 * A facade might provide limited functionality in comparison to working with the subsystem directly. However, it includes only those features that clients really care about.
 */

/**
 * Structure:
 * 1.The "Facade" provides convenient access to a particular part of the subsystem's functionality. It knows where to direct the client's request and how to operate all the moving parts.
 * 2. An "Additional Facade" class can be created to prevent polluting the main facade with unrelated features that might make it yet another complex structure.
 * Additional facades can be used by both clients and other facades.
 * 3. The "Complex Subsystem" consists of various objects. To make them all do something meaningful, you have to dive deep into the subsystem's implementation details, such as initializing objects in the correct order and supplying them with data in the proper format.
 * 
 * Subsystem classes are not aware of the facade's existence. They operate within the system and can be used directly by some clients.
 * 4. The "Client" uses the facade instead of calling the subsystem objects directly.
 */

/**
 * How to Implement:
 * 1. Check whether it's possible to provide a simpler interface than what an existing subsystem already provides.
 * 2. Declare and implement this interface in a new facade class. The facade should redirect the calls from the client code to appropriate objects of the subsystem.
 * The facade should be responsible for initializing the subsystem and managing its further life cycle unless the client code already does this.
 * 3. To get the full benefit from the pattern, make all the client code communicate with the subsystem only via the facade.
 * This protects the client code from any changes in the subsystem code.
 * 4. If the facade becomes too big, consider extracting part of its behavior to a new, additional facade class.
 */