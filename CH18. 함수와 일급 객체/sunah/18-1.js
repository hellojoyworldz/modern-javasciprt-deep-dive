// 참조: https://velog.io/@rkio/Javascript-%ED%95%A8%EC%88%98-%EC%84%A0%EC%96%B8%EC%8B%9D-vs-%ED%95%A8%EC%88%98-%ED%91%9C%ED%98%84%EC%8B%9D-vs-%ED%99%94%EC%82%B4%ED%91%9C-%ED%95%A8%EC%88%98

/*
// 함수 선언식
function getTriangleArea(base, height) {
  let triangleArea = (base * height) / 2;
  return triangleArea;
}

// 함수 표현식
// 익명 함수의 형태를 가짐
const getTriangleArea = function (base, height) {
  let triangleArea = (base * height) / 2;
  return triangleArea;
};

// 화살표 함수
// 익명 함수의 형태를 가짐
const getTriangleArea = (base, height) => {
  let triangleArea = (base * height) / 2;
  return triangleArea;  
};
*/

console.log(함수선언식(3, 5));
//console.log(함수표현식(3, 5)); // ReferenceError: Cannot access '함수표현식' before initialization
console.log(익명함수(3, 5)); // ReferenceError: Cannot access '익명함수' before initialization

function 함수선언식(base, height) {
  let triangleArea = (base * height) / 2;
  return triangleArea;
}

const 함수표현식 = function (base, height) {
  let triangleArea = (base * height) / 2;
  return triangleArea;
};

const 익명함수 = (base, height) => {
  let triangleArea = (base * height) / 2;
  return triangleArea;
};
