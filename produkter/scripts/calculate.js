var content;
var pricetable;
var button;

window.onload = function () {
    content = document.getElementById("content");
    pricetable = document.getElementById("pricetable");
    addColum();
    addRow();
    addButton();
 };

 function addColum() {
    let cellText;
    for (let i = 0; i < pricetable.rows.length; i ++) {
        if (i === 0) {
            let head = document.createElement("th");
            cellText = document.createTextNode("Summa");
            head.appendChild(cellText);
            pricetable.rows[i].appendChild(head);
        } else {
            pricetable.rows[i].insertCell().id = "summa";
        }
    }
 }

 function addRow() {
    let lastRow = pricetable.rows.length;
    var row = pricetable.insertRow(lastRow);
    row.id = "sumrow";
    for (let i = 0; i < pricetable.rows[0].cells.length; i++) {
        row.insertCell(i);
    }
 }

 function addButton() {
    button = document.createElement("button");
    button.innerHTML = "Beräkna pris";
    button.className = "btn btn-primary"
    document.getElementById("content").appendChild(button);
    button.addEventListener("click", function(){
        calculateProducts();
    }
    );
 }

 function calculateProducts() {
    let rows = pricetable.rows;
    let totalSum = 0;
    let numberOfProducts = 0;
    let lastRow = rows[rows.length -1];
    // Don't count the header or the sum row
    for (let i = 1; i < rows.length -1 ; i++)
    {
        let row = rows[i];
        let rowSum = parseInt(row.cells[row.cells.length - 3].innerHTML);
        let rowCount = parseInt(row.cells[row.cells.length - 2].getElementsByTagName("input")[0].value);
        row.cells[row.cells.length -1].innerHTML = rowSum * rowCount;
        totalSum += rowSum;
        numberOfProducts += rowCount;
    }
    lastRow.cells[lastRow.cells.length - 2].innerHTML = numberOfProducts;
    lastRow.cells[lastRow.cells.length - 1].innerHTML = totalSum;
 }