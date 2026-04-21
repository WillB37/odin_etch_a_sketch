const container = document.querySelector("#container");

for (i = 0; i < 16; i++) {
  let row = document.createElement("div");
  row.id = `row${i}`;

  container.appendChild(row);

  let rowDiv = document.querySelector(`#row${i}`);

  for (column = 0; column < 16; column++) {
    let columnDiv = document.createElement("div");
    columnDiv.classList.add("cell");
    columnDiv.textContent = `${i}:${column}`;

    rowDiv.appendChild(columnDiv);
  }
}
