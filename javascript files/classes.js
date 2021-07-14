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

//parametric funtion in classes
class cars3{
    constructor(name,year){
        this .year=year;
        this .name=name;
    }
    age(x){
        return x-this.year;

    }
}
let date=new Date();
let year=date.getFullYear();
let mycar2=new cars3("rishabh",2014);

document.getElementById('d').innerHTML=mycar2.age(year);