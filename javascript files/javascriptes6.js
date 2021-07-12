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
