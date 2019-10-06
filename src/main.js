
const POKEMONS = window.pokemons.pokemon;
const image = document.getElementById("cards");
const arrayTipos = window.data.filterOptions(POKEMONS);

exibeMenuTipos();

//MOSTRAR POKEMONS NA TELA
//criar função
const buildPokemonCard = pokemon => `<div class="card"><img src="${pokemon.img}" /><div class="name-card"><h4><p id="name">${pokemon.name}</p></h4></div></div>`;
let pokemonImages = POKEMONS.map(buildPokemonCard);
image.innerHTML = pokemonImages.join("");

buildPokemonCard(POKEMONS);

//FUNÇÃO ORDENAR
document.getElementById("option-order").addEventListener("change", orderPoke);
const optionOrder = document.getElementById("option-order");

function orderPoke() {
  const orderType = optionOrder[optionOrder.selectedIndex].value;
  const orderedPokemons = window.data.sort(POKEMONS, orderType);
  let pokemonImages = orderedPokemons.map(buildPokemonCard);
  image.innerHTML = pokemonImages.join("");

}

//FUNÇÃO EVENTO CLIQUE PESQUISA
document.getElementById("btn-busca").addEventListener("click", searchPoke);

function searchPoke() {
  const namePok = document.getElementById("txt").value;
  const arrayRetornada = window.data.search(POKEMONS, namePok);
  let pokemonImages = arrayRetornada.map(buildPokemonCard);
  image.innerHTML = pokemonImages.join("");

  //buildPokemonCard(arrayRetornada)
}

//FUNÇÃO RETORNAR OPÇÃO DO FILTRO

function exibeMenuTipos() {
  document.getElementById("option-filter").innerHTML += `${arrayTipos.map(elem => `<option value="${elem}">${elem}</option>`)}`;
}

//FUNÇÃO FILTRAR
document.getElementById("option-filter").addEventListener("change", filterPoke);
const optionFilter = document.getElementById("option-filter");
const comparacao = document.getElementById("calculo");

function filterPoke() {
  let resposta = "";
  const filterType = optionFilter.value;
  const arrayFiltrada = window.data.filter(POKEMONS, filterType);
  arrayFiltrada.map(elem => resposta += buildPokemonCard(elem));
  comparacao.innerHTML = `<p> Pokemons do tipo ${filterType} representam ${(arrayFiltrada.length * 100 / 151).toFixed(2)} ${"%"} do total.</p>`;
  return image.innerHTML = resposta;
}

const calculateAllTypePercentages = () => {
  const typePercentages = arrayTipos.map((type) => {
    const typeArray = window.data.filter(POKEMONS, type);
    const percentage = (typeArray.length * 100 / 151).toFixed(2);

    return [type, +percentage];
  });

  typePercentages.unshift(['Tipos', 'Percentual de tipos de Pokemon']);

  return typePercentages;
}


 
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  const typePercentages = calculateAllTypePercentages();
  var data = google.visualization.arrayToDataTable(typePercentages);

var options = {
  legend: true,
  pieSliceText: 'label',
  title: 'Pokemons por tipo',
  pieStartAngle: 200,
  chartArea: {
    backgroundColor: '#29220A'
  },
  /*chartArea:{backgroundColor:{stroke:"blue"}},*/
 
  colors:['#181407','#29220A','#3A2F0B','#5F4C0B','#886A08','#B18904','#DBA901','#FFBF00','#FACC2E','#F7D358','#F3F781','#F2F5A9','#F5F6CE','#F5ECCE','black']
};

  var chart = new google.visualization.PieChart(document.getElementById('graph'));
  chart.draw(data, options);
}
