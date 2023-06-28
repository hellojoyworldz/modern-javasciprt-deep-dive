# 10. 객체 리터럴

자바스크립트는 객체 기반의 프로그래밍 언어이다.  
원시 값을 제외한 나머지 값(함수, 배열, 정규 표현식 등)은 모두 객체다.

원시 타입의 값: 변경 불가능한 값  
객체 타입의 값: 변경 가능한 값

## 10-1. 객체란?

객체 타입은 다양한 타입의 값(원시 값 또는 다른 객체)을 하나의 단위로 구성한 복합적인 자료구조이다.

1️⃣ 객체 : 0개 이상의 프로퍼티로 구성된 집합  
2️⃣ 프로퍼티: 객체의 **상태**를 나타내는 값(키와 값으로 구성)  
3️⃣ 메서드: 프로퍼티(상태 데이터)를 참조하고 조작할 수 있는 **동작**(프로퍼티의 값이 함수일 경우)

```javascript
1️⃣
var count = {
    2️⃣ num: 0,
    3️⃣ increase: function(){
        this.num++;
    }
}
```

## 10-2. 객체 리터럴에 의한 객체 생성

C++나 자바 같은 클래스 기반 객체지향 언어는 클래스를 사전에 정의하고 필요한 시점에 new 연산자와 함께 생성자를 호출하여 인스턴스(클래스에 의해 생성되어 메모리에 저장된 신체)를 생성하는 방식으로 객체 생성하는데,

자바스크립트는 프로토타입 기반 객체지향 언어로 객체 생성 방법이 다양하다.

- ✔️ 객체 리터럴
- Object 생성자 함수
- 생성자 함수
- Object.create 메서드
- 클래스(ES6)

✔️ 객체 리터럴  
1️⃣ 중괄호 내에 0개 이상의 프로퍼티를 정의  
2️⃣ 중괄호 내에 프로퍼티를 정의하지 않으면 빈 객체가 생성  
3️⃣ 변수에 할당되는 시점에 자바스크립트엔진은 객체 리터럴을 해석해 객체를 생성  
4️⃣ 객체 리터럴의 중괄호는 코드 블록을 의미하지 않으며 값으로 평가되는 표현식(중괄호 뒤에 세미콜론을 붙임)

```javascript
1️⃣
var person = {
    name: 'Lee',
    age: 20
};4️⃣
console.log(typeof person); //object

2️⃣
var empty = {};
console.log(typeof empty); //object
```

## 10-3. 프로퍼티

- 객체는 프로퍼티의 집합이며, 프로퍼티는 1️⃣키와 2️⃣값으로 구성
- 프로퍼티를 나열할 때 3️⃣쉼표(,)로 구분하고 4️⃣마지막 프로퍼티 뒤에는 쉼표를 사용하지 않아도 됨

```javascript
var person = {
    1️⃣ name: 2️⃣ 'Lee',
    gender: female, // 3️⃣
    age: 20 // 4️⃣
}
```

### 프로퍼티 키

1️⃣ 프로퍼티 값에 접근할 수 있는 이름으로 식별자 역할  
2️⃣ 식별자 네이밍 규칙을 따르면 따옴표 생략이 가능하다.(권장)
3️⃣ 식별자 네이밍 규칙을 따르지 않으면 따옴표로 묶어야 한다.

```javascript
var person = {
  name: "Lee",
  firstName: "Ung-mo", // 2️⃣
  "last-name": "Lee", // 3️⃣ - 연산자가 있는 표현식으로 해석
  age: 20,
};

// 1️⃣
console.log(person.name); // 'Lee'
```

4️⃣ 빈 문자열을 포함하는 모든 문자열 또는 심벌 값  
5️⃣ 문자열이나 심벌값 외 값을 사용하면 암묵적 타입 변환을 통해 문자열로 변환  
6️⃣ var, function과 같은 예약어를 사용해도 에러가 발생하지 않지만 권장하지 않음

```javascript
// 4️⃣ 빈 문자열을 프로퍼티 키로 사용해도 에러 x
// 키로서의 의미를 갖지 못하므로 권장하지 않는다.
var foo = {
  "": 1,
};
console.log(foo[""]); // 1

// 5️⃣ 숫자가 내부적으로 문자열로 변환
var foo = {
  0: 1,
  1: 2,
  2: 3,
};

// 6️⃣ 예약어를 프로퍼티 키로 사용하면 예상치 못한 에러가 발생할 수 있음
var foo = {
  var: "",
  function: "",
};
```

7️⃣ 중복된 프로퍼티 키를 선언하면 먼저 선언한 프로퍼티를 덮어쓰며 에러가 발생하지 않음  
8️⃣ 문자열 또는 문자열로 평가할 수 있는 표현식을 사용해 프로퍼티 키를 동적 생성 할 수 있음

```javascript
// 7️⃣
var foo = {
  name: "Lee",
  name: "Kim",
};
console.log(foo.name); // 'Kim'

// 8️⃣ 프로퍼티 키 사용할 표현식은 대괄호[] 로 묶어줌
var obj = {};
var key = "hello";
obj[key] = "world";
console.log(obj); // {hello: "world"}
```

## 10-4. 메서드

객체에 묶여 있는 함수를(프로퍼티 값이 함수일 때)

```javascript
var circle = {
  radius: 5,
  getDiameter: function () {
    return 2 * this.radius;
  },
};
```

## 10-5. 프로퍼티 접근

1️⃣ 마침표 표기법: 마침표 프로퍼티 접근 연산자 사용
2️⃣ 대괄호 표기법: 대괄호 프로퍼티 접근 연산자 사용

```javascript
var person = {
  name: "Lee",
};
// 1️⃣ 마침표 표기법 . (객체.프로퍼티키)
console.log(person.name); // Lee
// 2️⃣ 대괄호 표기법 [''] (객체['프로퍼티키'])
console.log(person["name"]); // Lee
```

3️⃣ 프로퍼티 키가 식별자 네이밍 규칙을 준수하는 이름이면 마침표 표기법과 대괄호 표기법 모두 사용  
4️⃣ 그렇지 않으면 대괄호 표기법만 사용 가능

```javascript
var person = {
    'last-name': 'Lee',
    1: 10,
};

4️⃣
person.'last-name'; // SyntaxError: Unexpected string
person.last-name; // ✔️ 브라우저환경: NaN /  Node.js 환경: ReferenceError: last is not defined
person.[last-name]; // ReferenceError: last is not defined
person.['last-name']; // Lee
```

✔️ Node.js 환경에서는 name 이라는 식별자 선언이 없어 ReferenceError가 떴다.  
브라우저 환경에서는 name 이라는 전역변수(전역 객체 window의 프로퍼티)가 암묵적으로 존재한다.  
name은 창(window)의 이름을 가르키며 기본값은 빈 문자열이므로 NaN이 뜬다.

5️⃣ 대괄호 표기법으로 접근할 때 프로퍼티 키는 반드시 따옴표로 감싸야 함  
6️⃣ 객체에 존재하지 않는 프로퍼티에 접근하면 undefined를 반환(referenceError가 발생하지 x)

```javascript
var person = {
  name: "Lee",
};

// 5️⃣ 따옴표로 감싸지 않으면 식별자로 해석하여
console.log(person["name"]); // Lee
console.log(person[name]); // ReferenceError: name is not defined

// 6️⃣
console.log(person.age); // undefined
```

## 10-6. 프로퍼티 값 갱신

이미 존재하는 프로퍼티에 값을 할당하면 프로퍼티 값이 갱신된다.

```javascript
var person = {
  name: "Lee",
};

person.name = "Kim";
console.log(person); // {name: "Kim"}
```

## 10-7. 프로퍼티 동적 생성

존재하지 않는 프로퍼티에 값을 할당하면 프로퍼티가 동적으로 생성되어 추가되고 프로퍼티 값이 할당

```javascript
var person = {
  name: "Lee",
};

person.age = 20;
console.log(person); // {name: "Lee", age: 20}
```

## 10-8. 프로퍼티 삭제

delete 연산자로 객체의 프로퍼티를 삭제하며  
존재하지 않는 프로퍼티를 삭제하면 아무런 에러 없이 무시된다.

```javascript
var person = {
  name: "Lee",
};
person.age = 20;
console.log(person); // {name: "Lee", age: 20}

delete person.address; // 무시됨
delete person.age;
console.log(person); // {name: "Lee"}
```

## 10-9. ES6에서 추가된 객체 리터럴의 확장 기능

### 10-9-1. 프로퍼티 축약 표현

프로퍼티 값으로 변수를 사용할 경우, 변수 이름과 프로퍼티 키가 동일한 이름일 때 키 생략 가능

```javascript
// ES5
var x = 1,
  y = 2;
var obj = {
  x: x,
  y: y,
};

// ES6
let x = 1,
  y = 2;
const obj = {
  x,
  y,
};
```

### 10-9-2. 계산된 프로퍼티 이름

문자열 또는 문자열로 타입 변환할 수 있는 값으로 평가되는 표현식을 사용해 대괄호로 묶어 프로퍼티 키를 동적으로 생성할 수 있는데,  
ES6 에서는 객체 리터럴 내부에서도 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성할 수 있음

```javascript
// ES5
var prefix = "prop";
var i = 0;
var obj = {};

obj[prefix + "-" + ++i] = i;
obj[prefix + "-" + ++i] = i;
obj[prefix + "-" + ++i] = i;

console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3 }

// ES6
const prefix = "prop";
let i = 0;
const obj = {
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
};

console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3 }
```

### 10-9-3. 메서드 축약 표현

function 키워드를 생략한 축약 표현 가능  
( 메서드 축약 표현으로 정의한 메서드는 프로퍼티에 할당한 함수와 다르게 동작)

```javascript
// ES5
var obj = {
  name: "Lee",
  sayHi: function () {
    console.log("Hi! " + this.name);
  },
};

// ES6
const obj = {
  nmae: "Lee",
  sayHi() {
    console.log("Hi! " + this.name);
  },
};
```
