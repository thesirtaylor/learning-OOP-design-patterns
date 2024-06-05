/**
 * Singleton is a creational design pattern that ensures that a class has only one instance and provides a global point of access to that instance.
 * 
 * In other words, it restricts the instantiation of a class to a single object.
 * The class can have only 1 instance.
 * 
 * This pattern is commonly used when you need to manage a shared resource, configuration settings, in a controlled manner.
 * 
 * 
 * There are 2 forms of singleton instantiation:
 * 1. Lazy Instantiation: The instance of the singleton class is created only when it is requested for the first time. 
 * This is done to avoid unnecessary resource usage when the singleton is not immediately needed.
 * Lazy instantialization is not thread-safe, and it can be achieved using techniques such as "Double-checked locking" or "Initialization-on-demand holder idiom".
 * 
 * 2. Early Instantiation: The instance of the singleton class is created when the class is loaded. 
 * This ensures the instance is available when the class is first loaded.
 */

/**
 * Advantages of Singleton Pattern
 * 1. Global access: You can access the singleton instance from anywhere in your code.
 * 2. Resource management: it helps in efficient resource management, especially for expensive-to-create objects that need to be shared throughout the application.
 * 3. Controlled instance: ensures there's only 1 instance of the class, avoiding duplication or inconsistent state.
 * 4. Lazy loading: lazy loading differs instance creation until it is actually needed, improving performance and reducing memory consumption.
 * 5. Thread safety: ensures that the singleton instance is thread-safe, preventing multiple threads from creating multiple instances.
 */

/**
 * Usage of Singleton Pattern
 * it is used when you want to have only 1 instance of a class throughout the application. In situatuions such as
 * 1. Logger classes
 * 2. Configuration management
 * 3. Caching
 * 4. Thread pools
 * 5. Database connections
 */

/**
 * All implementations of the Singleton pattern have these steps in common:
 * 1. Make the default constructor private, to prevent other objects from using the new operator with the Singleton class.
 * 2. Create a static creation method that acts as a constructor. This method calls the private constructor under the hood but returns the same instance of the class.
 */

/**
 * Step 1: Create a class with a private constructor
 * Step 2: Create a static method that returns the instance of the class
 * Step 3: Use the static method to get the instance of the class
 */

/**
 * limitations of Singleton Pattern
 * You can't just use a class that depends on a singleton in some other context, without carrying over the singleton to the other context.
 * Most of the time, this limitation comes up in the creation of unit tests.
*/