// primitive type
var numberIntVar = 3;
var numberFloatVar = 3.0;

var stringVar = 'text string';

var booleanVar = true;

var nullVar = null;

var undefinedVar;

var symbolVar = Symbol(1);

// reference type
var arrayVar = [];

var objectVar = {};

var functionVar = function(){

};
console.log("primitive type")
console.log(`typeof 3 is ${typeof numberIntVar}`);
console.log(`typeof 3.0 is ${typeof numberFloatVar}`);
console.log(`and every javascript numbers are double float ex) numberIntVar === numberFloatVar : ${numberIntVar === numberFloatVar}`);
console.log(`typeof 'text string' is ${typeof stringVar}`);
console.log(`typeof true is ${typeof booleanVar}`);
console.log(`typeof null is ${typeof nullVar}`);
console.log(`typeof undefined is ${typeof undefinedVar}`);
console.log(`typeof Symbol(1) is ${typeof symbolVar}`);
console.log("\nreference type")
console.log(`typeof [] is ${typeof arrayVar}`);
console.log(`typeof {} is ${typeof objectVar}`);
console.log(`typeof function(){} is ${typeof functionVar}`);
