// from data.js
var tableData = data;
var tbody = d3.select("tbody");

data.forEach(d => {
  var row = tbody.append("tr");
  Object.entries(d).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

var people = data;

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function () {

  var inputValue = d3.select("#datetime").property('value');
  console.log(inputValue);

  var filteredData = data.filter(d => d.datetime === inputValue);


  // Then, select the unordered list element by class name
  var table = d3.select("tbody");
  table.html("");

  filteredData.forEach(d => {
    var row = tbody.append("tr");
    Object.entries(d).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    })
  });
});
