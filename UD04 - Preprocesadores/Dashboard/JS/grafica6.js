google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Tipo", "Porcentaje"],
    ["Gasolina", 58],
    ["Diesel", 32],
    ["Electrico", 10],
  ]);

  var options = {
    title: "Variacion por tipo de motor",
    pieHole: 0.4,
    width: 345,
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("donutchart")
  );
  chart.draw(data, options);
}
