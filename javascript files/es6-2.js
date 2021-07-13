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
    [apples,500],
    [bananas,300],
    [oranges,200]
]);
document.getElementById('c').innerHTML=fruits;
