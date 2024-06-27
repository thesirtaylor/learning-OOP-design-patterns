import { Subject } from "./proxy.interface";

//service
export class RealSubject implements Subject {
    request(): void {
         console.log('RealSubject: Handling request.');
    }
}

//proxy
export class Proxy implements Subject {
    private realSubject: RealSubject;

    constructor(realSubject: RealSubject){
        this.realSubject = realSubject;
    }

    private logAccess(): void{
         console.log('Proxy: Logging the time of request.');
    }

    private checkAccess(): boolean {
        console.log('Proxy: Checking access prior to firing a real request.');
        return true;
    }

    request(){
        //the idea is that before the request method is called, the proxy does other things.
        //but when called in the client its going to look like only the request function of the service is called.
        if (this.checkAccess()) {
            this.realSubject.request();
            return this.logAccess();
        }

        return this.logAccess();
    }
}