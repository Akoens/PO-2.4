export class Player{
    constructor(private name:string, private time:number, private size:number){
    }
    getName():string{
        return this.name;
    }
    getTime():number{
        return this.time;
    }
    getSize(){
        return this.size;
    }
    toString():string{
        return "" + this.name + " : "+this.time + " sec, size: " + this.size;
    }
}