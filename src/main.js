
const POKEMONS = POKEMON.pokemon;
const image = document.getElementById("cards");
const name = document.getElementById("")

//MOSTRAR POKEMONS NA TELA
const buildPokemonCard = pokemon => `<div class="card"><img src="${pokemon.img}" /><p id="name">${pokemon.id}-${pokemon.name}</p></div>`;
const pokemonImages = POKEMONS.map(buildPokemonCard);
image.innerHTML = pokemonImages.join('');


//ORDENAR por ID
//FUNÇÃO EVENTO SELECT
document.getElementById("option-order").addEventListener("change", order);

function order() {
  const optionOrder = document.getElementById("option-order");
  const orderType = optionOrder[optionOrder.selectedIndex].value;

  if (orderType == "ascending") {
    image.innerHTML = pokemonImages.reverse().join('');
  } else {
    image.innerHTML = pokemonImages.reverse().join('');
  }
}

//ORDENAR por NOME
/*
document.getElementById("option-order-alpha").addEventListener("change", orderAlpha);
pokemonName = POKEMONS.name

function orderAlpha() {
  const optionOrderAlpha = document.getElementById("option-order-alpha");
  const orderType = optionOrderAlpha[optionOrderAlpha.selectedIndex].value;
  let newOrder = "";
  if (orderType == "ascending-alpha") {
    newOrder = pokemonName.sort()
    console.log(newOrder)

    newOrder = pokemonImages.sort().join('');
    console.log(newOrder);

    image.innerHTML = newOrder;
  } else {
    image.innerHTML = pokemonImages.sort().reverse().join('');
  }
} Primeiro comparar names guardá-los em uma array e depois mostrar img de acordo com o nome ordenado
*/
document.getElementById("option-order-alpha").addEventListener("change", orderAlpha);

function orderAlpha() {
  const POKEMONS = POKEMON.pokemon;
  const optionOrderAlpha = document.getElementById("option-order-alpha");
  const orderType = optionOrderAlpha[optionOrderAlpha.selectedIndex].value;
  let newOrder = "";
 

  for (pokemon of POKEMONS) {
    if (orderType == "ascending-alpha"){
      
      console.log(POKEMONS.type)
    }
    newOrder+= `<div class="card"><img src="${pokemon.img}" /><p>${pokemon.name}</p></div>`
  }
  return image.innerHTML = newOrder
}


//PESQUISAR POKEMON POR NOME

//FUNÇÃO EVENTO CLIQUE PESQUISA
document.getElementById("btn-busca").addEventListener("click", strPoke);

function strPoke() {
  const str = document.getElementById("txt").value;
  const image = document.getElementById("cards");
  let pok = ""

  POKEMONS.filter(pokemon => {
    if (str == pokemon.name) {
      pok = pok += buildPokemonCard(pokemon)
    } else if (str == "") {
      pok += buildPokemonCard(pokemon)

    }
    return image.innerHTML = pok
  });
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





