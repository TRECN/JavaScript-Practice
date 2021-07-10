//Array example
const cars=[
    "Saab",
    "Volvo",
    "BMW"
];
document.getElementById('a').innerHTML=cars;
//another syntax
const cars2=[];
cars2[0]="saab";
cars2[1]="Volvo";
cars2[2]="bmw";
document.getElementById('b').innerHTML=cars2;
//using new keyword
const cars3 = new Array ("Saab","Volvo","BMW");
document.getElementById('c').innerHTML=cars3;