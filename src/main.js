document.getElementById("btn-busca").addEventListener("click", message);

/*FUNÇÃO CLIQUE */
function message(event) {
  window.
  event.preventDefault();
  const str = document.getElementById("txt").value;
  
  /*FUNÇÃO FILTER*/
  const printpoke = ""
  const pokeSourch = POKEMONS.filter(x => x.name == str);
  const mapPokeSourch = pokeSourch.map( z => z.name + '<img src="${z.img}"/>');
    /*`<img src="${pokemon.img}">`*/
    printpoke.innerHTML = mapPokeSourch;
    mapPokeSourch.innerHTML
    document.getElementsByClassName("print").value = mapPokeSourch


  console.log(Object.keys(pokeSourch))
  console.log(pokeSourch)
  };
 
  
  

/*FUNÇÃO MENU*/
var veri = 1;
var trigger = document.getElementById('menu-trigger').addEventListener("click",function(){
var menu = document.getElementById('menu-hidde');
if (veri == 1) {
menu.style.right = "0px";
veri = 0;
}else{
menu.style.right = "-100%";
veri = 1;
}
})

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