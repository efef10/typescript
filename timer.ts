export class Timer{
    listeners;
    myInterval;

    constructor(private timer){
        this.listeners=[];
    }

    tick(fn){
        this.listeners.push(fn);
    }

    start(){
        this.myInterval = setInterval(this.runListeners.bind(this),this.timer);
    }

    runListeners(){
        for(let i=0;i<this.listeners.length;i++){
            this.listeners[i].call();
        }
    }

    stop(){
        clearInterval(this.myInterval);
    }
}
