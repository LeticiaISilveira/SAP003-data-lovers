
const POKEMONS = POKEMON.pokemon;
const image = document.getElementById("cards");

//MOSTRAR POKEMONS NA TELA
const buildPokemonCard = pokemon => `<div class="card"><img src="${pokemon.img}" /><div class="name-card"><p id="name">${pokemon.name}</p></div></div>`;
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
document.getElementById("btn-busca").addEventListener("click", strPoke);

function strPoke() {
  const str = document.getElementById("txt").value;
  const image = document.getElementById("cards");

  const filteredPokemons = POKEMONS.map(pokemon => {
    let pok = ""
    if (pokemon.name.toLowerCase().includes(str.toLowerCase())) {
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
function filter(arr, condition) {
  return (arr.filter(item => item.type.includes(condition)))
}

//FUNÇÃO CHAMANDO A OPÇÃO DO FILTRO
document.getElementById("option-filter").innerHTML += `${allTypes.map(elem => `<option value="${elem}">${elem}</option>`)}`
document.getElementById("option-filter").addEventListener("change", filter);
const optionFilter = document.getElementById("option-filter");

function filter() {
  const filterType = optionFilter.value;
  const comparacao = document.getElementById("comparation");

  let selecionado = []
  let tipo = 0;
  let resposta = ""

  for (pokemon of POKEMONS) {
    if (pokemon.type.includes(filterType)) {
      tipo ++;
      resposta += buildPokemonCard(pokemon);  
    }
  }
  comparacao.innerHTML = `<p> Pokemons desse tipo ${pokemon.name}  ${(tipo*100/151).toFixed(2)} ${"%"}</p>`
  return image.innerHTML = resposta
}

/*
//FUNÇÃO DO CÁLCULO
const banana = [];
let grass = 0
let poison = 0
let fire = 0
let flying = 0
let water = 0
let bug = 0
let normal = 0
let eletric = 0
let ground = 0
let fighting = 0
let psychic = 0
let rock = 0
let ice = 0
let ghost = 0
let dragon = 0
for (let pokemon of POKEMONS) {
  pokemon.type.map(elem =>{
    banana.push(elem)
    if (elem == "Grass") {
      grass++
    }
    if (elem == "Poison") {
      poison++
    }
    if (elem == "Fire") {
      fire++
    }
    if (elem == "Flying") {
      flying++
    }
    if (elem == "Water") {
      water++
    }
    if (elem == "Bug") {
      bug++
    }
    if (elem == "Normal") {
      normal++
    }
    if (elem == "Eletric") {
      eletric++
    }
    if (elem == "Ground") {
      ground++
    }
    if (elem == "Fighting") {
      fighting++
    }
    if (elem == "Psychic") {
      psychic++
    }
    if (elem == "Rock") {
      rock++
    }
    if (elem == "Ice") {
      ice++
    }
    if (elem == "Ghost") {
      ghost++
    }
    if (elem == "Dragon") {
      dragon++
    }
  });
}
console.log(fire)*/


/*olptionFilter.addEventListener("change", () => {
  buildPokemonCard(filter(POKEMONS, optionFilter.value))
 });*/

//FUNÇÃO DO CÁLCULO
/*let todos = 0;
let grass = 0
let poison = 0
let fire = 0
let flying = 0
let water = 0
let bug = 0
let normal = 0
let eletric = 0
let ground = 0
let fighting = 0
let psychic = 0
let rock = 0
let ice = 0
let ghost = 0
let dragon = 0
let total = 0
let tipo =0
 for (let pokemon of POKEMONS) {
   pokemon.type.map(elem => {
   
     if (elem == "Grass") {
       grass++
     }
     if (elem == "Poison") {
       poison++
     }
     if (elem == "Fire") {
       fire++
     }
     if (elem == "Flying") {
       flying++
     }
     if (elem == "Water") {
       water++
     }
     if (elem == "Bug") {
       bug++
     }
     if (elem == "Normal") {
       normal++
     }
     if (elem == "Eletric") {
       eletric++
     }
     if (elem == "Ground") {
       ground++
     }
     if (elem == "Fighting") {
       fighting++
     }
     if (elem == "Psychic") {
       psychic++
     }
     if (elem == "Rock") {
       rock++
     }
     if (elem == "Ice") {
       ice++
     }
     if (elem == "Ghost") {
       ghost++
     }
     if (elem == "Dragon") {
       dragon++
     }
   });
   const comparacao = document.getElementById("comparation");
   comparacao.innerHTML = `<p> Pokemons desse tipo  ${tipo*100/151}</p>`
 }*/


// console.log(todos);
// console.log(fire*100/151);

