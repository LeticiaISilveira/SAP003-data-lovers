document.getElementById("btn-busca").addEventListener("click", message);
/*FUNÇÃO CLIQUE */
function message(event) {
 window.
 event.preventDefault();
 const str = document.getElementById("txt").value;
 
 /*FUNÇÃO FILTER*/
 const pokeSourch = POKEMONS.filter(pokemon =>{
  return (str == pokemon.name)
   /*<img src="${pokemon.img}">/
 });
 console.log(pokeSourch)
}
const POKEMONS = POKEMON.pokemon;
const image = document.getElementById("img-pokemon");
const namePok = POKEMONS.name;
console.log(namePok)
const pokemonImages = POKEMONS.map(pokemon => <img src="${pokemon.img}">);
image.innerHTML = pokemonImages.join('');
