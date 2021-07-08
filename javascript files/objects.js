//syntax
//const name={type:data,....};
//instead of const we can also use let and var
const car={type:"ciaz", model:"100vz", color:"green"};
document.getElementById('a').innerHTML="the car type is "+car.type;
//--------------
// Create an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
  //here we can use either person.firstName or person["firstName"]
document.getElementById('b').innerHTML=person.firstName + " is " + person.age + " years old.";
//-------------
const details={
    firstName:"Rishabh",
    lastName:"raj",
    id:567,
    fullName: function(){
        //this keyword is used to access the properties in this object
        return this.firstName+" "+ this.lastName;
    }
};
document.getElementById('c').innerHTML=details.fullName();