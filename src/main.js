
const POKEMONS = window.pokemons.pokemon;

const image = document.getElementById("cards");

exibeMenuTipos();

//MOSTRAR POKEMONS NA TELA
//criar função
const buildPokemonCard = pokemon => `<div class="card"><img src="${pokemon.img}" /><div class="name-card"><p id="name">${pokemon.name}</p></div></div>`;
let pokemonImages = POKEMONS.map(buildPokemonCard);
image.innerHTML = pokemonImages.join("");

buildPokemonCard(POKEMONS);

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
  const arrayTipos = window.data.filterOptions(POKEMONS);
  document.getElementById("option-filter").innerHTML += `${arrayTipos.map(elem => `<option value="${elem}">${elem}</option>`)}`;
}

//FUNÇÃO FILTRAR
document.getElementById("option-filter").addEventListener("change", filterPoke);
const optionFilter = document.getElementById("option-filter");
const comparacao = document.getElementById("comparation");

function filterPoke() {
  let resposta = "";
  const filterType = optionFilter.value;
  const arrayFiltrada = window.data.filter(POKEMONS, filterType);
  arrayFiltrada.map(elem => resposta += buildPokemonCard(elem));

  comparacao.innerHTML = `<p> *Pokemons do tipo ${filterType} representam ${(arrayFiltrada.length * 100 / 151).toFixed(2)} ${"%"} do total.</p>`;
  return image.innerHTML = resposta;
}

