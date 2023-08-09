const strObj = new String("Lee");
console.log(typeof strObj); //object
console.log(strObj); //[String: 'Lee']

const numObj = new Number(123);
console.log(typeof numObj); // object
console.log(numObj); //[Number: 123]

const boolObj = new Boolean(true);
console.log(typeof boolObj); // object
console.log(boolObj); // [Boolean: true]

const func = new Function("x", "return x*x");
console.log(typeof func); // function
console.log(func); // [Function: anonymous]

const arr = new Array(1, 2, 3);
console.log(typeof arr); // object
console.log(arr); //[ 1, 2, 3 ]

const regExp = new RegExp(/ab+c/i);
console.log(typeof regExp); //object
console.log(regExp); // /ab+c/i

const date = new Date();
console.log(typeof date); //object
console.log(date); //2023-07-17T05:50:29.584Z
