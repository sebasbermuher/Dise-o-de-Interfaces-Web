google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
    ["Año", "Seat", "Toyota", "Dacia", "Cupra", "Chevrolet", "Analisis"],
    ["2017", 805, 400, 200, 300, 700, 805],
    ["2018", 700, 320, 500, 401, 650, 700],
    ["2019", 480, 470, 424, 602, 800, 800],
    ["2020", 785, 516, 620, 968, 900, 968],
    ["2021", 950, 691, 540, 836, 815, 950],
  ]);

  var options = {
    title: "Crecimiento de las marcas",
    hAxis: { title: "Month" },
    seriesType: "bars",
    series: { 5: { type: "line" } },
  };

  var chart = new google.visualization.ComboChart(
    document.getElementById("line_chart")
  );
  chart.draw(data, options);
}
