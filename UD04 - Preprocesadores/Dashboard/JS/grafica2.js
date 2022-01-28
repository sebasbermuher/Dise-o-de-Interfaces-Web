// GRAFICA 2
google.charts.load("current", { packages: ["bar"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Año", "Electrico", "Diesel", "Gasolina"],
    ["2018", 31500, 35000, 34000],
    ["2019", 33000, 38000, 36000],
    ["2020", 36000, 40000, 38000],
    ["2021", 40000, 46000, 40500],
  ]);

  var options = {
    chart: {
      title: "Ventas de vehiculos",
      subtitle: "Diferentes combustibles",
    },
  };

  var chart = new google.charts.Bar(
    document.getElementById("columnchart_material")
  );

  chart.draw(data, google.charts.Bar.convertOptions(options));
}
