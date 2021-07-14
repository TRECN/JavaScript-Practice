//Classes
class car{
    constructor (name,year){
        document.getElementById('a').innerHTML=year;
        this.name=name;
        this.year="67";
    }
}
const myCar=new car("ford",64);
document.getElementById('b').innerHTML=myCar.name;

class cars{
    constructor(name, year){
        this.name=name;
        this .year=year;
    }
    age(){
        let date = new Date();
        return date.getFullYear()-this.year;

    }
}
let myCars=new cars("ford",2014);
document.getElementById('c').innerHTML=myCars.age();
