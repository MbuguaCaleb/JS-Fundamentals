/* 
multi
line
comment*/

//Arrays-Variables that Hold Mutiple Values

//(a)Array using constructor

//const numbers = new Array(1,2,3,4,5);
//console.log(numbers);

const fruits =['apples','oranges','pears'];

//console.log(fruits[1]);
//fruits[3]='grapes'
//console.log(fruits);


//console.log(fruits);
fruits.push('mangos');
fruits.unshift('strawberries');
//fruits.pop();
console.log(fruits);

//Checking whether something is an array

console.log(Array.isArray(fruits));
console.log(Array.isArray('hello'));

//index of a ce rtain value in an array

console.log(fruits.indexOf('oranges'));


















