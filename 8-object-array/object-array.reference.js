const sampleCsvString = `Name,Age,City,Occupation
John Doe,30,New York,Engineer
Jane Smith,25,Los Angeles,Designer
Alice Johnson,28,Chicago,Developer
Bob Brown,35,Houston,Teacher
Charlie Davis,22,Philadelphia,Intern
Diana Green,32,Phoenix,Consultant
Edward White,29,San Antonio,Analyst
Fiona Black,27,Dallas,Teacher
George Clark,33,San Diego,Architect
Helen Martinez,31,San Jose,Doctor`;

export function csvToPersonObjArray(csvString) {
  csvString = csvString || sampleCsvString;
  const rows = csvString.trim().split("\n");
  const keys = rows[0].split(",");
  const res = [];
  for (let i = 1; i < rows.length; i += 1) {
    const cells = rows[i].split(",");
    const resObj = {};
    for (let j = 0; j < cells.length; j += 1) {
      resObj[keys[j]] = cells[j];
    }
    if (cells.length === keys.length && resObj["Name"]) {
      res.push(resObj);
    }
  }
  return res;
}

export function getAverageAge(csvString) {
  const persons = csvToPersonObjArray(csvString);
  const sum = persons.reduce((acc, person) => {
    return acc + Number(person.Age);
  }, 0);
  const avg = sum === 0 ? sum : sum / persons.length;

  return avg;
}

/**
 * CSV 문자열에서 'Alice'라는 이름을 가진 사람의 정보를 객체로 반환합니다.
 *
 * @param {string} csvString - CSV 형식의 문자열입니다. (example.csv를 참고하세요.)
 * @returns {Object|null} 'Alice'라는 이름을 가진 사람의 정보를 포함한 객체를 반환합니다. 찾을 수 없는 경우 null을 반환합니다.
 * @property {string} name - 이름
 * @property {string} age - 나이
 * @property {string} city - 도시
 * @property {string} occupation - 직업
 */
export function findAliceReturnObject(csvString) {
  const objArr = csvToPersonObjArray(csvString);
  return objArr.find((person) => person.Name.split(" ")[0] === "Alice");
}

/**
 * CSV 문자열에서 'Teacher' 직업을 가진 사람의 인덱스 목록을 반환합니다.
 *
 * @param {string} csvString - CSV 형식의 문자열입니다. (example.csv를 참고하세요.)
 * @returns {number[]} 'Teacher' 직업을 가진 사람들의 인덱스 배열을 반환합니다.
 */
export function findTeacherIndices(csvString) {
  const objArr = csvToPersonObjArray(csvString);
  return objArr.reduce((acc, person, idx) => {
    if (person.Occupation === "Teacher") {
      acc.push(idx);
    }
    return acc;
  }, []);
}
