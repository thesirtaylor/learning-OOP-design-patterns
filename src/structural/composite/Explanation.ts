/**
 * Composite is a structural design pattern that lets you compose objects into tree structures and then work with these structures as if they were individual objects.
 * 
 * Using the composite pattern only makes sense when the core model of your app can be represented as a tree.
 * 
 * For example, imagine that you have two types of objects: Products and Boxes. 
 * A Box can contain several Products as well as other Boxes. These boxes in turn could contain more products or boxes.
 *  
 */

/**
 * Structure:
 * 1. The "Component interface" describes operations that are common to both simple and complex elements of the tree.
 * 2. The "Leaf" is a basic element of the tree that doesn't have sub-elements.
 *    Usually, leaf components end up doing most of the real work, since they don't have anyone to delegate the work to.
 * 3. The "Container" (aka composite) is an element that has sub-elements: leaves or other containers.
 * A container doesn't know the concrete classes of its children. It works with all sub-elements only via the component interface.
 * Upon receiving a request, a container delegates the work to its sub-elements, processes intermediate results, and then returns the final result to the client.
 * 4. The "Client" works with all the elements through the component interface. As a result, the client can work in the same way with both simple or complex elements of the tree.
 */

/**
 * How to Implement:
 * 1. Make sure that the model of your app can be represented as a tree structure.
 *      Try to break it down into elements that can be represented as containers (boxes) and leaves (products).
 *      Remember that containers must be able to contain both leaves and other containers.
 * 2. Declare the component interface with a list of methods that make sense for both simple and complex elements.
 * 3. Create a leaf class to represent simple elements. A leaf class must implement the component interface. A program may have several different leaf classes.
 * 4. create a container class to represent complex elements. This class also must implement the component interface. A program may have several different container classes.
 * In this class, provide an array field for storing references to sub-elements. 
 * Implement methods for adding and removal of children. The array must be able to store both leaves and containers, so make sure it's declared with the component type.
 * 5. Finally, create the client code. It should work with both simple and complex elements of the tree via the component interface.
 */