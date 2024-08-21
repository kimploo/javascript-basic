// 메시지 삭제
function deleteMsg(msg) {
  return msg.remove();
}

// 메시지 생성
function createMsg(text, container) {
  const msg = document.createElement("div");
  msg.classList.add("msg");

  const textSpan = document.createElement("span");
  textSpan.textContent = text;

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  deleteBtn.textContent = "🗑️";
  buttonContainer.append(deleteBtn);

  msg.append(textSpan, buttonContainer);
  msg.addEventListener("click", (event) => {
    // console.log(event);
    if (
      event.target.classList.contains("delete") &&
      event.target.tagName === "BUTTON"
    ) {
      deleteMsg(msg);
    }
  });

  container.prepend(msg);
  return msg;
}

function mainScript() {
  const form = document.querySelector("form.form-container");
  const container = document.querySelector("div.container");
  debugger;
  createMsg("Hello", container);
  createMsg("World", container);
  createMsg("JavaScript", container);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = event.target.querySelector("input.input");
    createMsg(input.value, container);
    input.value = "";
  });
}

mainScript();
