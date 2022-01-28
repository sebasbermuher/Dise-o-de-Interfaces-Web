google.charts.load("current", { packages: ["table"] });
google.charts.setOnLoadCallback(drawTable);

function drawTable() {
  var data = new google.visualization.DataTable();
  data.addColumn("string", "Marca");
  data.addColumn("string", "Modelo");
  data.addColumn("number", "Unidades Vendias");
  data.addRows([
    ["Dacia", "Sandero", { v: 24.035, f: "24.035" }],
    ["Seat", "León", { v: 23.582, f: "23.582" }],
    ["Nissan", "Qashqai", { v: 19.818, f: "19.818" }],
    ["Renault", "Clio", { v: 17.816, f: "17.816" }],
    ["Toyota", "Corolla", { v: 15.478, f: "15.478" }],
    ["Seat", "Arona", { v: 15.365, f: "15.365" }],
    ["Peugeot", "2008", { v: 15.225, f: "15.225" }],
    ["Peugeot", "3008", { v: 14.651, f: "14.651" }],
    ["Renault", "Captur", { v: 14.196, f: "14.196" }],
    ["Seat", "Ateca", { v: 14.139, f: "14.139" }],
  ]);

  var table = new google.visualization.Table(
    document.getElementById("table_div")
  );

  table.draw(data, {
    showRowNumber: true,
    width: "100%",
    height: "100%",
  });
}
