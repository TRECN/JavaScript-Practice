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

