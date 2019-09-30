require("../src/data.js");

// describe("function order", () => {
//   it("is a function", () => {
//     expect(typeof window.data.order).toBe("function");
//   });
// });
//   it("returns `ordenar`", () => {
//     expect(window.data.order([
//       {
//         "name": "Bulbasaur",
//         "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
//         "type": ["Grass", "Poison"]
//       },
//       {
//         "name": "Ivysaur",
//         "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
//         "type": ["Grass”,”Poison"]
//       },
//       {
//         "name": "Venusaur",
//         "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
//         "type": ["Grass", "Poison"]
//       }
//     ]
//     )).toEqual(
//       ["Grass", "Poison"]
//     );
//   });
// });

const filtrar=[{
  "type": ["Grass", "Poison"]
},
{
  "type": ["Grass”,”Poison"]
}];

describe("function filter", () => {
  it("essa é uma função de filtrar", () => {
    expect(typeof window.data.filter).toBe("function");
  });
  it( "está filtrando por tipo", () => {
    expect(window.data.filter(filtrar, "type")).toEqual([{
      "type": ["Grass", "Poison"]
    },
    {"type": ["Grass”,”Poison"]
    }]);
  });
});

//   it("returns `filtrar`", () => {
//     expect(window.data.filter([
//       {
//         "name": "Bulbasaur",
//         "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
//         "type": ["Grass", "Poison"]
//       },
//       {
//         "name": "Ivysaur",
//         "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
//         "type": ["Grass”,”Poison"]
//       },
//       {
//         "name": "Venusaur",
//         "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
//         "type": ["Grass", "Poison"]
//       }
//     ], 
//     )).toEqual(
//       ["Grass", "Poison"]
//     );
//   });
// });

const pesquisar = [
  {
    "name": "Bulbasaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
    "type": ["Grass", "Poison"]
  },
  {
    "name": "Ivysaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
    "type": ["Grass”,”Poison"]
  },
  {
    "name": "Venusaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
    "type": ["Grass", "Poison"]
  }
];

describe("function search", () => {
  it("essa é uma função de pesquisar", () => {
    expect(typeof window.data.search).toBe("function");
  });
  it( "está pesquisando por nome", () => {
    expect(window.data.search(pesquisar, "name")).toEqual([
      {
        "name": "Bulbasaur",
        "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
        "type": ["Grass", "Poison"]
      },
      {
        "name": "Ivysaur",
        "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
        "type": ["Grass”,”Poison"]
      },
      {
        "name": "Venusaur",
        "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
        "type": ["Grass", "Poison"]
      }]
    );
  });
});

describe("function filterOptions", () => {
  it("essa é uma função de selecionar tipos", () => {
    expect(typeof window.data.filterOptions).toBe("function");
  });
  it( "está selecionando em um tipo", () => {
    expect(window.data.filterOptions(pesquisar)).toEqual([
      {
        "name": "Bulbasaur",
        "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
        "type": ["Grass", "Poison"]
      },
      {
        "name": "Ivysaur",
        "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
        "type": ["Grass”,”Poison"]
      },
      {
        "name": "Venusaur",
        "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
        "type": ["Grass", "Poison"]
      }]
    );
  });
});