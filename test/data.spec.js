require("../src/data.js");

describe("function order", () => {
  it("is a function", () => {
    expect(typeof window.data.order).toBe("function");
  });

  it("returns `filtrar`", () => {
    expect(window.data.order([
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
    ]
    )).toEqual(
      ["Grass", "Poison"]
    );
  });
});


