// esta é uma função de exemplo
// veja como agregamos a função ao objeto global window
/*
const example = () => {
  return "example";
};

window.example = example;*/


app.data = {
  filter: filter,
  compareAscending: compareAscending,
  search: search
  
};

//FILTRAR TIPO
function filter(array, condition) {
  return array.filter(item => item.type.includes(condition))
}

/*//ORDENAR NOME
function filter(array, condition,compareAscending()) {
  return array.sort(item => item.type.includes(condition))
}*/

//PESQUISAR NOME
function search(array, condition) {
  return array.map(item => item.name.toLowerCase().includes(namePok.toLowerCase()))
}









