const header = document.getElementById("header");
const main = document.getElementById("main");
const input = document.getElementById("filter-text");
const button = document.getElementById("filter-button");
const select = document.getElementById("filter-select");
const more = document.getElementById("more");
const tothetop = document.getElementById("tothetop");

const currentDogs = [];

const render = {
  dog(item) {
    const dogImgDiv = document.createElement("div");
    dogImgDiv.classList.add("flex-item");
    dogImgDiv.innerHTML = `
      <img src=${item}>
    `;
    main.appendChild(dogImgDiv);
    return;
  },

  dogs(res) {
    res.message.forEach(function (item) {
      currentDogs.push(item);
      render.dog(item);
    });
    return;
  },

  options(res) {
    Object.keys(res.message).forEach(function (item) {
      const option = document.createElement("option");
      option.textContent = item;
      option.value = item;
      select.appendChild(option);
    });
    return;
  },
};

const api = {
  getRandomDogs() {
    const apiRandomDogs = "https://dog.ceo/api/breeds/image/random/42";
    return fetch(apiRandomDogs).then((res) => res.json());
  },

  getAllBreeds() {
    const apiAllBreeds = "https://dog.ceo/api/breeds/list/all";
    return fetch(apiAllBreeds).then((res) => res.json());
  },
};

window.addEventListener("load", function () {
  // 강아지 사진 뿌리기
  api.getRandomDogs().then((res) => render.dogs(res));
  api.getAllBreeds().then((res) => render.options(res));
});

button.addEventListener("click", function () {
  main.innerHTML = "";
  let filteredDogs = currentDogs.filter(function (item) {
    return item.indexOf(input.value) !== -1;
  });
  input.value = "";
  filteredDogs.forEach((item) => render.dog(item));
});

select.addEventListener("change", function () {
  main.innerHTML = "";
  let filteredDogs = currentDogs.filter(
    (item) => item.indexOf(select.value) !== -1,
  );

  filteredDogs.forEach((item) => render.dog(item));
});

more.addEventListener("click", function () {
  // 강아지 사진 더 불러와서 추가하고 뿌리기
  api.getRandomDogs().then((res) => render.dogs(res));
});

tothetop.addEventListener("click", function () {
  window.scrollTo({ top: 0 });
});
