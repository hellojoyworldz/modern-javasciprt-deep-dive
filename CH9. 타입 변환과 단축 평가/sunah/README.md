# 9. 타입 변환과 단축 평가

## 9-1. 타입 변환이란?

기존 원시 값을 직접 변경하지 않고 사용하여 다른 타입의 새로운 원시 값을 생성하는 것(원시 값은 변경 불가능한 값)

1️⃣ 암묵적 타입 변환(타입 강제 변환): 개발자의 **의도와 상관없이** 타입이 자동으로 변환되는 것  
2️⃣ 명시적 타입 변환(타입 캐스팅): 개발자가 **의도적으로** 값의 타입을 변환하는 것

```javascript
// 1️⃣ 암묵적 타입 변환
var x = 10;
var str = x + ""; // 숫자 뒤에 빈 문자열을 붙여 강제 타입 변환
console.log(typeof str); // string
console.log(typeof x); // number -> 원시 값의 타입은 변경하지 않음
```

```javascript
// 2️⃣ 명시적 타입 변환
var x = 10;
var str = x.toString(); // 숫자에 toString()이라는 내장 함수를 붙여 타입 변환
console.log(typeof str); //string
console.log(typeof x); //number -> 원시 값의 타입은 변경하지 않음
```

## 9-2. 암묵적 타입 변환

코드의 문맥에 부합하지 않는 상황에서 **가급적 에러를 발생시키지 않도록** 압묵적 타입 변환을 통해 표현식을 평가한다.

### 9-2-1. 문자열 타입으로 변환

문자열 연결 연산자의 역할은 문자열 값을 만드는 것이 역할

1️⃣ 피연산자 중 문자열 타입이 아니면 문자열 타입으로 암묵적 타입 변환  
2️⃣ 템플릿 리터럴의 표현식 삽입은 표현식의 평가 결과를 문자열 타입으로 암묵적 타입 변환

```javascript
// 1️⃣
// 피연산자가 모두 문자열 타입이어야 하는 문맥에서
// 피연산자 중 하나 이상이 문자열이면 문자열 연결 연산자로 동작
1 +
  "2" // 2️⃣ 템플릿 리터럴의 결과는 문자열 타입 // '12'
  `1 + 1 = ${1 + 1}`; // "1 + 1 = 2"
```

```javascript
// 숫자 타입 +  '' => '문자열 타입으로 변환'
0 + ''  // '0'
-0 + '' // '0'
1 + '' // '1'
-1 + '' // '-1'
NaN + '' // 'NaN
Infinity + '' //'Infinity'
-Infinity + '' // '-Infinity'

// 불리언 타입 + ''
true + '' // 'true'
false + '' // 'false'

// null 타입 + ''
null + '' // 'null'

// undefined 타입 + ''
undefined + '' // 'undefined'

// 심벌 타입 + ''
(Symbol()) + '' // TypeError: Cannot convert a Symbol value to a string

// 객체 타입 + ''
({}) + '' // '[object Object]'
Math + '' // '[object Math]'
[] + '' // '[]'
[10,20] + '' // '[10,20]'
function(){} + '' // 'function(){}'
function(){return 1+2} + '' // 'function(){return 1+2}'
Array + '' // 'function Array() { [native code] }'
```

### 9-2-2. 숫자 타입으로 변환

산술 연산자의 역할은 숫자 값을 만드는 것

1️⃣ 산술 연산자의 피연산자 중에서 숫자 타입이 아닌 피연산자를 숫자 타입으로 암묵적 타입 변환  
2️⃣ 숫자 타입으로 변환할 수 없는 경우 결과는 NaN  
3️⃣ 비교 연산자는 피연산자를 숫자 타입으로 변환하여 비교  
4️⃣ 단항 연산자(피연산자가 1개인 연산자)는 숫자 타입이 아닌 피연산자를 숫자 타입으로 암묵적 타입 변환 수행

```javascript
// 1️⃣
1 - "1"; // 1 - 1   => 0
1 * "10"; // 1 * 10  => 10
10 / '2'; // 10 / 2  => 5
10 % '2' // 0

// 2️⃣
1 / "one"; // NaN

// 3️⃣
"1" > 0; // true
(1 / '2') <> 0 // true
```

```javascript
// 4️⃣
// ✔️ 빈 문자열 (''), 빈 배열([]), null, false 는 0 으로 타입 변환 수행
// 빈 배열이 아닌 배열, undefined는 변환되지 않아 NaN

// 문자열 타입
+"" + // 0 ✔️
  "0" + // 0
  "1" + // 1
  "string" - // NaN
  "" - //-0
  "0" - // -0
  "1" - // -1
  "string" + // NaN
  // + 불리언 타입
  true + // 1
  false - // 0 ✔️
  true - // -1
  false + // -0
  // + null 타입
  null - // 0 ✔️
  null + // -0
  // + undefined 타입
  undefined + // NaN
  // + symbol 심벌 타입
  Symbol() + // TypeError: Cannot convert a Symbol value to a number
  // + 객체 타입
  {} + // NaN
  [] + // 0 ✔️
  [10, 20] + // NaN
  function () {}; // NaN
```

### 9-2-3. 불리언 타입으로 변환

자바스크립트 엔진은  
1️⃣ 조건식의 평과 결과를 Falsy, Truthy 로 구분 한 다음음  
2️⃣ Falsy(거짓으로 평가되는 값) 값은 false,  
3️⃣ Truthy(참으로 평가되는 값) 값은 true로 암묵적 타입 변환한다.

1️⃣ `값으로 구분 -> 타입 변환`

```javascript
var x = 10;

// x가 0보다 큰지 판별하여
// Truthy 값을 주고 (조건식의 평가 결과를)
// true로 타입 변환 (불리언 타입으로 암묵적 타입 변환)
if (x > 0) {
  console.log("x는 0보다 크다");
}
```

2️⃣ false로 평가되는 Falsy :  
false, undefined, null, 0, -0, NaN, ''(빈 문자열)

3️⃣ true로 평가되는 Truthy :  
Falsy 값 외 모든 값

```javascript
if (!false) console.log("1");
if (!undefined) console.log("2");
if (!null) console.log("3");
if (!0) console.log("4");
if (!NaN) console.log("5");
if (!"") console.log("6");

if (!true) console.log("7");
if ("string") console.log("8");
if ({}) console.log("9");
if ([]) console.log("10");

// 1 2 3 4 5 6 7 8 9 10
```

## 9-3. 명시적 타입 변환

개발자의 의도에 따라 명시적으로 타입을 변경하는 방법

1️⃣ 표준 빌트인 생성자 함수(객체를 생성하기 위한 함수)를 new 연산자 없이 호출하는 방법  
2️⃣ 빌트인 메서드(자바스크립트에서 기본 제공하는 빌트인 객체의 메서드드) 사용  
3️⃣ 4️⃣ 암묵적 타입 변환

### 9-3-1. 문자열 타입으로 변환

문자열 타입이 아닌 값을 문자열 타입으로 변환하는 방법

1️⃣ String 생성자 함수 호출  
2️⃣ Object.prototype.toString 메서드 사용  
3️⃣ 문자열 연결 연산자 이용

```javascript
// 1️⃣ String 생성자 함수
String(1); // '1'
String(NaN); // 'NaN'
String(Infinity); // 'Infinity'
String(true); // 'true'
String(flase); // 'flase'

// 2️⃣ toString 메서드
(1).toString; // '1'
NaN.toString; // 'NaN'
Infinity.toString; // 'Infinity'
true.toString; // 'true'
flase.toString; // 'flase'

// 3️⃣ 문자열 연결 연산자 이용
1 + ""; // '1'
NaN + ""; // 'NaN'
Infinity + ""; // 'Infinity'
true + ""; // 'true'
false + ""; // 'flase'
```

### 9-3-2. 숫자 타입으로 변환

숫자 타입이 아닌 값을 숫자 타입으로 변환하는 방법

1️⃣ Number 생성자 함수 호출  
2️⃣ parseInt.parseFloat 함수 사용  
3️⃣ + 단항 산술 연산자  
4️⃣ \* 산술 연산자

```javascript
// 1️⃣ Number 생성자 함수 호출
Number("0"); // 0
Number("-1"); // -1
Number("10.53"); // 10.53
Number(true); // 1
Number(false); // 0

Number(""); //0
Number([]); // 0
Number(null); // 0

Number(undefined); //NaN
Number([1, 2]); //NaN
Number({}); //NaN

// 2️⃣ parseInt.parseFloat 함수 사용
// 문자열만 숫자 타입으로 변환 가능
parseInt("0"); // 0
parseInt("-1"); // -1
parseInt("10.53"); // 10.53

parseInt(true); // NaN

// 3️⃣ + 단항 산술 연산자
+"0"; // 0
+"-1"; // -1
+"10.53"; // 10.53
+true; // 1
+false; // 0

// 4️⃣ * 산술 연산자
"0" * 1; // 0
"-1" * 1; // -1
"10.53" * 1; // 10.53
true * 1; // 1
false * 1; // 0
```

### 9-3-3. 불리언 타입으로 변환

불리언 타입이 아닌 값을 불리언 타입으로 변환

1️⃣ Boolean 생성자 함수 호출  
2️⃣ !! : 부정 논리 연산자를 두 번 사용

```javascript
// 1️⃣ Boolean 생성자 함수 호출
Boolean(''); // false
Boolean('x'); // true
Boolean('false'); // true

Boolean(0); // false
Boolean(1); // true
Boolean(2); // true
Boolean(NaN); // false
Boolean(Infinity); // true

Boolean(null); // false

Boolean(undefined); //false

Boolean({}); // true
Boolean([]); // true

2️⃣ !!
!!'';
!!'x';
!!'false';

!!0; // false
!!1; // true
!!2; //true
!!NaN; // false
!!Infinity; // true

!!null // false

!!undefined //false

!!{}; // true
!![]; // true


```

👉잠깐정리

1️⃣ 단항 연산자(+) 붙으면 숫자 0으로 타입 변환 :  
false, null, 빈 문자열 (''), 빈 배열([])

2️⃣ false로 평가되는 Falsy :  
false, undefined, null, 0, -0, NaN, ''(빈 문자열)

|             | false | undefined | null  |   0   |  1   |  NaN  | ''(빈 문자열) | [](빈 배열) |  {}  |
| ----------- | :---: | :-------: | :---: | :---: | :--: | :---: | :-----------: | :---------: | :--: |
| 숫자 타입   |   0   |    NaN    |   0   |   0   |  1   |  NaN  |       0       |      0      | NaN  |
| 불리언 타입 | false |   false   | false | false | true | false |     false     |    true     | true |

## 9-4. 단축 평가

### 9-4-1. 논리 연산자를 사용한 단축 평가

단축평가

- 논리 연산의 결과를 결정하는 피연산자를 타입 변환하지 않고 그대로 반환
- 표현식을 평가하는 도중에 평가 결과가 확정된 경우 나머지 평가 과정을 생략

논리 연산자

- 논리합(||) 또는 논리곱(&&) 연산자 표현식은 언제나 2개의 피연산자 중 어느 한쪽으로 평가
- 논리합 또는 논리곱 연산자 표현식의 평가 결과는 불리언이 아닐 수 있다.
- 좌항에서 우항으로 평가 진행

1️⃣ 논리곱(&&) 연산자는 첫 번째 피연산자가 false 면 false 반환. 두 피연산자가 모두 true 여야 true 반환.  
2️⃣ 논리합(||) 연산자는 첫 번째 피연산자가 true 면 true 반환.

| 단축 평가 표현식    | 평가 결과 |
| ------------------- | --------- |
| true && anyting     | anyting   |
| false && anyting    | false     |
| true \|\| anything  | true      |
| false \|\| anything | anything  |

```javascript
1️⃣
'Cat' && 'Dog'; // Dog
// 'Cat' => true
// 'Dog' => true
// 논리 연산의 결과를 결정하는 두 번째 피연산자 'Dog' 반환

2️⃣
'Cat' || 'Dog'; // Cat
// 'Cat' => true
// 논리 연산의 결과를 결정하는 첫 번째 피연산자 'Cat' 반환
```

3️⃣ 단축 평가로 if문 대체

```javascript
// 조건이 Truth 값일 때 &&
var done = true;
var message = "";

if (done) message = "완료";
message = done && "완료";

// 조건이 Falsy 값일 때 ||
var done = false;
var message = "";
if (!done) message = "미완료";
message = done || "미완료";
```

4️⃣ 객체를 가리키기를 기대하는 변수가 null, undefined가 아닌지 확인하고 프로퍼티를 참조할 때

```javascript
var elem = null;
var value = elem.value; // TypeError: Cannot read property 'value' of null
// 변수의 값이 객체가 아니라 null 이라서
// 프로퍼티를 참조하면 타입 에러가 발생하며 프로그램 강제 종료

var value2 = elem && elem.value; //null
// elem이 null 이므로 Falsy 값. elem 반환
```

5️⃣ 함수 매개변수에 기본값을 설정할 때

```javascript
function getStr(str) {
  return str.length;
}
// 함수를 호출할 때 인수를 전달하지 않으면 undefined가 할당
getStr(); // Uncaught TypeError

function getStringLength(str) {
  str = str || ""; // str이 undefined면 ''(빈 문자열) 반환
  return str.legnth;
}
getStringLength(); // 0
getStringLength("hi"); // 2
```

### 9-4-2. 옵셔널 체이닝 연산자 (ES11에서 도입)

1️⃣ 좌항의 피연산자가 null, undefined일 경우 undefined, 아니면 우항의 프로퍼티 참조(객체의 프로퍼티에 접근해 프로퍼티 값을 참조)  
2️⃣ 좌항의 피연산자가 Falsy 값(false, undefined, null, 0, -0, NaN, '') 이라도 undefined, null가 아니면 우항의 프로퍼티 참조

```javascript
// 1️⃣
var elem = { num: 1 };
var value = elem?.num; // elem.num => 1
var value2 = elem.value; // elem.value => undefined

// 2️⃣
var str = "";
var length = str && str.length; // ''
var length2 = str?.length; // 0
```

### 9-4-3. null 병합 연산자 (ES11에서 도입)

1️⃣ 좌항의 피연산자가 null 또는 undefined인 경우 우항의 피연산자를 반환하고, 그렇지 않으면 좌항의 피연산자를 반환  
2️⃣ 좌항의 피연산자가 Falsy 값(false, undefined, null, 0, -0, NaN, '') 이라도 undefined, null 가 아니면 좌항의 피연산자를 그대로 반환

```javascript
1️⃣
var foo = null ?? 'default string'; // 'default string'

2️⃣
// 논리연산자(||)를 사용한 단축 평가는 Falsy 값인 0 이나 '' 도 기본값으로 유효하다면 예기치 않은 동작이 발생할 수 있다.
var foo = '' || 'defulat string'; // 'default string'
var foo = '' ?? 'default string'; // ''
```
