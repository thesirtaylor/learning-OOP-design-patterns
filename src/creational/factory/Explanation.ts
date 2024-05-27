/**
 * https://blog.bitsrc.io/factory-design-pattern-in-typescript-55a91d74f3a4
 * Factory for creating explanations
 * Factory pattern simulates the working of actual factory where products are created
 * without exposing the logic to the client 
 * 
 * it takes care of creating the object of the class without exposing the creation logic to the client 
 * and just returns newly constructed instances ready to use
 * 
 * usable 
 * 1. when objects with common interface are required to be created, but whose types are determined by the implementation(at runtime)
 * 2. when the client doesn't need to know about the creation logic
 * 3. when the creation logic is complex and needs to be encapsulated
 * 4. when the creation logic needs to be tested
 * 5. when the creation logic needs to be reused
 * 6. when the creation logic needs to be decoupled from the client
 * 7. when the creation logic needs to be centralized
 * 8. when the creation logic needs to be extensible
 * 9. when the creation logic needs to be maintainable
 * 10. when the creation logic needs to be scalable
 * 11. when the creation logic needs to be flexible
 * 12. when a class cannot anticipate the type of objects it needs to create
 * 
 */


/**
 * Step 1: Define an interface for the explanation
 * Step 2: Create concrete classes implementing the interface
 * Step 3: Create a factory to generate the objects of concrete classes
 * Step 4: Use the factory to get object of concrete class by passing an information such as type
 */