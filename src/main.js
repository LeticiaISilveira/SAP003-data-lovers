
const POKEMONS = POKEMON.pokemon;
const image = document.getElementById("cards");

//MOSTRAR POKEMONS NA TELA
const buildPokemonCard = pokemon => `<div class="card"><img src="${pokemon.img}" /><p id="name">${pokemon.name}</p></div>`;
let pokemonImages = POKEMONS.map(buildPokemonCard);
image.innerHTML = pokemonImages.join('');

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
  const orderType = optionOrder[optionOrder.selectedIndex].value;
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
document.getElementById("btn-busca").addEventListener("click", strPoke);

function strPoke() {
  const str = document.getElementById("txt").value;
  const image = document.getElementById("cards");

  const filteredPokemons = POKEMONS.filter(pokemon => {
  let pok = ""
  if (pokemon.name.toLowerCase().includes(str)) {
    pok = buildPokemonCard(pokemon)
    }
    if (str == "") {
      pok = buildPokemonCard(pokemon)

    }
    return pok
  });
  
  image.innerHTML = filteredPokemons.join('');
}

//FUNÇÃO FILTRAR

const array = [];
for (let pokemon of POKEMONS) {
  pokemon.type.map(elem => array.push(elem));
}
const allTypes = array.filter((elem, index) => array.indexOf(elem) === index);

//FUNÇÃO DO FILTRO DOS TIPOS
function filter(arr, condicao) {
  console.log(arr.filter(item => item.type.includes(condicao)))
}

//FUNÇÃO CHAMANDO A OPÇÃO DO FILTRO
document.getElementById("option-filter").innerHTML += `${allTypes.map(elem => `<option value="${elem}">${elem}</option>`)}`

document.getElementById("option-filter").addEventListener("change", filter);

function filter() {
  const POKEMONS = POKEMON.pokemon;
  const optionFilter = document.getElementById("option-filter");
  const filterType = optionFilter[optionFilter.selectedIndex].value;
  let resposta = ""

  for (pokemon of POKEMONS) {
    if (pokemon.type.includes(filterType)) {
      resposta += buildPokemonCard(pokemon);
    }

  }
  return image.innerHTML = resposta
}
