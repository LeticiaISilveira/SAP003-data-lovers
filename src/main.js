
const POKEMONS = POKEMON.pokemon;
const image = document.getElementById("cards");

//MOSTRAR POKEMONS NA TELA
const buildPokemonCard = pokemon => `<div class="card"><img src="${pokemon.img}" /><div class="name-card"><p id="name">${pokemon.name}</p></div></div>`;
let pokemonImages = POKEMONS.map(buildPokemonCard);
image.innerHTML = pokemonImages.join('');

//data
function order(array, condition) {
  return array.sort(item => item.name.toLowerCase().includes(namePok.toLowerCase()))
}
//main
document.getElementById("option-order").addEventListener("change", order);
const optionOrder = document.getElementById("option-order");

function orderPoke() {
  const orderName = optionOrder.value;

  const orderedPokemons = app.order(POKEMONS, orderName) /*******/
  buildPokemonCard(arrayFiltrada);
}

//ORDENAR por nome
document.getElementById("option-order").addEventListener("change", order);
const optionOrder = document.getElementById("option-order");

function compareAscending(a, b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}

function order() {
  const orderType = optionOrder.value;
  const orderedPokemons = POKEMONS;
  if (orderType === "ascending") {
    orderedPokemons.sort(compareAscending); 
  } else {
    orderedPokemons.sort(compareAscending).reverse();
  }
  const pokeCards = orderedPokemons.map(buildPokemonCard);
  image.innerHTML = pokeCards.join('');
}



//FUNÇÃO EVENTO CLIQUE PESQUISA
document.getElementById("btn-busca").addEventListener("click", searchPok);

function searchPok() {
  const namePok = document.getElementById("txt").value;
  const arrayRetornada = app.search(POKEMONS, namePok);
  buildPokemonCard(arrayRetornada)
}


//FUNÇÃO RETORNAR OPÇÃO DO FILTRO

const array = [];
for (let pokemon of POKEMONS) {
  pokemon.type.map(elem => array.push(elem));
}

const allTypes = array.filter((elem, index) => array.indexOf(elem) === index);

document.getElementById("option-filter").innerHTML += `${allTypes.map(elem => `<option value="${elem}">${elem}</option>`)}`


//FUNÇÃO FILTRAR

document.getElementById("option-filter").addEventListener("change", filterPoke);
const optionFilter = document.getElementById("option-filter");

function filterPoke() {
  const filterType = optionFilter.value;

  const arrayFiltrada = app.filter(POKEMONS, filterType) 
  buildPokemonCard(arrayFiltrada);
}