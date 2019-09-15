document.getElementById("btn-busca").addEventListener("click", message);

/*FUNÇÃO CLIQUE */
function message(event) {
  window.
  event.preventDefault();
  const str = document.getElementById("txt").value;
  
  /*FUNÇÃO FILTER*/
  const pokeSourch = POKEMONS.filter(pokemon =>{
      if (str == pokemon.name)
   return `<img src="${pokemon.img}">`
    /*`<img src="${pokemon.img}">`*/

  });
  console.log(pokeSourch)
}

const POKEMONS = POKEMON.pokemon;
const image = document.getElementById("img-pokemon");
const namePok = POKEMONS.name;
/*
console.log(namePok)

const pokemonImages = POKEMONS.map(pokemon => `<img src="${pokemon.img}">`);

image.innerHTML = pokemonImages.join(''); 
*/

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