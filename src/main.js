
const POKEMONS = POKEMON.pokemon;
const image = document.getElementById("cards");

exibeMenuTipos()

//MOSTRAR POKEMONS NA TELA
//criar função
const buildPokemonCard = pokemon => `<div class="card"><img src="${pokemon.img}" /><div class="name-card"><p id="name">${pokemon.name}</p></div></div>`;
let pokemonImages = POKEMONS.map(buildPokemonCard);
image.innerHTML = pokemonImages.join('');

buildPokemonCard(POKEMONS);

/*
document.getElementById("option-order").addEventListener("change", order);
const optionOrder = document.getElementById("option-order");

function orderPoke() {
  const orderName = optionOrder.value;

  const orderedPokemons = app.order(POKEMONS, orderName) 
  buildPokemonCard(arrayFiltrada);
}*/

// ORDENAR por nome
document.getElementById("option-order").addEventListener("change", order);
const optionOrder = document.getElementById("option-order");



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
  console.log("chamou função")
  const namePok = document.getElementById("txt").value;

  const arrayRetornada = app.search(POKEMONS, namePok);
  console.log(arrayRetornada)
  let pokemonImages = arrayRetornada.map(buildPokemonCard);

  image.innerHTML = pokemonImages.join('');

  //buildPokemonCard(arrayRetornada)
}



//FUNÇÃO RETORNAR OPÇÃO DO FILTRO

function exibeMenuTipos() {
  const arrayTipos = app.filterOptions(POKEMONS)
  document.getElementById("option-filter").innerHTML += `${arrayTipos.map(elem => `<option value="${elem}">${elem}</option>`)}`
}

//FUNÇÃO FILTRAR
document.getElementById("option-filter").addEventListener("change", filterPoke);
const optionFilter = document.getElementById("option-filter");
const comparacao = document.getElementById("comparation")

function filterPoke() {
  let resposta = ""
  const filterType = optionFilter.value;
  const arrayFiltrada = app.filter(POKEMONS, filterType);
  arrayFiltrada.map(elem => resposta += buildPokemonCard(elem))

  comparacao.innerHTML = `<p> Pokemons desse tipo ${filterType}  ${(arrayFiltrada.length * 100 / 151).toFixed(2)} ${"%"}</p>`
  return image.innerHTML = resposta
}





