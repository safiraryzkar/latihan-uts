function fetchData() {
  const url = document.getElementById("urlInput").value;

  fetch(url)
    .then(response => response.json())
    .then(data => displayData(data))
    .catch(error => console.error('Error:', error));
}

function displayData(data) {
  const outputContainer = document.getElementById("outputContainer");
  outputContainer.innerHTML = "";

  const table = document.createElement("table");
  const headerRow = document.createElement("tr");

  for (let key in data[0]) {
    const headerCell = document.createElement("th");
    headerCell.textContent = key;
    headerRow.appendChild(headerCell);
  }

  table.appendChild(headerRow);

  data.forEach(row => {
    const rowElement = document.createElement("tr");

    for (let key in row) {
      const cell = document.createElement("td");
      cell.textContent = row[key];
      rowElement.appendChild(cell);
    }

    table.appendChild(rowElement);
  });

  outputContainer.appendChild(table);
}
