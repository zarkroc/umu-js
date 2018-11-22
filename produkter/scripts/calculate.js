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

window.onload = function () {
    content = document.getElementById("content");
    pricetable = document.getElementById("pricetable");
    addColum();
 };

 function addColum() {
    let cell = document.createElement("td");
    let head = document.createElement("th");
    let cellText;
    for (let i = 0; i < pricetable.length; i ++) {
        if (i === 0) {
            cellText = document.createTextNode("Summa");
            head.appendChild(cellText);
            pricetable[i].appendChild(head);
        } else {
            cellText = document.createTextNode("");
            cell.appendChild(cellText);
            pricetable[i].appendChild(cell);
        }
    }
 }