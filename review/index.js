// 배열 생성
const worldClasses = ["BTS", "봉준호", "손흥민", "여러분", "Let's go"];

// 배열 요소 추가, 삭제 (배열의 끝)
worldClasses.push("JavaScript");
console.log(worldClasses);
worldClasses.pop();
console.log(worldClasses);

// 배열 요소 추가, 삭제 (배열의 앞)
worldClasses.unshift("JavaScript");
console.log(worldClasses);
worldClasses.shift();
console.log(worldClasses);

// 배열 요소 조회 (읽기)
// 2번째 index에 손흥민
worldClasses[2];

// 배열 요소 순회 (0부터 끝까지 접근; iteration)
for (let i = 0; i < worldClasses.length; i += 1) {
  console.log(worldClasses[i]);
}

for (const wc of worldClasses) {
  console.log(wc);
}

worldClasses.forEach((wc) => {
  console.log(wc);
});

const foodItems = ["🍎", "🥕", "🍇", "🥦", "🍞", "🌽", "🍗", "🍅"];
// 사과의 index 찾기
let idx = -1;
for (let i = 0; i < foodItems.length; i += 1) {
  if (foodItems[i] === "🍎") {
    idx = i;
  }
}
console.log(idx);

idx = foodItems.indexOf("🍎");

// 사과 포함되어 있는지 확인하기
let isAppleInside = foodItems.includes("🍎");
console.log(isAppleInside);

// 채소만 가지고 있는 새로운 배열 만들기
// Sample array of food items with only emojis
// Function to filter out only vegetables
const vegetables = ["🥕", "🥦", "🌽", "🍅"];
function isVegetable(maybeVege) {
  if (vegetables.includes(maybeVege)) {
    return true;
  } else {
    return false;
  }
}

let newVegetables = [];
for (let i = 0; i < foodItems.length; i += 1) {
  for (let j = 0; j < vegetables.length; j += 1) {
    if (vegetables[j] === foodItems[i]) {
      newVegetables.push(foodItems[i]);
    }
  }
}

newVegetables = [];
for (let i = 0; i < foodItems.length; i += 1) {
  if (isVegetable(foodItems[i])) {
    newVegetables.push(foodItems[i]);
  }
}

const vegetablesOnly = foodItems.filter((item) => isVegetable(item));
console.log("Vegetables Only: ", vegetablesOnly);
// Output: Vegetables Only:  ["🥕", "🥦", "🌽", "🍅"]

// 채소인지 아닌지 이름 붙여주기
function labelFoodItem(item) {
  const vegetables = ["🥕", "🥦", "🌽", "🍅"];
  if (vegetables.includes(item)) {
    return `${item} (Vegetable)`;
  } else {
    return `${item} (Not Vegetable)`;
  }
}

newVegetables = [];
for (let i = 0; i < foodItems.length; i += 1) {
  newVegetables.push(labelFoodItem(foodItems[i]));
}
const vegetablesWithName = foodItems.map((item) => labelFoodItem(item));

// 채소인 배열과 채소가 아닌 배열로 나눠서 객체의 속성으로 저장하기
function separateFoodItems(obj, item) {
  const vegetables = ["🥕", "🥦", "🌽", "🍅"];
  if (vegetables.includes(item)) {
    obj.vegetables.push(item);
  } else {
    obj.nonVegetables.push(item);
  }
  return obj;
}
const foodItemsSeparated = foodItems.reduce(
  (acc, item) => separateFoodItems(acc, item),
  { vegetables: [], nonVegetables: [] },
);
