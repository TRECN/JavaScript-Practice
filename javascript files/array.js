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

//accessing array elements and changing an arry element
const cars4 = ["Saab", "Volvo", "BMW"];
let x = cars[0]; 
cars[0]="ford";
document.getElementById('d').innerHTML="changed "+x+"<br>the array: "+cars4;

//looping an array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fln=fruits.length;
let text="<ul>";
for (let i = 0; i < fln; i++) {
    text += "<li>" + fruits[i] + "</li>";
  }
  text += "</ul>";
document.getElementById('e').innerHTML=text;
//you can also use array.forEach()
let text2="<ul>";
fruits.forEach(myFunction);
text2+="</ul>";
document.getElementById('f').innerHTML=text2;

function myFunction(value){
    text2+="<li>"+value+"</li>";
}

//adding elements to array 
fruits.push(
"grapes"
);
document.getElementById('g').innerHTML=fruits;