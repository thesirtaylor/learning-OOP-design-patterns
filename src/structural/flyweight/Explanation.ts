/**
 * Flyweight pattern is primarily used to reduce the number of objects created, to decrease memory and resource usage.
 * 
 * it lets you fit more objects into the available amount of RAM by sharing common parts of state between multiple objects, instead of keeping all of the data in each object.
 * 
 * The Flyweight pattern has a single purpose: minimizing memory intake. If your program doesn’t struggle with a shortage of RAM, then you might just ignore this pattern for a while.
 */

/**
 * The flyweight pattern is merely an optimization. 
 * Before applying it, make sure your program does have the RAM consumption problem related to having a massive number of similar objects in memory at the same time.
 * Make sure this problem can't be solved in any other meaning way.
 * 
 * Structure:
 * 1. Flyweight class: contains the portion of the original object’s state that can be shared between multiple objects. The same flyweight object can be used in many different contexts.
 * The state stored inside a flyweight is called intrinsic. This state represents the properties that, while critical, are often so deep or context-dependent that they can’t be reasonably extracted to a single object. The state passed to flyweight's methods is called extrinsic.
 * 
 * 2. Context Class: extends the base flyweight class, adding storage for the intrinsic state. A concrete flyweight must be sharable and capable of computing and storing intrinsic state. The Context class contains the extrinsic state, unique across all original objects.
 * 
 * 3. Flyweight Factory: manages a pool of existing flyweight. With the factory, clients don’t create flyweights directly. Instead, they call the factory, passing it bits of the intrinsic state of the desired flyweight.
 * The factory looks over previously created flyweights and either returns an existing one that matches search criteria or creates a new one if nothing is found.
 */

/**
 * How to implement:
 * 1. Divide fields of a class that will become a flyweight into two parts: 
 *  - the intrinsic state: 
 *          the fields that contain unchanging data duplicated across many objects.
 *  - the extrinsic state:
 *          the fields that contain context-dependent data unique to each object.
 * 
 * 2. Leave the fields that represent the intrinsic state in the class, but make sure they’re immutable. They should be set during the object’s construction and never modified.
 * 
 * 3. Go over methods that use fields of the extrinsic state. For each field used in the method, introduce a new parameter for storing that field's value and use that parameter instead of the field.
 * 
 * 4. Optionally, create a factory class to manage the pool of flyweight objects. It should check for an existing flyweight before creating a new one. Once the factory is in place, clients must only request flyweights through it. They should describe the desired flyweight by passing its intrinsic state to the factory.
 * 
 * 5. The client must store or calculate values of the extrinsic state (context) to be able to call methods of flyweight objects. For the sake of convenience, the extrinsic state along with the flyweight-referencing field can be moved to a separate context class.
 */