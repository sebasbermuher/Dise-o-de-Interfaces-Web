// GRAFICA 1
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn("string", "Topping");
  data.addColumn("number", "Slices");
  data.addRows([
    ["Seat", 8],
    ["Peugeot", 7],
    ["Toyota", 6],
    ["Volkswagen", 5.5],
    ["Hyundai", 5],
    ["Kia", 4],
    ["Renault", 4],
    ["Citroen", 3],
    ["Dacia", 2],
    ["BWM", 1],
  ]);

  // Set chart options
  var options = {
    title: "Marcas de coches mas vendidos en 2021",
    width: 300,
    height: 300,
  };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(
    document.getElementById("chart_div")
  );
  chart.draw(data, options);
}
