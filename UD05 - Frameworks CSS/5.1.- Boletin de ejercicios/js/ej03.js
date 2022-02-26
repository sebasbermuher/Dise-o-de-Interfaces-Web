// document.getElementById("cargar_margaritas").onclick = verMargaritas();

window.onload = inicio;

function inicio() {
  document
    .getElementById("cargar_margaritas")
    .addEventListener("click", verMargaritas);
  document.getElementById("cargar_mojito").addEventListener("click", verMojito);
  document.getElementById("cargar_ron").addEventListener("click", verRon);
}

function verMargaritas(e) {
  const imageDiv = document.querySelector(".margaritas");
  let lista = document.createElement("ul");
  imageDiv.append(lista);

  fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      for (let i = 0; i < 4; i++) {
        let imageElement = document.createElement("img");
        imageElement.src = data.drinks[i].strDrinkThumb;

        let elementoli = document.createElement("li");
        lista.append(elementoli);

        elementoli.append(imageElement);
      }
    })
    .catch((err) => console.log(err));

  //para que no se vuelva abrir el contenido del boton
  e.target.removeEventListener(e.type, verMargaritas);
}

function verMojito(e) {
  const imageDiv = document.querySelector(".mojito");
  let lista = document.createElement("ul");
  imageDiv.append(lista);

  fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      for (let i = 0; i < data.drinks.length; i++) {
        let imageElement = document.createElement("img");
        imageElement.src = data.drinks[i].strDrinkThumb;

        let elementoli = document.createElement("li");
        lista.append(elementoli);

        elementoli.append(imageElement);
      }
    })
    .catch((err) => console.log(err));

  //para que no se vuelva abrir el contenido del boton
  e.target.removeEventListener(e.type, verMojito);
}

function verRon(e) {
  const imageDiv = document.querySelector(".ron");
  let lista = document.createElement("ul");
  imageDiv.append(lista);

  fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=ron")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      for (let i = 0; i < data.drinks.length; i++) {
        let imageElement = document.createElement("img");
        imageElement.src = data.drinks[i].strDrinkThumb;

        let elementoli = document.createElement("li");
        lista.append(elementoli);

        elementoli.append(imageElement);
      }
    })
    .catch((err) => console.log(err));

  //para que no se vuelva abrir el contenido del boton
  e.target.removeEventListener(e.type, verRon);
}
