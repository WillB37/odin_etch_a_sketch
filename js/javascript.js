const container = document.querySelector("#container");

for (i = 0; i < 16; i++) {
  let row = document.createElement("div");
  row.id = `row${i}`;

  container.appendChild(row);

  let rowDiv = document.querySelector(`#row${i}`);

  for (column = 0; column < 16; column++) {
    let columnDiv = document.createElement("div");
    columnDiv.classList.add("cell");

    columnDiv.addEventListener("mouseenter", () => {
      columnDiv.style.background = "blue";
    })

    rowDiv.appendChild(columnDiv);
  }
}

function gridSizePrompt() {
  let sizeString = prompt("Enter grid size (1 - 100)", "16");
  let numberRegex = /^\d+$/;
  console.log(`String: ${sizeString}`)
  if (numberRegex.test(sizeString)) {
    console.log(Number(sizeString));
  } else {
    console.log('Not a number')
  }
}