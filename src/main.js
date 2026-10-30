
const POKEMONS = window.pokemons.pokemon;
const image = document.getElementById("cards");
const arrayTipos = window.data.filterOptions(POKEMONS);

exibeMenuTipos();

const buildPokemonCard = pokemon => `
  <article class="card" tabindex="0">
    <span class="pokemon-number">#${pokemon.num}</span>
    <img src="${pokemon.img}" alt="${pokemon.name}" loading="lazy">
    <div class="name-card">
      <h3>${pokemon.name}</h3>
      <div class="type-list">${pokemon.type.map(type => `<span class="type-tag">${type}</span>`).join("")}</div>
    </div>
  </article>`;

function renderPokemons(pokemons) {
  image.innerHTML = pokemons.length
    ? pokemons.map(buildPokemonCard).join("")
    : "<p class=\"empty-state\">Nenhum Pokémon encontrado. Tente outro nome ou tipo.</p>";
  document.getElementById("results-count").textContent = `${pokemons.length} ${pokemons.length === 1 ? "resultado" : "resultados"}`;
}

renderPokemons(POKEMONS);

document.getElementById("option-order").addEventListener("change", orderPoke);
const optionOrder = document.getElementById("option-order");

function orderPoke() {
  const orderType = optionOrder[optionOrder.selectedIndex].value;
  const orderedPokemons = window.data.sort(POKEMONS, orderType);
  renderPokemons(orderedPokemons);
}

document.getElementById("search-form").addEventListener("submit", event => {
  event.preventDefault();
  searchPoke();
});

function searchPoke() {
  const namePok = document.getElementById("txt").value;
  const arrayRetornada = window.data.search(POKEMONS, namePok);
  renderPokemons(arrayRetornada);
}

function exibeMenuTipos() {
  document.getElementById("option-filter").innerHTML += `${arrayTipos.map(elem => `<option value="${elem}">${elem}</option>`)}`;
}

document.getElementById("option-filter").addEventListener("change", filterPoke);
const optionFilter = document.getElementById("option-filter");
const comparacao = document.getElementById("calculo");

function filterPoke() {
  const filterType = optionFilter.value;
  const arrayFiltrada = filterType === "all" ? POKEMONS : window.data.filter(POKEMONS, filterType);
  renderPokemons(arrayFiltrada);
  comparacao.querySelector(".comparation-poke").textContent = filterType === "all"
    ? ""
    : `Tipo ${filterType}: ${(arrayFiltrada.length * 100 / POKEMONS.length).toFixed(2)}% do total.`;
}

const calculateAllTypePercentages = () => {
  const typePercentages = arrayTipos.map((type) => {
    const typeArray = window.data.filter(POKEMONS, type);
    const percentage = (typeArray.length * 100 / 151).toFixed(2);

    return [type, +percentage];
  });

  typePercentages.unshift(["Tipos", "Percentual de tipos de Pokemon"]);

  return typePercentages;
};

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  const typePercentages = calculateAllTypePercentages();
  var data = google.visualization.arrayToDataTable(typePercentages);

  var options = {
    backgroundColor: "transparent",
    chartArea: { left: 0, top: 8, width: "100%", height: "90%" },
    legend: { position: "none" },
    pieSliceText: "label",
    pieStartAngle: 200,
    pieHole: 0.48,
    pieSliceBorderColor: "#191415",
    colors: ["#f04452", "#d8303e", "#b92431", "#ff6b73", "#8d1d28", "#f58978", "#72202a", "#c64d55", "#9d3c45", "#ee8b8b", "#5a2027", "#da6565", "#b34e58", "#f3a5a5", "#82313b"]
  };

  var chart = new google.visualization.PieChart(document.getElementById("graph"));
  chart.draw(data, options);
}
