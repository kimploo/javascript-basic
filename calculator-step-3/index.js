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

const display = document.querySelector(".display");

document
  .querySelector(".buttons-container")
  .addEventListener("click", (event) => {
    const btn = event.target;
    if (!btn || btn.tagName !== "BUTTON") return;
    if (btn.classList.contains("number")) {
      if (state.mode === "start") {
        display.textContent = btn.textContent;
        state.left = btn.textContent;
        state.mode = "left";
      } else if (state.mode === "right") {
        if (state.right === null) {
          display.textContent = btn.textContent;
          state.right = btn.textContent;
        } else {
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
    } else if (btn.classList.contains("decimal")) {
      if (display.textContent.indexOf(".") !== -1) return;
      if (display.textContent.slice(-1) !== ".") {
        if (display.textContent === "0") {
          display.textContent = display.textContent + ".";
        } else {
          display.textContent = display.textContent + ".";
        }
      }
    } else if (btn.classList.contains("equal")) {
      const res = state.calculate();
      display.textContent = res;
      state.equal(res);
    }
    console.log("btn", btn.textContent, "state", state);
  });
