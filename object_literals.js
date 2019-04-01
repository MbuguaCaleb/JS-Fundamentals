

//object literals are like dictionaries in JS


const person ={

firstName:'Caleb',
lastName:'Mbugua',
age:30,
hobbies:['music','movies','sports'],
address:{
    street:'50 main st',
    city:'Boston',
    state:'MA'
}
}
//console.log(person);
//console.log(person.firstName , person.lastname);
//console.log(person.hobbies[1]);
//console.log(person.address.city);

//pulling out from the object
//go through ES6

const {firstName, lastName, address:{city}} = person;

//console.log(firstName);
console.log(lastName);
console.log(city);


//adding properities to the object

person.email='mbuguacaleb30@gmail.com';

console.log(person);






