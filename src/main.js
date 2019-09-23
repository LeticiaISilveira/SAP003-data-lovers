/*FUNÇÃO QUE APRESENTA TODOS OS POKEMÓNS NA TELA*/
const POKEMONS = POKEMON.pokemon;
const image = document.getElementById("img-pokemon");
const namePok = POKEMONS.name;

 
/*const pokemonImages = POKEMONS.map(pokemon => pokemon.name + `<img src=${pokemon.img}>`);
 image.innerHTML = pokemonImages.join('');*/


//FUNÇÃO DE APARECER OS CARDS
 const pokemonImages = POKEMONS.map(pokemon => 
  `<div class = "card">
    <div class = "card-pokemon">
    <img src = "${pokemon.img}">
      <span class = "name"> ${pokemon.name}.${pokemon.id} tipo:${pokemon.type}</span>
    </div>
  </div>`);
 image.innerHTML = pokemonImages;  

 
  
 
//FUNÇÃO CHAMANDO A OPÇÃO DO FILTRO
 function selecionados (arr){
   image.innerHTML = "";
    arr.forEach(pokemon => {
     image.innerHTML += `
     <div class ="card">
     <h4>${pokemon.name}</h4>
     <img src="${pokemon.img}" />
     <p> Tipo: ${type}.join(",") </p>
    </div> `
   });
 }
  

const optionFilter = document.getElementById("option-filter")
 
//FUNÇÃO DAS OPÇÕES DOS TIPOS
const array = [];
   for (let pokemon of POKEMONS){
     pokemon.type.map(elem => array.push(elem));    
  }
const allTypes = array.filter((elem, index) => array.indexOf(elem) === index);
document.getElementById("option-filter").innerHTML += `${allTypes.map(elem => `<option value="${elem}">${elem}</option>`)}`

optionFilter.addEventListener("change", () => {
 selecionados(app.filter(POKEMONS, optionFilter.value))
});

//FUNÇÃO DE ORDENAR por ID
//FUNÇÃO EVENTO SELECT
document.getElementById("option-order").addEventListener("change", order);

function order() {
  const optionOrder = document.getElementById("option-order");
  const orderType = optionOrder[optionOrder.selectedIndex].value;

  if (orderType == "ascending") {
    image.innerHTML = pokemonImages.reverse().join('');
  } else {
    image.innerHTML = pokemonImages.reverse().join('')
  }
}



// const filterpoke = filter(POKEMONS, optionFilter.value)

 

/*function filter(arr, condition){
const optionFilter = document.getElementById("option-filter");
const filterType = [optionFilter.selectedIndex].value;
let resposta = ""*/


/*let pokeFilter = POKEMONS.filter(pokemon => {
  if( filterType == pokemon.type.includes()){
    resposta += `<img src="${pokemon.img}">`
  }
  return image.innerHTML = resposta
});*/

/*for(item of POKEMONS){
  if (filterType == POKEMONS.type) {
   resposta += `<img src="${POKEMONS.img}">`
  }
}
return image.innerHTML = resposta*/





/*FUNÇÃO EVENTO CLIQUE PESQUISA
document.getElementById("btn-busca").addEventListener("click", strPoke);

function strPoke() {
  const str = document.getElementById("txt").value;
  let pok = ""

  const pokeSourch = POKEMONS.filter(pokemon =>{
      if (str == pokemon.type){
        pok += `<img src="${pokemon.img}">`
      }
   return image.innerHTML = pok
    

  });
}*/

    //(quero retornar a imagem)
    //resposta.push(filterType)
  
  /*const poke = document.getElementById("Grass").value*/
  
  /*const rEncode = window.cipher.encode(offset, str);
  document.getElementById("txt").value = rEncode;
  } 
}

  resposta = POKEMONS.filter(filterType => filterType == "Grass")

/*else {
  const rDecode = window.cipher.decode(offset, str);
  document.getElementById("txt").value = rDecode;
}*/



/*function order() {
  const optionOrder = document.getElementById("option-order");
  const orderType = [optionOrder.selectedIndex].value;
  
  if (orderType == "ascending") {

    const POKEMONS = POKEMON.pokemon;
    const image = document.getElementById("img-pokemon");
   
    const pokemonImages = POKEMONS.map(pokemon => `<img src="${pokemon.img}">`);
    image.innerHTML = pokemonImages.join('');
  }else{
    image.innerHTML = pokemonImages.reverse().join('')
  }
}*/



/*
for (let poke of POKEMONS){
    var image = document.getElementById("img-pokemon");
    var name = document.getElementById("img-pokemon");
    image.innerHTML += `<img src="${poke.img}"</br></br>${poke.name}</br>`


const image = document.getElementById("img-pokemon");
  //(POKEMONS.forEach(poke =>  image.innerHTML += `<img src="${poke.img}">`))

const pokemonImages = POKEMONS.map(pokemon => `<img src="${pokemon.img}">`);

image.innerHTML = pokemonImages.join(''); 

for(let poke=0;poke<10;poke++){
  var image = document.getElementById("img-pokemon");
  var name = document.getElementById("img-pokemon");
  image.innerHTML += `<img src="${POKEMONS[poke].img}"</br></br>${POKEMONS[poke].name}</br>`

}*/

//FUNÇÃO CLICK 
/*function message(event) {
  window.
  event.preventDefault();
  const str = document.getElementById("txt").value;
}*/



// console.log(mappokemon);

/*const pokemonfiltrado = POKEMONS.filter(a => a.type === "Grass",
"Poison")

// const peixinho = banaa.forEach(element => element.name)

console.log(pokemonfiltrado);*/

/*const pokemonImages = POKEMONS.map(pokemon => 
  '<div class = "card">
    <div class = "card-pokemon">
    <img src = "${pokemon.img}">
      <span class = "name"> ${pokemon.name}.${pokemon.id} tipo:${pokemon.type}</span>
    </div>
  </div>');
 image.innerHTML = pokemonImages; */