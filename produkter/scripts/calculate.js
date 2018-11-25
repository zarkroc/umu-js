/*
Assignment: 
1. Skapa saknade element med hjälp av DOM-funktionalitet
• Lägga till kolumnen med titeln ”Summa”.
• Lägga till en ny rad i slutet av tabellen. I denna rad skall sedan summor för antalet produkter
samt slutsumma för priset läggas. Denna rad ska tilldelas id=”sumrow”. Detta är viktigt
eftersom det finns en existerande CSS-stil för detta element.
• Skapa en knapp: <button>. Denna ska läggas in efter tabellen. Knappen ska ha texten
”Beräkna pris”. Ge gärna knappen klasserna btn och btn-primary för att ge den rätt stil. 

2. Summering
När användaren klickar på knappen ”Beräkna pris” ska scriptet summera varje produkt för sig
och sätta in dess summa i den sista cellen på respektive rad. Scriptet ska också summera det
totala antalet produkter och placera det längst ned i kolumnen för antalet, på raden med id
”sumrow”. Slutligen skall den totala prissumman beräknas och skrivas ut på raden ”sumrow”,
för kolumnen summa (se bilden nedan).

3. Ändring av antal och ny summering
Användaren skall nu kunna ändra antalet produkter genom att skriva in nya siffervärden i
inmatningsfälten. När användaren klickar på ”Beräkna pris” skall en ny beräkning enligt ovan
utföras.
4. Generell lösning
Din lösning ska vara generell, vilket innebär att lösningen inte ska vara beroende av att sidan
innehåller ett fast antal produkter. Du måste alltså se till att JavaScriptet calculate.js fungerar
även om produkter läggs till eller tas bort från tabellen. För att kontrollera detta rekommenderas
att du testar att helt enkelt lägga till fler rader i tabellen i filen index.html och därefter
kontrollerar så att din lösning fortfarande fungerar. 
*/

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