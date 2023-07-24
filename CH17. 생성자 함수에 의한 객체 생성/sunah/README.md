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
반드시 Object 생성자 함수를 사용해 빈 객체를 생성해야 하는 것은 아니다. 
객체 리터럴을 사용하는 것이 더 간편하다.

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

객체는 프로퍼티를 통해 객체 고유의 상태를 표현한다.  
그리고 메서드를 통해 상태 데이터인 프로퍼티를 참조하고 조작하는 동작을 표현한다.  
따라서 프로퍼티는 객체마다 프로퍼티 값이 다를 수 있지만 메서드는 내용이 동일한 경우가 일반적이다.

객체 리터럴에 의해 객체를 생성하는 경우 프로퍼티 구조가 동일함에도 불구하고 매번 같은 프로퍼티와 메서드를 기술해야 한다.

## 17-2-2. 생성자 함수에 의한 객체 생성 방식의 장점
객체(인스턴스)를 생성하기 위한 템플릿(클래스)처럼 생성자 함수를 사용하여 프로퍼티 구조가 동일한 객체 여러 개를 간편하게 생성할 수 있다.
```javascript
function Circle(radius){
    this.radius = radius;
    this.getDiameter = function(){
        return 2 * this.radius;
    }
}

// 인스턴스 생성
const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1.getDiameter()); // 10
console.log(circle2.getDiameter()); // 20
```

new 연산자와 함께 호출하지 않으면 생성자 함수가 아니라 일반 함수로 동작한다.
```javascript
const circle3 = Circle(15);

// 일반 함수로서 호출된 Circle은 반환문이 없으므로 암묵적으로 undefined를 반환한다.
console.log(circle3); // undefined

// 일반 함수로서 호출된 Circle 내의 this는 전역 객체를 가리킨다
console.log(radius); //15
```

## 17-2-3. 생성자 함수의 인스턴스 생성 과정
생성자 함수의 역할은 
- 1️⃣인스턴스 생성(필수) : 프로퍼티 구조가 동일한 인스턴스를 생성하기 위한 템클릿(클래스)으로서 동작하여 인스턴스를 생성하는 것
- 2️⃣인스턴스 초기화(옵션) : 생성된 인스턴스를 초기화(인스턴스 프로퍼티 추가 및 초기값 할당)하는 것
```javascript
// 생성자 함수
function Circle(radius){
    // 2️⃣인스턴스 초기화
    this.radius = radius;
    this.getDiameter = function(){
        return 2 * this.radius;
    };
} 

// ️1️⃣ 인스턴스 생성
const circle1 = new Circle(5); 

```