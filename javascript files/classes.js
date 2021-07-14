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
