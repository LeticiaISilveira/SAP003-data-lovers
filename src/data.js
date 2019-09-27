app = {
  filter,
  search,
  filterOptions
};





/*//ORDENAR NOME
function order(array, condition,compareAscending()) {
  return array.sort(item => item.type.includes(condition))
}*/

//PESQUISAR NOME
function search(array, condition) {
  return array.map(item => item.name.includes(condition))
/*return array.map(item => item.name.toLowerCase(condition).includes(array.toLowerCase(condition)))*/
}

//SELECIONAR TIPOS
function filterOptions(arr){
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






