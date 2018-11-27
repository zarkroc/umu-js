var searchButton;
var searchWord;
var searchWordField;
var livsmedelTabell;

(function () {
    hideTable();
    searchButton = document.getElementById("sok-button");
    searchWordField = document.getElementById("livsmedelsSokOrd");
    livsmedelTabell = document.getElementsByTagName("tbody")[0];
    searchButton.addEventListener("click", function () {
        buttonSearch();
    });
})();

function buttonSearch() {
    searchWord = searchWordField.value;
    if (searchWord.length > 0) {
        clearTable();
        performSearch(searchWord);
    }

}

function performSearch(word) {
    let searchString = "https://webservice.informatik.umu.se/webservice_livsmedel/getlivsmedel.php?namn=" + searchWord;
    $.ajax({
        url: searchString,
        dataType: "jsonp",

        success: function (response) {
            if (response.livsmedel.length > 0) {
                printTable(response.livsmedel);
                showTable();
            } else {
                console.log("no result");
                hideTable();
                searchWordField.value = "";
                searchWordField.placeholder = "No search result";
            }
        }
    });
}

function printTable(data) {
    for (let index = 0; index < data.length; index++) {
        let lastRow = livsmedelTabell.rows.length;
        var row = livsmedelTabell.insertRow(lastRow);
        row.insertCell(0).innerHTML = data[index].namn;
        row.insertCell(1).innerHTML = data[index].energi;
        row.insertCell(2).innerHTML = data[index].kolhydrater;
        row.insertCell(3).innerHTML = data[index].protein;
        row.insertCell(4).innerHTML = data[index].fett;
    }
}

function showTable() {
    $("#tabell").show();
}


function hideTable() {
    $("#tabell").hide();
}
/*
Remove all but the first row.
*/
function clearTable() {
    livsmedelTabell.innerHTML = "";
}