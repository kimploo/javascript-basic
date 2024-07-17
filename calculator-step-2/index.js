const display = document.querySelector(".display");

document
  .querySelector(".buttons-container")
  .addEventListener("click", (event) => {
    const btn = event.target;
    if (!btn || btn.tagName !== "BUTTON") return;
    if (btn.classList.contains("number")) {
      if (display.textContent === "0") {
        display.textContent = btn.textContent;
      } else {
        display.textContent += btn.textContent;
      }
    } else if (btn.classList.contains("function")) {
      const f = btn.textContent;
      if (f === "C") {
        display.textContent = "0";
      }
    } else if (btn.classList.contains("operator")) {
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
    }
  });
