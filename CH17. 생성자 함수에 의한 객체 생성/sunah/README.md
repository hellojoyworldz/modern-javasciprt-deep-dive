# CH17. 생성자 함수에 의한 객체 생성

## 17-1. Object 생성자 함수

생성자 함수란?  
new 연산자와 함께 호출하여 객체(인스턴스)를 생성하는 함수  
생성자 함수에 의해 생성된 객체를 인스턴스라 한다.

new 연산자와 함께 Object 생성자 함수를 호출하면 빈 객체를 생성하여 반환한다.  
빈 객체를 생성한 이후 프로퍼티 또는 메서드를 추가하여 객체를 완성할 수 있다.

```javascript
const person = new Object();

person.name = 'Lee';
person.sayHello = function(){
    console.log('Hi! My name is ' + this.name);
}

console.log(person); // { name: 'Lee', sayHello: [Function (anonymous)] }

person.sayHello(); // Hi! My name is Lee
```


자바스크립트는 Object 생성자 함수 이외에도  
String, Number, Boolean, Function, Array, Date, RegExp Promise 등의 빌트인 생성자 함수를 제공한다.

```javascript
const strObj = new String('Lee');
console.log(typeof strObj); //object
console.log(strObj); //[String: 'Lee']

const numObj = new Number(123);
console.log(typeof numObj); // object
console.log(numObj); //[Number: 123]

const boolObj = new Boolean(true);
console.log(typeof boolObj); // object
console.log(boolObj); // [Boolean: true]

const func = new Function('x','return x*x');
console.log(typeof func); // function
console.log(func); // [Function: anonymous]

const arr = new Array(1,2,3);
console.log(typeof arr); // object
console.log(arr); //[ 1, 2, 3 ]

const regExp = new RegExp(/ab+c/i);
console.log(typeof regExp); //object
console.log(regExp); // /ab+c/i

const date = new Date();
console.log(typeof date); //object
console.log(date); //2023-07-17T05:50:29.584Z
```
반드시 Object 생성자 함수를 사용해 빈 객체를 생성해야 하는 것은 아니다. 긱체 리터럴을 사용하는 것이 더 간편하다.

## 17-2. 생성자 함수
###  17-2-1. 객체 리터럴에 의한 객체 생성 방식의 문제점
객체 리터럴에 의한 객체 생성 방식은 직관적이고 간편하지만, 단 하나의 객체만 생성한다.   
동일한 프로퍼티를 갖는 객체를 여러 개 생성해야 하는 경우 비효율적이다.

```javascript
const circle1 = {
    radius: 5,
    getDiameter(){
        return 2 * this.radius;
    }
}

console.log(circle1.getDiameter()); //10

const circle2 = {
    radius: 10,
    getDiameter(){
        return 2 * this.radius;
    }
}

console.log(circle2.getDiameter()); //20
```