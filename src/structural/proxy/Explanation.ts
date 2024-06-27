/**
 * Proxy is a structural design pattern that lets you provide a substitute or placeholder for another object. 
 * A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.
 */

/**
 * problem:
 * why would you want to control access to an object?
 * example, you have a massive object that consumes a vast amount of system resources. You need it from time to time, but not always.
 */

/**
 * solution:
 * the proxy pattern suggests that you create a new proxy class with the same interface as an original service object.
 * Then you update your app so that it passes the proxy object to all of the original object's clients.
 * When the proxy receives a request from a client, it creates a real service object and delegates all the work to it.
 */

/**
 * Structure:
 * 1. The `Service Interface`: declares the interface of the service. 
 * the proxy must follow this interface to be able to disguise itself as a service object.
 * 
 * 2. The `Real Service`: is a service object that does some real work.
 * 
 * 3. The `Proxy`: has a reference field that points to a service object. 
 * After the proxy finishes its processing (e.g., lazy initialization, logging, access control, caching, etc.), it passes the request to the service object.
 * 
 * 4. The `Client`: works with both services and proxies, as long as they all follow the same interface.
 * This way you can pass a proxy into any code that expects a service object.
 */