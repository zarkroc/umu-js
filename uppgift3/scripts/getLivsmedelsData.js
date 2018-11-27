var searchButton;
var searchWord;
var searchWordField;

(function() {
    hideTable();
    searchButton = document.getElementById("sok-button");
    searchWordField = document.getElementById("livsmedelsSokOrd");
    searchButton.addEventListener("click", function() {
        buttonSearch();
    });
})();

function buttonSearch() {
    searchWord = searchWordField.value;
    if (searchWord.length > 0)
    {  
        performSearch(searchWord);
        showTable();
    }

}

function performSearch(word) {
    let searchString = "https://webservice.informatik.umu.se/webservice_livsmedel/getlivsmedel.php?namn="+searchWord;
    $.ajax({
        url: searchString,
        dataType: "jsonp",
        data: {
            limit: 10,
            name: 'sa'
        },
        
        success: function (response) {
            console.log(response);
        }
    });
}

function showTable() {
    $("#tabell").show();
}


function hideTable() {
    $("#tabell").hide();
}


function printRange(rangeStart, rangeStop) {
    var tal = "";

    for (var y = rangeStart; y <= rangeStop; y++) {
        if (y === rangeStop) {
        tal += `${y}`;
        } else {
            tal += `${y},`;
        }
    }
    return tal;
}

