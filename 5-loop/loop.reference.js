export function getCharCount(str) {
  let count = 0;
  for (let i = 0; i < str.length; i = i + 1) {
    count = count + 1;
  }
  return count;
}

function getCharCount2(str) {
  let count = 0;
  let i = 0;
  while (i < str.length) {
    count += 1;
    i += 1;
  }
  return count;
}

function getCharCount3(str) {
  let count = 0;
  let i = 0;
  for (; i < str.length; ) {
    count += 1;
    i += 1;
  }
  return count;
}

export function gugudan(dan) {
  let str = "";
  for (let i = 1; i < 10; i += 1) {
    if (i === 9) {
      str += dan * i;
    } else {
      str += dan * i + ",";
    }
  }
  return str;
}

export function countChar(str, char) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count = count + 1;
    }
  }

  return count;
}

export function replaceFromTo(str, from, to) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === from) {
      result = result + to;
    } else {
      result = result + str[i];
    }
  }

  return result;
}
