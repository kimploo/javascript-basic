// const csv = `Name,Age,City,Occupation
// John Doe,30,New York,Engineer
// Jane Smith,25,Los Angeles,Designer
// Alice Johnson,28,Chicago,Developer
// Bob Brown,35,Houston,Teacher
// Charlie Davis,22,Philadelphia,Intern
// Diana Green,32,Phoenix,Consultant
// Edward White,29,San Antonio,Analyst
// Fiona Black,27,Dallas,Teacher
// George Clark,33,San Diego,Architect
// Helen Martinez,31,San Jose,Doctor`;
const input = document.querySelector("input#csvFileInput");
input.style.opacity = 0;

document
  .getElementById("csvFileInput")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file && file.type === "text/csv") {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = function (e) {
        const csvContent = e.target.result;
        // console.log(csvContent);
        const table = renderTable(
          csvContent.split("\n").map((row) => row.split(",")),
        );
        const view = document.querySelector("#csvView");
        view.append(table);
        // console.log(table);
      };
    } else {
      alert("Please upload a valid CSV file.");
    }
  });

function csvToPeopleArray(csv) {
  const stringArray = csv.split("\n");
  const keys = stringArray[0].split(",");
  const people = stringArray.map((element) => {
    const values = element.split(",");
    return {
      [keys[0]]: values[0],
      [keys[1]]: values[1],
      [keys[2]]: values[2],
      [keys[3]]: values[3],
    };
  });
  return people;
}

function renderTable(array2D) {
  // <tr>
  //   <th scope="col">Name</th>
  //   <th scope="col">Age</th>
  //   <th scope="col">City</th>
  //   <th scope="col">Occupation</th>
  // </tr>
  const makeHeader = (tr, cell) => {
    const th = document.createElement("th");
    th.scope = "col";
    th.textContent = cell;
    tr.append(th);
    return tr;
  };

  // <tr>
  //   <th scope="row">Margaret Nguyen</th>
  //   <td>30</td>
  //   <td>New York</td>
  //   <td>Engineer</td>
  // </tr>
  const makeRow = (tr, cell, i) => {
    const th = document.createElement("th");
    if (i === 0) {
      th.scope = "row";
    }
    th.textContent = cell;
    tr.append(th);
    return tr;
  };

  const headerTr = document.createElement("tr");
  const header = array2D[0].reduce(makeHeader, headerTr);
  const rows = array2D.slice(1).map((row) => {
    const rowTr = document.createElement("tr");
    return row.reduce(makeRow, rowTr);
  });

  const table = document.createElement("table");
  table.append(header, ...rows);
  return table;
}

function HighlightCell(table, target) {
  const rows = Array.from(table.children);
  const cells = rows.map((row) => Array.from(row.children));
  for (let i = 0; i < cells.length; i += 1) {
    for (let j = 0; j < cells[i].length; j += 1) {
      if (!target) {
        cells[i][j].classList.remove("yellow-cell");
      } else if (
        typeof target === "function" &&
        target(cells[i][j].textContent)
      ) {
        cells[i][j].classList.add("yellow-cell");
      } else if (cells[i][j].textContent === target) {
        cells[i][j].classList.add("yellow-cell");
      }
    }
  }
}
