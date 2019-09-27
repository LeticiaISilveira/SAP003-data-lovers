window.app = {
  filter,
  search,
  filterOptions
};





/*//ORDENAR NOME
function order(array, condition,compareAscending()) {
  return array.sort(item => item.type.includes(condition))
}*/
/*
array.sort(function (a, b) {
  return b.condition.localeCompare(a.condition)
})*/

//PESQUISAR NOME
function search(array, condition) {
  return array.filter(item => item.name.toLowerCase().includes(condition.toLowerCase()))
}

//SELECIONAR TIPOS
function filterOptions(arr) {
  const array = []
  for (let item of arr) {
    item.type.map(elem => array.push(elem));
  }
  return array.filter((elem, index) => array.indexOf(elem) === index);
}

//FILTRAR TIPO e CALCULO DE PORCENTAGENS RESPECTIVAS

function filter(array, condition) {
  return array.filter(item => item.type.includes(condition))
}






