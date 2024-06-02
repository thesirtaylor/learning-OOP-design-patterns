/**
 * https://blog.bitsrc.io/the-prototype-design-pattern-in-typescript-19cff98a1639
 * 
 * Prototype pattern is a creational design pattern that lets you copy existing objects without making your code dependent on their classes.
 * 
 * The prototype pattern delegates the clonning processs to the actual object that are being cloned.
 * The pattern declares a common interface for all objects that support cloning.
 * 
 * This interface lets you clone an object without coupling your code to the class of that object.
 * Usually, such an interface contains just a single clone method.
 * 
 * An object that supports cloning is called a prototype. 
 * 
 * Here's how it works: you create a set of objects, configured in various ways. When you need an object like the one you have configured,
 * you just clone a prototype instead of constructing a new object from scratch.
 * 
 * 
 * this pattern can be beneficial when creating a new object is resource intensive, and you want  a more performance-efficient solution.
 */

/**
 * Usable:
 * 1. when you want to reduce the number of subclasses that a system needs to instantiate
 * 2. when you want to add and remove objects at runtime
 * 3. when you need to improve performance by avoiding costly creation of objects from scratch, especially when they are complex or cost effective.
 * 4. if the objects are similar in structure, using the prototype pattern avoids repeating the object creation code (instantiation).
 * 5. classes to instantiate are specified at runtime.
 * 6. when you need to hide the complexity of creating new instances from the client.
 */

/***
 * Step 1: Create an interface that declares a method for cloning itself
 * Step 2: Create concrete classes that implement (the interface) the cloning method
 * Step 3: Create a factory class that can produce clones of objects that follow the interface
 */