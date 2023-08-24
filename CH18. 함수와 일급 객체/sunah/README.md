# 18. 함수와 일급 객체

## 일급객체의 조건

1️⃣ 무명의 리터럴(함수 표현식<sup>[1](#sup1)</sup>)로 생성할 수 있다. (즉, 런타임에 생성이 가능)  
2️⃣ 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.  
3️⃣ 함수의 매개변수에 전달할 수 있다.  
4️⃣ 함수의 반환값으로 사용할 수 있다.

```javascript
// 1️⃣ 함수는 무명의 리터럴로 생성할 수 있다.
// 2️⃣ 함수는 변수에 저장할 수 있다.
// 런타임(할당 단계)에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당된다.

const increase = function (num) {
  return ++num;
};

const decrease = function (num) {
  return --num;
};

//2️⃣ 함수는 객체에 저장할 수 있다.
const auxs = { increase, decrease };

//2️⃣3️⃣4️⃣
function makeCounter(aux) {
  let num = 0;

  return function () {
    num = aux(num);
    return num;
  };
}

//3️⃣
const increaser = makeCounter(axus.increase);
console.log(increaser()); //1
console.log(increaser()); //2

//3️⃣
const decreaser = makeCounter(axus.decrease);
console.log(decreaser()); //-1
console.log(decreaser()); //-2
```

함수가 일급 객체라는 것은 함수를 객체와 동일하게 사용할 수 있다는 의미이다.  
객체는 값이므로 함수는 값과 동일하게 취급할 수 있다.  
따라서 함수는 값을 사용할 수 있는 곳(변수 할당문, 객체의 프로퍼티 값, 배열의 요소, 함수 호출의 인수, 함수 반환문)이라면 어디서든지 리터럴로 정의할 수 있으며 런타임에 함수 객체로 평가된다.

일급 객체로서 함수가 가지는 가장 큰 특징은  
일반 객체와 같이 함수의 매개변수에 전달할 수 있으며, 함수의 반환값으로 사용할 수도 있다는 것.

<span id="sup1">1:</span>
[18-1.js](./18-1.js)

```javascript
// 함수선언식 : 함수명이 정의되어 있고, 별도의 할당 명령이 없는 것
function sum(a, b) {
  return a + b;
}

// 함수표현식 : 정의한 function을 별도의 변수에 할당하는 것
const sum = function (a, b) {
  return a + b;
};
```

## 함수 객체의 프로퍼티

함수 = 객체. 즉 함수도 프로퍼티를 가질 수 있다.
