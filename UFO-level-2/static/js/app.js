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

button.on("click", function(){


    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");
    var inputCity = d3.select("#cityname");
    var inputState = d3.select("#stateinitials");
    var inputShape = d3.select("#shape");

    var inputValue = inputElement.property("value").trim();
    var inputCityName = inputCity.property("value").toLowerCase().trim();
    var inputStateName = inputState.property("value").toLowerCase().trim();
    var inputShapeValue = inputShape.property("value").toLowerCase().trim();

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    var filteredCity = tableData.filter(sighting => sighting.city === inputCityName);
    var filteredState = tableData.filter(sighting => sighting.state === inputStateName);
    var filteredShape = tableData.filter(sighting => sighting.shape === inputShapeValue);
    var filteredDCSSh = tableData.filter(sighting => sighting.datetime === inputValue && sighting.city === inputCityName && sighting.state === inputStateName && sighting.shape === inputShapeValue);
    var filteredDC = tableData.filter(sighting => sighting.city === inputCityName && sighting.datetime === inputValue);
    var filteredDS = tableData.filter(sighting => sighting.datetime === inputValue && sighting.state === inputStateName);
    var filteredCS = tableData.filter(sighting => sighting.city === inputCityName && sighting.state === inputStateName);
    var filteredDSh = tableData.filter(sighting => sighting.datetime === inputValue && sighting.shape === inputShapeValue);
    var filteredCSh = tableData.filter(sighting => sighting.city === inputCityName && sighting.shape === inputShapeValue);
    var filteredSSh = tableData.filter(sighting => sighting.state === inputStateName && sighting.shape === inputShapeValue);
    var filteredDCS = tableData.filter(sighting => sighting.datetime === inputValue && sighting.city === inputCityName && sighting.state === inputStateName);
    var filteredDCSh = tableData.filter(sighting => sighting.datetime === inputValue && sighting.city === inputCityName && sighting.shape === inputShapeValue);
    var filteredDSSh = tableData.filter(sighting => sighting.datetime === inputValue && sighting.state === inputStateName && sighting.shape === inputShapeValue);
    var filteredCSSh = tableData.filter(sighting => sighting.city === inputCityName && sighting.state === inputStateName && sighting.shape === inputShapeValue);

    console.log(filteredData);

    ufo_table.html("");
    
    var result = {
        filteredDCSSh, filteredDCS, filteredDCSh, filteredDSSh, filteredCSSh, filteredDS, filteredDC, filteredCS, filteredDSh, filteredCSh, filteredSSh, filteredData, filteredCity, filteredState, filteredShape
    }

    if (result.filteredDCSSh.length !=0){
        displayData(filteredDCSSh);
    }
        else if (result.filteredDCS.length !=0){
            displayData(filteredDCS);
        }

        else if (result.filteredDCSh.length !=0){
            displayData(filteredDCSh);
        }

        else if (result.filteredDSSh.length !=0){
            displayData(filteredDSSh);
        }

        else if (result.filteredCSSh.length !=0){
            displayData(filteredCSSh);
        }

        else if (result.filteredDS.length !=0){
           displayData(filteredDS);
        } 

        else if (result.filteredDC.length !=0){
           displayData(filteredDC);
        }

        else if (result.filteredCS.length !=0){
            displayData(filteredCS);
        }

        else if (result.filteredDSh.length !=0){
            displayData(filteredDSh);
        }

        else if (result.filteredCSh.length !=0){
            displayData(filteredCSh);
        }

        else if (result.filteredSSh.length !=0){
            displayData(filteredSSh);
        }

        else if (result.filteredData.length !=0){
            displayData(filteredData);
        }

        else if (result.filteredCity.length !=0){
            displayData(filteredCity);
        }    

        else if (result.filteredState.length !=0){
            displayData(filteredState);
        }

        else if (result.filteredShape.length !=0) {
            displayData(filteredShape);
        }

        else {
            ufo_table.append("tr").append("td").text("No data found..")
        }
});

displayData(tableData);
var resetButton = d3.select("#reset-btn")
resetButton.on("click",function(){
    ufo_table.html("");
    displayData(tableData)
    console.log("table has been reset")
});