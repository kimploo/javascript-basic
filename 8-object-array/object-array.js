/**
 * 주어진 객체의 특정 키에 값을 설정하고 업데이트된 객체를 반환합니다.
 *
 * @param {Object} obj - 값을 설정할 객체
 * @param {string} key - 값을 설정할 키
 * @param {*} value - 설정할 값
 * @returns {Object} 업데이트된 객체
 */
export function setPropertyValue(obj, key, value) {
  obj[key] = value;
  return obj;
}
