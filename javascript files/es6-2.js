//Map objects
//create objects
const apples = {name:'Apples'};
const bananas = {name:'Banana'};
const oranges = {name:'Oranges'};
//create a new map
const fruit = new Map();
//Add the objects to the map
fruit.set(apples,500);
fruit.set(bananas,300);
fruit.set(oranges,200);
//display object type 
document.getElementById('a').innerHTML=fruit;
//showing the value for a key in a map object
document.getElementById('b').innerHTML=fruit.get(bananas);
//another way to create a map
const fruits=new Map([
    [apples,5000],
    [bananas,300],
    [oranges,200]
]);
document.getElementById('c').innerHTML=fruits.get(apples);

//Set Object
//Create some variables
const a="a";
const b="b";
const c="c";
//creating Set
const letters = new Set();
//adding values
letters.add(a);
letters.add(b);
letters.add('c');
//display set size
document.getElementById('d').innerHTML=letters.size;
document.getElementById('e').innerHTML=typeof letters;
document.getElementById('f').innerHTML=letters instanceof Set;

//(...)rest parameter
function sum(...args){
    let sum=0;
    for(let x of args){
        sum+=x;
    }
    return sum;
}
let a1=sum(5,7,8,9);
document.getElementById('g').innerHTML=a1;

//default parameter values
function Function(x,y=10){
    // y is 10 if not passed or undefined
    return x+y;
}
document.getElementById('h').innerHTML=Function(6);

//includes()//returns true or false
let text22="i live in this world";
document.getElementById('i').innerHTML=text22.includes("in");

//startsWith()//returns true or false
document.getElementById('j').innerHTML=text22.startsWith("j");

//endsWith()
document.getElementById('k').innerHTML=text22.endsWith("ld");

//Array.form()
const arr=Array.from("rishabh");
document.getElementById('l').innerHTML=arr;

//Array.find()
const number=[4,6,9,19,55,44];
let first=number.find(myFunction);
function myFunction(value, index, array) {
    return value > 18;
  }
document.getElementById('m').innerHTML=first;