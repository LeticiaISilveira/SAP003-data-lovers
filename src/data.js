window.data = {
  filter: filter,
  search: search,
  filterOptions: filterOptions,
  sort: sort
};

// ORDENAR por nome

function sort(array, condition) {
  return array.sort(function (a, b) {
    if (condition === "ascending") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });
}

//PESQUISAR NOME
function search(array, condition) {
  return array.filter(item => item.name.toLowerCase().includes(condition.toLowerCase()));
}

//SELECIONAR TIPOS
function filterOptions(arr) {
  const array = [];
  for (let item of arr) {
    item.type.map(elem => array.push(elem));
  }
  return array.filter((elem, index) => array.indexOf(elem) === index);
}

//FILTRAR TIPO e CALCULO DE PORCENTAGENS RESPECTIVAS

function filter(array, condition) {
  return array.filter(item => item.type.includes(condition));
}

