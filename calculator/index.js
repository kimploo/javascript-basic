/**
 * 숫자 계산을 위한 값 모음입니다.
 * @property {string} left 계산을 위한 숫자 중 첫 번째 숫자입니다.
 * @property {string} operator 어떤 계산을 할지 정하는 연산자입니다.
 * @property {string} right 계산을 위한 숫자 중 두 번째 숫자입니다.
 * @example
 * 2 + 5 = 7
 * {
 *  left: "2",
 *  operator: "+",
 *  right: "5"
 * }
 */
const values = {
  left: "0",
  operator: "",
  right: "",
};

const resetValue = () => {
  values.left = "0";
  values.operator = "";
  values.right = "";
};

const getState = (values) => {
  const { left, operator, right, result } = values;
  if (!left || left === "0") return "start";
  if (left && !operator) return "left";
  if (left && operator) return "right";
  if (left && operator && right && result) return "end";
};

const display = document.querySelector(".display");

const releaseBtns = () => {
  const pushed = document.querySelectorAll("button.pushed");
  if (pushed) pushed.forEach((btn) => btn.classList.remove("pushed"));
};

const calculate = () => {
  // values.right = display.textContent;
  const left = Number(values.left);
  const right = Number(values.right);
  if (!left || !right) throw "";
  const { operator } = values;

  if (operator === "+") return String(left + right);
  if (operator === "-") return String(left - right);
  if (operator === "*") return String(left * right);
  if (operator === "/") return String(left / right);
  if (right === 0) return "0";
  throw "";
};

const numberHandler = (btn) => {
  if (display.textContent === "0") {
    display.textContent = btn.textContent;
    values.left = btn.textContent;
  } else if (getState(values) === "right" && !values.right) {
    display.textContent = btn.textContent;
    values.right += btn.textContent;
  } else if (getState(values) === "right" && values.right) {
    display.textContent += btn.textContent;
    values.right += btn.textContent;
  } else {
    display.textContent += btn.textContent;
    values.left += btn.textContent;
  }
};

const functionHandler = (btn) => {
  const f = btn.textContent;
  if (f === "C") {
    resetValue();
    releaseBtns();
    display.textContent = "0";
  }
  if (f === "±") {
    if (display.textContent[0] === "-") {
      const res = display.textContent.slice(1);
      if (getState(values) === "right" && values.right) {
        values.right = res;
      } else {
        values.left = res;
      }
      display.textContent = res;
    } else {
      if (getState(values) === "right" && values.right) {
        values.right = "-" + display.textContent;
      } else {
        values.left = "-" + display.textContent;
      }
      display.textContent = "-" + display.textContent;
    }
  }
  if (f === "%") {
    const res = String(Number(display.textContent) / 100);
    if (getState(values) === "right" && values.right) {
      values.right = res;
    } else {
      values.left = res;
    }
    display.textContent = res;
  }
  return;
};

const decimalHandler = (btn) => {
  if (display.textContent.indexOf(".") !== -1) return;
  if (display.textContent.slice(-1) !== ".") {
    if (display.textContent === "0") {
      display.textContent = display.textContent + ".";
    } else {
      display.textContent = display.textContent + ".";
    }
  }
};

const operatorHandler = (btn) => {
  releaseBtns();
  btn.classList.add("pushed");
  if (!values.operator) {
    values.left = display.textContent;
    values.operator = btn.textContent;
  } else if (values.right) {
    const res = calculate();
    display.textContent = res;
    values.left = res;
    values.right = "";
    values.operator = btn.textContent;
  }
};

const equalHandler = () => {
  const res = calculate();
  display.textContent = res;
  values.left = res;
  values.right = "";
  releaseBtns();
};

document
  .querySelector(".buttons-container")
  .addEventListener("click", (event) => {
    const btn = event.target;
    const state = getState(values);
    if (!btn || btn.tagName !== "BUTTON") return;
    if (btn.classList.contains("number")) {
      numberHandler(btn);
    } else if (btn.classList.contains("function")) {
      functionHandler(btn);
    } else if (btn.classList.contains("operator")) {
      operatorHandler(btn);
    } else if (btn.classList.contains("decimal")) {
      decimalHandler();
    } else if (btn.classList.contains("equal")) {
      equalHandler();
    }
    console.log("btn", btn.textContent, "state", state, "values", values);
  });

// buttons.forEach((button) =>
//   button.addEventListener("click", (event) => {
//     const btn = event.target;
//     if (btn && btn.classList.contains("button")) {
//       display.textContent = display.textContent + btn.textContent;
//     }
//   }),
// );
