require("../src/data.js");

describe("function sort", () => {
  it("is a function", () => {
    expect(typeof window.data.sort).toBe("function");
  });
});
it("returns `pokemons ordenados por nome - crescente`", () => {
  expect(window.data.sort([
    {"name": "Charmander", "type": ["Fire"]},
    {"name": "Pikachu", "type": ["Electric"]},
    {"name": "Bulbasaur", "type": ["Grass", "Poison"]}
  ], "ascending", "name" )).toEqual([
    {"name": "Bulbasaur", "type": ["Grass", "Poison"]}, 
    {"name": "Charmander", "type": ["Fire"]},
    {"name": "Pikachu", "type": ["Electric"]}      
  ]);
}); 

describe("function search", () => {
  it("is a function", () => {
    expect(typeof window.data.search).toBe("function");
  });
});
it("returns `pokemon filtrado por nome`", () => {
  expect(window.data.search([
    {"name": "Charmander", "type": ["Fire"]},
    {"name": "Pikachu", "type": ["Electric"]},
    {"name": "Bulbasaur", "type": ["Grass", "Poison"]}
  ], "Pikachu", "name" )).toEqual([
    {"name": "Pikachu", "type": ["Electric"]}      
  ]);
}); 

describe("function filter", () => {
  it("is a function", () => {
    expect(typeof window.data.filter).toBe("function");
  });
});
it("returns `pokemons filtrados por tipo`", () => {
  expect(window.data.filter([
    {"name": "Bulbasaur", "type": ["Grass", "Poison"]}, 
    {"name": "Charmander", "type": ["Fire"]},
    {"name": "Pikachu", "type": ["Electric"]}  
  ], "Electric", "type" )).toEqual([
    {"name": "Pikachu", "type": ["Electric"]}   
  ]);
}); 

