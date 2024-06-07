/**
 * https://blog.bitsrc.io/adapter-design-pattern-in-typescript-956cd3e05cec
 * Adapter is a strucural design pattern that allows objects with incompatible interfaces to collaborate.
 * 
 * An adapter is a special object that converts the interface of one object so that another object can understand it.
 * An adapter wraps one of the objects to hide the complexity of conversion happening behind the scenes. The wrapped object isn't even aware of the adapter.
 * 
 * importance of the adapter pattern:
 * 1. reusability and compatibility: it allows you to reuse existing interfaces that would have been otherwise incompatible with the system.
 * 2. flexibility: it allows you to adapt interfaces without changing the existing codebase.
 * 3. simplicity: it simplifies the interface into high-level operations, hiding the complex underlying implementations. 
 */

/**
 * Use when:
 * 1. you need to use several existing subclasses, but it's impractical to adapt their interface by subclassing every one.
 * 2. you need to create a reusable class that cooperates with classes that don't necessarily have compatible interfaces.
 */

/**
 *  How to implement
 * 1. make sure you have at least two classes with incompatible interfaces:
 *      - A useful service class, which you can't change (often third-party, legacy, or with lots of existing dependencies).
 *      - One or several client classes that would benefit from using the service class.
 * 
 * 2. Declare the client interface and describe how clients communicate with the service.
 * 
 * 3. Create the adapter class and make it follow the client interface. Leave all the methods empty for now.
 * 
 * 4. Add a field to the adapter class to store a reference to the service object. 
 *      The common practice is to initialize this field via the constructor, but sometimes it's more convenient to pass it to the adapter when calling its methods.
 * 
 * 5. One by one, implement all methods of the client interface in the adapter class. 
 *      The adapter should delegate most of the real work to the service object, handling only the interface or data format conversion.
 * 
 * 6. Client should use the adapter via the client interface. This lets you change or extend the adapters without affecting the client code.
 */