// from data.js
var tableData = data;

// YOUR CODE HERE!
var ufo_table = d3.select("tbody");
console.log(tableData);

function displayData(tableData) {
    ufo_table.html("");
    tableData.forEach((ufoSightings) => {
        var row = ufo_table.append("tr");
        Object.entries(ufoSightings).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

var button = d3.select("#filter-btn");

//var form = d3.select("form");

//button.on("click", runEnter);
button.on("click", function(){


    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value").trim();

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    console.log(filteredData);

    ufo_table.html("");
    //displayData(filteredData);
    var result = {
        filteredData
    }

    if (result.filteredData.length !=0){
        displayData(filteredData);
    }
        else {
            ufo_table.append("tr").append("td").text("No data found..")
        }

    //inputElement.on("change", runEnter);

});

displayData(tableData);
var resetButton = d3.select("#reset-btn")
resetButton.on("click",function(){
    ufo_table.html("");
    displayData(tableData)
    console.log("table has been reset")
});