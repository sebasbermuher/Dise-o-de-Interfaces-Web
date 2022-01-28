google.charts.load("current", { packages: ["corechart", "bar"] });
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {
  var data = google.visualization.arrayToDataTable([
    ["Pais", "Poblacion 2021"],
    ["Australia", 49],
    ["Estados Unidos", 54],
    ["Dinamarca", 60],
    ["Canadá", 64],
    ["Suecia", 75],
    ["Alemania", 78],
    ["Holanda", 84],
    ["Francia", 87],
    ["Reino Unido", 89],
    ["Finlandia", 91],
  ]);

  var options = {
    title: "Países en los que es más barato tener un coche",
    chartArea: { width: "50%" },
    hAxis: {
      title: "% del salario para tener un coche",
      minValue: 0,
    },
    vAxis: {
      title: "Pais",
    },
  };

  var chart = new google.visualization.BarChart(
    document.getElementById("chart_div2")
  );

  chart.draw(data, options);
}
