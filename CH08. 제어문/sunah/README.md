# 8. 제어문

제어문(control flow statement):
조건에 따라 코드 블록을 실행(조건문) 하거나 반복 실행(반복문) 할 때 사용한다.

## 8-1. 블록문(block statement/compound statement)

- 중괄호({})로 묶은 것으로 하나의 실행 단위로 취급한다.
- 블록문은 자체 종결성(언제나 문의 종료)을 갖기 때문에 끝에 세미콜론을 붙이지 않는다.

## 8-2. 조건문 (conditional statement)

- 주어진 조건식의 평가 결과에 따라 코드 블록(블록문)의 실행을 결정한다.
- 불리언 값으로 평가될 수 있는 표현식이다.

### 8-2-1. if..else 문

- 조건식의 논리적 참, 거짓에 따라 실행할 코드 블록을 결정한다.
- true 이면 if 문의 코드 블록, false 이면 else 문의 코드 블록이 실행한다.
- 블록 내 문이 하나뿐이라면 중괄호는 생략 가능하다.
- 조건식 내 값이 0일 경우 false로 암묵적 강제 변환된다.
- 삼항 조건 연산자로 바꿔 사용할 수 있다.

```javascript
if (조건식1) {
  // 조건식1이 true 일 때 이 코드 블록 실행
} else if (조건식2) {
  // 조건식2가 true 일 때 이 코드 블록 실행
} else {
  // 조건식1,2 모두 false 일 때 이 코드 블록 실행
}

// 블록 내 문이 하나라 중괄호 생략 가능
var num = 5;
var kind;
if (num > 0) kind = "양수";
else if (num < 0) kind = "음수";
else kind = "영";

// 위 코드를 삼항연산식으로
kind = num ? (num > 0 ? "양수" : "음수") : "영";
```

### 8-2-3-2. switch 문

- 주어진 표현식을 평가하여 그 값과 일치하는 표현식을 갖는 case 문으로 실행 흐름을 옮긴다.
- 표현식과 일치하는 case 문이 없다면 defalut 문으로 이동한다.(default 문은 선택사항)
- case 문의 마지막에는 break 문을 넣어 블록에서 탈출시켜야 한다. 그렇지 않으면 모든 case 문과 default 문을 실행하는 폴스루(fall through) 현상이 나타난다.
- default 문의 실행이 종료되면 switch 문을 빠져나가므로 별도의 break 문이 필요 없다.

```javascript
var num = 5;
var kind;
switch (num) {
  case num > 0:
    kind = "양수";
    break;
  case num < 0:
    kind = "음수";
    break;
  default:
    kind = "영";
  // break 생략.
}
```

## 8-3. 반복문(loop statement)

- 조건식의 평가 결과가 참인 경우 코드 블록을 실행한다.
- 그 후 조건식을 다시 평가하여 참인 경우 코드 블록을 다시 실행한다.
- 조건식이 거짓일 때까지 반복한다.

### 8-3-1. for 문

- 조건식이 거짓으로 평가될 때까지 코드 블록을 반복 실행
- for 문은 반복 횟수가 명확할 때 주로 사용
- for 문의 변수는 i(iteration) 을 사용하는것이 일반적이다.
- for 문의 변수 선언문, 조건식, 증감식은 옵션이므로 반드시 사용할 필요는 없다.

```javascript
// for(변수 선언문 or 할당문; 조건식; 증감식){
//   조건식이 참일 때 반복 실행될 문;
// }

// 선언문, 조건식, 증감식 선언 X
for (;;) {
  //... 무한루프
}
```

### 8-3-2. while 문

- 조건식의 평가 결과가 참이면 코드 블록을 계속해서 반복 실행
- while 문은 반복 횟수가 불명확할 때 주로 사용
- while 문은 조건문의 평가 결과가 거짓이 되면 코드 블록 실행을 종료한다.
- 조건식의 평가 결과가 불리언 값이 아니면 불리언 값으로 강제 변환하여 논리적 참, 거짓을 구별한다.

```javascript
// 무한루프
while (true) {
  // ...
  // 무한루프를 돌 때 if 문으로 탈줄 조건을 만들고 break 문으로 코드 블록을 탈출한다
  if (조건) break;
}
```

### 8-3-3. do... while 문

- 코드 블록을 먼저 실행하고 조건식을 평가한다.
- 따라서 코드 블록은 무조건 한 번 이상 실행된다.

```javascript
var count = 0;

// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
do {
  console.log(count); // 0 1 2
  count++;
} while (count < 3); //
```

## 8-4. break 문

- 레이블 문(식별자가 붙은 문), 반복문, switch 문의 코드 블록을 탈출한다.
- 이 외 break 문을 사용하면 SyntaxError가 발생한다.
- break 문은 반복문을 더 이상 진행하지 않아도 될 때 불필요한 반복을 회피할 수 있어 유용하다.

```javascript
// foo 라는 식별자가 붙은 레이블 블록문
foo: {
  console.log(1); // 1
  break foo; // 빠져나옴옴
  console.log(2);
}
console.log("Done!"); // Done!
```

```javascript
var string = "Hello World.";
var search = "l";
var index;

for (var i = 0; i < string.length; i++) {
  if (string[i] === search) {
    // 문자열의 개별 문자가 'l' 이면
    index = i;
    break; // 빠져나온다다
  }
}

console.log(index); //2

// 위 코드와 동일 - String.prototype.indexOf
console.log(string.indexOf(search)); //2
```

## 8-5. continue 문

- 반복문의 코드 블록 실행을 현 지점에서 중단하고 반복문의 증감식으로 실행 흐름을 이동시킨다.
- break 문처럼 반복문을 탈출하지는 않는다.
- continue 문을 사용하지 않으면 if 문 내에 코드를 작성해야 한다.

```javascript
var string = "Hello World.";
var search = "l";
var count = 0;

for (var i = 0; i < string.length; i++) {
  // 문자열의 개별 문자가 'l' 이 아니면
  // 현 시점에서 실행을 중단하고 i++
  if (string[i] !== search) {
    continue;
  }

  //continue 문이 실행되면 이 문은 실행되지 않는다다
  count++;
}

// 위와 동일하게 동작작
for (var i = 0; i < string.length; i++) {
  if (string[i] === search) {
    count++;
  }
}

// String.prototype.match 메서드를 사용해도 같은 동작
// i: 대,소문자 없이 검색 , g: 패턴과 일치하는 모든 것 , m: 문자열의 행이 바뀌더라도 패턴 검색
const regexp = new RegExp(search, "g");
console.log(string.match(regexp).length); //3
```
