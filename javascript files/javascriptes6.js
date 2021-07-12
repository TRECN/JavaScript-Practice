//let keyword allows you to declare a variable with block scope
let x=10;
//here x=10
    {
        let x=2;
        //here x=2
        document.getElementById('a').innerHTML=x;
    }
//here x=10
document.getElementById('b').innerHTML=x;

//The const keyword is same as let but you cannot change the value 
const y=10;
    {
        const y=2;
        
        document.getElementById('c').innerHTML=y;
    }
document.getElementById('d').innerHTML=y;

//Arrow function
/**
 * normal function
 * hello = function(){
 *  return "Hello world"
 * }
 */
var hello = ()=>{
    return "hello world";
}
document.getElementById('e').innerHTML=hello();
//arrow functon returns value by default
hello = ()=>"rishabh";
document.getElementById('f').innerHTML=hello();
//arrow function with parameters
hello=(val)=>"hello"+val;
document.getElementById('g').innerHTML=hello(" Rishabh");
//arrow function without parenthesis
//this example show that if you have only one parameter in an Arrow function, you can skip the parenthesis.
hello=val=>"hello "+val;
document.getElementById('h').innerHTML=hello("world");

//this keyword in regular function and arrow function
//regular function
var Hello;
Hello=function(){
    document.getElementById('j').innerHTML+=this;
}
//the window object calls the function:
window.addEventListener('load',Hello);

//A button object calls the function
document.getElementById('i').addEventListener('click',Hello);