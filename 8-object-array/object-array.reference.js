export function setPropertyValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

export function getPropertyValue(obj, key) {
  return obj[key];
}

export function removeProperty(obj, key) {
  delete obj[key];
  return obj;
}

export function printAllProperties(obj) {
  let result = "";
  for (const key in obj) {
    // result += key + ": " + obj[key] + "\n";
    result += `${key}: ${obj[key]}`;
  }
  return result;
}

export function extend(obj1, obj2) {
  for (let key in obj2) {
    if (!(key in obj1)) {
      obj1[key] = obj2[key];
    }
  }
}
