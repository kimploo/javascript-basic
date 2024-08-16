const api = {
  getPokemons() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then(function (allpokemon) {
        console.log(allpokemon.results);
        // 순서대로 보여주려면 어떻게 할까?
        allpokemon.results.forEach(function (pokemon) {
          let url = pokemon.url; // https://pokeapi.co/api/v2/pokemon/1/"
          fetch(url)
            .then((response) => response.json())
            .then(function (pokeData) {
              render.one(pokeData);
            });
        });
      });
  },

  getPokemonsSorted() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then(function (allpokemon) {
        Promise.all(
          allpokemon.results.map((pokemon) => {
            return fetch(pokemon.url).then((r) => r.json());
          }),
        ).then((pokemons) => {
          pokemons.forEach((pokemon) => {
            render.one(pokemon);
          });
        });
      });
  },
};

const render = {
  one(pokeData) {
    let allPokemonContainer = document.getElementById("poke-container");
    let pokeContainer = document.createElement("div"); //div will be used to hold the data/details for indiviual pokemon.{}
    pokeContainer.classList.add("ui", "card");

    ui.drawPokeImage(pokeData, pokeContainer);

    let pokeName = document.createElement("h4");
    pokeName.innerText = pokeData.name;

    let pokeNumber = document.createElement("p");
    pokeNumber.innerText = `#${pokeData.id}`;

    let pokeTypes = document.createElement("ul"); //ul list will hold the pokemon types

    ui.drawType(pokeData.types, pokeTypes); // helper function to go through the types array and create li tags for each one

    pokeContainer.append(pokeName, pokeNumber, pokeTypes); //appending all details to the pokeContainer div
    allPokemonContainer.appendChild(pokeContainer); //appending that pokeContainer div to the main div which will                                                             hold all the pokemon cards
  },

  allSorted() {
    let allPokemonContainer = document.querySelector("#poke-container");
    allPokemonContainer.innerText = "";
    api.getPokemonsSorted();

    document.querySelector("#delete-btn").style.display = "block";
  },
};

const ui = {
  drawType(types, ul) {
    types.forEach(function (type) {
      let typeLi = document.createElement("li");
      typeLi.innerText = type["type"]["name"];
      ul.append(typeLi);
    });
  },

  drawPokeImage(pokeData, containerDiv) {
    let pokeImgContainer = document.createElement("div");
    pokeImgContainer.classList.add("image");

    let pokeImage = document.createElement("img");
    pokeImage.srcset = pokeData.sprites.front_default;

    pokeImgContainer.append(pokeImage);
    containerDiv.append(pokeImgContainer);
  },

  removeAll(event) {
    event.target.style = "none";
    let allPokemonContainer = document.querySelector("#poke-container");
    allPokemonContainer.innerText = "";
    document.querySelector("#delete-btn").style.display = "none";
  },
};

document.addEventListener("DOMContentLoaded", () => {
  let generateBtn = document.querySelector("#generate-pokemon");
  generateBtn.addEventListener("click", render.allSorted);
  document.querySelector("#delete-btn").addEventListener("click", ui.removeAll);
  document.querySelector("#delete-btn").style.display = "block";
  api.getPokemons();
});
