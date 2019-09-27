// esta é uma função de exemplo
// veja como agregamos a função ao objeto global window
/*
const example = () => {
  return "example";
};

window.example = example;*/



app = {
  filter,
  search,
  filterOptions
  
};

//FILTRAR TIPO

//FILTRAR TIPO e CALCULO DE PORCENTAGENS RESPECTIVAS

function filter(array, condition) {
  return array.filter(item => item.type.includes(condition))
}

/*//ORDENAR NOME
function order(array, condition,compareAscending()) {
  return array.sort(item => item.type.includes(condition))
}*/

//PESQUISAR NOME
function search(array, condition) {
  return array.map(item => item.name.toLowerCase().includes(namePok.toLowerCase()))
}

function filterOptions(arr){
  const array = []
  for (let item of arr) {
    item.type.map(elem => array.push(elem));
  }
  return array.filter((elem, index) => array.indexOf(elem) === index); 
}

window.app = {
  filter: filter,
  // compareAscending: compareAscending,
  search: search
};






