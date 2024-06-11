/**
 * Bridge is a structural design pattern that lets you split a large class or a set of closely related classes into two separate 
 * hierarchies-abstraction and implementation-which can be developed independently of each other.
 * 
 * Use the Bridge pattern when you want to divide and organize a monolithic class that has several variants of some functionality
 * (for example, if the class can work with various database servers).
 */


/**
 * How to implement:
 * 1. define the two different layers (abstraction and implementation) and declare the methods that the abstraction layer should use.
 * 2. create a constructor in the abstraction layer that takes the implementation abstract layer as a parameter.
 * 3. create concrete classes for each layer and implement necessary methods.
 * 4. use in client by passing the implementation class to the abstraction class.
 */


/**
 * Bridge pattern seperates the app into 2 parts; the abstraction and the implementation.
 * The abstraction layer is the one that the client will use to interact with our application.
 * This layer doesn't contain the business logic, it delegates the work to the implementation layer.
 */

/**
 * Use when:
 * 1. you want to split a big class that has several different variants of some functionality into two different layers.
 * 2. you need to switch between different implementations of the same abstraction at runtime.
*/