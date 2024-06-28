const num = 3.14159;

// TODO: toFixed를 활용하여 num을 정수로 변경하여 numToFixed에 할당하세요
let numToFixed = num.toFixed();

const two = 2;

// TODO: two의 제곱 (2^2)를 numPower에 할당하세요
let numPower = Math.pow(2, 2);

// TODO: two의 제곱근을 numSqrt에 할당하세요
let numSqrt = Math.sqrt(2);

const greeting = "hello world";

// TODO: 문자열 greeting을 대문자로 바꿔 할당하세요.
let greetingToUpperCase = greeting.toUpperCase();

const school = "OZ";

// TODO: 문자열 greeting을 소문자로 바꿔 할당하세요
let schoolToLowerCase = school.toLowerCase();

// TODO: 아래 문자열을 이어붙여서(concat) frontEndDeveloper에 '프론트엔드 개발자', backendDeveloper에 '백엔드 개발자'를 할당하세요.
// 문자열을 합치는 방법에 대해서 공부해 보세요.
const frontEnd = "프론트엔드";
const backEnd = "백엔드";
const developer = "개발자";

let frontEndDeveloper = frontEnd + " " + developer;
let backendDeveloper = `${backEnd} ${developer}`;

// TODO: 문자열 메서드 slice()를 사용하여 아래 변수를 완성하세요.
const str = "The quick brown fox jumps over the lazy dog.";

// 'the lazy dog'를 slice하여 할당하세요.
let theLazyDog = str.slice(-13, -1);

// 'the lazy dog'를 slice하여 할당하세요.
let theQuickBrownFox = str.slice(0, 19);

// 'jumps'를 slice하여 할당하세요.
let jumps = str.slice(20, 25);

// 테스트를 위한 코드로, 수정하지 않습니다.
export {
  num,
  numToFixed,
  numPower,
  numSqrt,
  greeting,
  greetingToUpperCase,
  school,
  schoolToLowerCase,
  frontEnd,
  backEnd,
  developer,
  frontEndDeveloper,
  backendDeveloper,
  str,
  theLazyDog,
  theQuickBrownFox,
  jumps,
};
