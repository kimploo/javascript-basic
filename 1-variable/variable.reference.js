// let은 선언 키워드입니다. 변수를 선언할 수 있습니다.
let num; // 변수 num의 선언
num = 10; // 변수 num에 숫자값 10 할당

// 변수 선언과 할당을 동시에 하는 것을 초기화라고 합니다.
let greeting = "hello world"; // 변수 greeting을 선언하고 문자열 "hello world"를 할당

// 초기화 하지 않은 변수에는 undefined라는 값이 담깁니다.
let emptyVar;

// (같은 스코프에서는) 이름이 같은 변수를 중복 선언할 수 없습니다. (재선언 불가)
// let num // Uncaught SyntaxError: Identifier 'num' has already been declared

// const도 선언 키워드입니다. 변수를 선언할 수 있습니다.
const MAX_NUM = Number.MAX_SAFE_INTEGER; // JavaScript에서 표현 가능한 최대 정수 값

// const는 선언과 동시에 할당해야 합니다. 재할당이 불가합니다.
// MAX_NUM = 10; // Uncaught TypeError: Assignment to constant variable

// 재할당이 없는 변수로 예상되면 우선 const로 선언하세요.
const num2 = 42;

// 먼 옛날 var라는 선언 키워드가 있었습니다.
// 이 친구도 상당히 아프기 때문에 사용 자체를 권장하지 않습니다. 혹시 궁금하다면 면접볼 때 쯤 공부 추천합니다.
var hello = "world";

/**
 * TODO:
 * 아래 빈 공간에 코드를 추가로 작성하여 variable.spec.js의 모든 테스트를 통과합니다.
 * - 기존 위에 작성되어 있는 코드의 오류가 있다면 수정합니다.
 * - num에 42를 할당합니다.
 * - MAX_NUM은 JavaScript에서 표현 가능한 최대 정수 값을 유지합니다.
 * - 새로운 변수 affirmation를 만들고, 문자열 '프론트엔드 개발자 되기'을 할당합니다.
 */

num = 42;
const affirmation = "프론트엔드 개발자 되기";

// 테스트를 위한 코드로, 수정하지 않습니다.
export { num, emptyVar, greeting, MAX_NUM, num2, affirmation };
