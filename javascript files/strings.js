//using backticks
let text =`The quick 
brown fox jumps
 over the lazy 
 dog.`;
document.getElementById('a').innerHTML=text;
//variable substitutiuon
let firstName="John";
let lastName = "Doe";

let text1=`welcome ${firstName} ${lastName}`;
document.getElementById('b').innerHTML=text1;