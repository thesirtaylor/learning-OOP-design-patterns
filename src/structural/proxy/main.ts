import { RealSubject, Proxy } from "./Concrete";

//real subject
const realSubject = new RealSubject();
realSubject.request();

console.log('\n');
//proxy
const proxy = new Proxy(realSubject);
proxy.request();