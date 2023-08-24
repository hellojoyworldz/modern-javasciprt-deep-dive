# CH23. 실행 컨텍스트

실행 컨텍스트란?  
자바스크립트의 동작 원리를 담고 있는 핵심 개념으로,  
실행할 코드에 제공할 환경 정보들을 모아놓은 객체

즉, 자바스크립트 코드가 실행되는 환경이다.  
모든 자바스크립트 코드는 실행 컨텍스트 내부에서 실행된다고 생각하면 된다.

## 소스코드의 타입

소스코드의 타입에 따라 실행 컨텍스트를 생성하는 과정과 관리 내용이 다르기 때문에  
ECMAScript 사양은 소스코드를 4가지 타입으로 구분한다.

1. 전역코드
2. 함수코드
3. eval 코드
4. 모듈 코드

![Alt text](image.png)

## 소스코드의 평가와 실행

자바스크립트 엔진은 소스코드의 평가와 소스코드의 실행 과정으로 나누어 처리한다.

![Alt text](image-1.png)

```javascript
var name = "zero";
function wow(word) {
    console.log(word + "" + name);
}
function say() {
    var name = "nero";
    console.log(name);
    wow("hello");
}
say();
```

https://junilhwang.github.io/TIL/Javascript/Domain/ Execution-Context/  
https://velog.io/@edie_ko/js-execution-context  
https://east-star.tistory.com/14
