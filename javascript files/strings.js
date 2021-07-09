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

//expression Substitution
let price=10;
let vat=0.25;
let total = `Total: ${(price * (1 + vat)).toFixed(2)}`;
document.getElementById('c').innerHTML=total;

//HTML templates
let header ="Templates Literals";
let tags = ["template literals", "javascript", "es6"];
let html=`<h2>${header}</h2><ul>`;
for(const x of tags){
    html+=`<li>${x}</li>`;
}
html+=`</ul>`;
document.getElementById('d').innerHTML=html;
