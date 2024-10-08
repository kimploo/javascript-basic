const state = {
  left: "0", // 첫 번쨰 피연산자
  operator: null, // 연산자
  right: null, // 두 번쨰 피연산자
  mode: "start", // “start”, “left”, “right” (첫 번쨰 이어붙일지 두 번쨰 이어붙일지 ..)
  reset() {
    state.left = "0"; // 처음으로 돌아가는 것 이기 때문에.. 0으로 만들고
    state.operator = null;
    state.right = null;
    state.mode = "start";
  },
  equal(res) {
    state.left = res; // 연산의 결과가 display에 보이고, 다음 연산을 할 수도 있다.
    state.right = null;
    state.operator = null;
    state.mode = "start";
  },
  calculate() {
    if (state.left === null || state.right === null) throw "";
    // HTML에서 textContent를 불러오면 string입니다.
    const l = Number(state.left);
    const r = Number(state.right);
    const { operator } = state;

    if (operator === "+") return String(l + r); // 1 + 1 === 2 // '1' + '1' (숫자 버튼을 누르면)
    if (operator === "-") return String(l - r);
    if (operator === "*") return String(l * r);
    if (operator === "/") return String(l / r);
    if (r === 0) return "0";
    throw "";
  },
};

const display = document.querySelector(".display");
// document.getElementsByClassName("buttons-container")[0]

document
  .querySelector(".buttons-container")
  .addEventListener("click", (event) => {
    const btn = event.target;
    if (!btn || btn.tagName !== "BUTTON") {
      return;
    }
    // 버튼 요소만 실행된다

    if (btn.classList.contains("number")) {
      if (state.mode === "start") {
        display.textContent = btn.textContent;
        state.left = btn.textContent;
        state.mode = "left";
      } else if (state.mode === "right") {
        if (state.right === null) {
          // 두 번째 피연산자가 비어있는 경우에는 그냥 할당만 해야하고
          display.textContent = btn.textContent;
          state.right = btn.textContent;
        } else {
          // 두 번째 피연산자가 비어있는 경우에는 concat 문자열 이어붙이기
          display.textContent += btn.textContent;
          state.right += btn.textContent;
        }
      } else {
        display.textContent += btn.textContent;
        state.left += btn.textContent;
      }
    } else if (btn.classList.contains("function")) {
      const f = btn.textContent;
      if (f === "C") {
        state.reset();
        display.textContent = "0";
      }
    } else if (btn.classList.contains("operator")) {
      if (!state.operator) {
        // 첫 번쨰 피연산자가 작성 완료되었고, 그 다음에 연산자를 클릭할 때
        state.left = display.textContent;
        state.operator = btn.textContent;
        state.mode = "right";
      } else if (state.right) {
        // *
        // 첫 번쨰 피연산자가 작성 완료되었고, 연산자도 있고, 두 번쨰 피연산자도 작성 완료되었을 때
        const res = state.calculate();
        display.textContent = res;
        state.left = res;
        state.right = null;
        state.operator = btn.textContent;
        state.mode = "right";
      }
    } else if (btn.classList.contains("decimal")) {
      if (display.textContent.indexOf(".") !== -1) return;
      if (display.textContent.slice(-1) !== ".") {
        display.textContent = display.textContent + ".";
      }
    } else if (btn.classList.contains("equal")) {
      const res = state.calculate();
      display.textContent = res;
      state.equal(res);
      // state.left = res; // 연산의 결과가 display에 보이고, 다음 연산을 할 수도 있다.
      // state.right = null;
      // state.operator = null;
      // state.mode = "start";
    }
    console.log("btn 조건 후", btn.textContent, "state", state);
  });

// 따로따로 이벤트 핸들러 다는 것도 괜찮은 것 같다
// buttons.forEach((button) =>
//   button.addEventListener("click", (event) => {
//     const btn = event.target;
//     if (btn && btn.classList.contains("button")) {
//       display.textContent = display.textContent + btn.textContent;
//     }
//   }),
// );
