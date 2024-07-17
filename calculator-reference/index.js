const state = {
  left: "0",
  operator: null,
  right: null,
  mode: "start",
  reset() {
    state.left = "0";
    state.operator = null;
    state.right = null;
    state.mode = "start";
  },
  equal(res) {
    state.left = res;
    state.right = null;
    state.operator = null;
    state.mode = "start";
  },
  calculate() {
    if (state.left === null || state.right === null) throw "";
    const l = Number(state.left);
    const r = Number(state.right);
    const { operator } = state;

    if (operator === "+") return String(l + r);
    if (operator === "-") return String(l - r);
    if (operator === "*") return String(l * r);
    if (operator === "/") return String(l / r);
    if (r === 0) return "0";
    throw "";
  },
};

const ui = {
  display: document.querySelector(".display"),
  pushBtn(btn) {
    btn.classList.add("pushed");
  },
  releaseBtns() {
    const pushed = document.querySelectorAll("button.pushed");
    if (pushed) pushed.forEach((btn) => btn.classList.remove("pushed"));
  },
};
const display = ui.display;

const numberHandler = (btn) => {
  const num = btn.textContent;
  if (state.mode === "start") {
    display.textContent = num;
    state.left = num;
    state.mode = "left";
  } else if (state.mode === "right") {
    if (state.right === null) {
      display.textContent = num;
      state.right = num;
    } else {
      display.textContent += num;
      state.right += num;
    }
  } else {
    display.textContent += num;
    state.left += num;
  }
};

const functionHandler = (btn) => {
  const f = btn.textContent;
  if (f === "C") {
    state.reset();
    ui.releaseBtns();
    display.textContent = "0";
  }
  if (f === "±") {
    if (display.textContent[0] === "-") {
      const res = display.textContent.slice(1);
      if (state.mode === "right" && state.right) {
        state.right = res;
      } else {
        state.left = res;
      }
      display.textContent = res;
    } else {
      if (state.mode === "right" && state.right) {
        state.right = "-" + display.textContent;
      } else {
        state.left = "-" + display.textContent;
      }
      display.textContent = "-" + display.textContent;
    }
  }
  if (f === "%") {
    const res = String(Number(display.textContent) / 100);
    if (state.mode === "right" && state.right) {
      state.right = res;
    } else {
      state.left = res;
    }
    display.textContent = res;
  }
};

const decimalHandler = () => {
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
  ui.releaseBtns();
  ui.pushBtn(btn);
  if (!state.operator) {
    state.left = display.textContent;
    state.operator = btn.textContent;
    state.mode = "right";
  } else if (state.right) {
    const res = state.calculate();
    display.textContent = res;
    state.left = res;
    state.right = null;
    state.operator = btn.textContent;
    state.mode = "right";
  }
};

const equalHandler = () => {
  const res = state.calculate();
  display.textContent = res;
  state.equal(res);
  ui.releaseBtns();
};

document
  .querySelector(".buttons-container")
  .addEventListener("click", (event) => {
    const btn = event.target;
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
    console.log("btn", btn.textContent, "state", state);
  });

// buttons.forEach((button) =>
//   button.addEventListener("click", (event) => {
//     const btn = event.target;
//     if (btn && btn.classList.contains("button")) {
//       display.textContent = display.textContent + btn.textContent;
//     }
//   }),
// );
