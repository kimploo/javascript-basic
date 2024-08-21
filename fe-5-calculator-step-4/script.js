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
      if (display.textContent === "0") {
        display.textContent = btn.textContent;
      } else {
        display.textContent = display.textContent + btn.textContent;
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
    console.log("btn 조건 후", btn.textContent);
  });
