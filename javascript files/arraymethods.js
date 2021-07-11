//using array methods
//toString
const fruits=["Banana", "Orange", "Apple", "Mango"];
document.getElementById('a').innerHTML=fruits.toString();
//join
document.getElementById('b').innerHTML=fruits.join('*');
//pop
document.getElementById('c').innerHTML=fruits;
fruits.pop();
document.getElementById('d').innerHTML=fruits;