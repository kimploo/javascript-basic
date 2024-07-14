console.log("You have connected...");
function fetchKantoPokemon() {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((response) => response.json())
    .then(function (allpokemon) {
      console.log(allpokemon.results);
      // 순서대로 보여주려면 어떻게 할까?
      allpokemon.results.forEach(function (pokemon) {
        fetchPokemonData(pokemon);
      });
    });
}
fetchKantoPokemon();

document.addEventListener("DOMContentLoaded", () => {
  let generateBtn = document.querySelector("#generate-pokemon");
  generateBtn.addEventListener("click", renderEverything);

  getDeleteBtn().addEventListener("click", deleteEverything);
});

function renderEverything() {
  let allPokemonContainer = document.querySelector("#poke-container");
  allPokemonContainer.innerText = "";
  // fetchKantoPokemon();
  fetchKantoPokemonSorted();

  getDeleteBtn().style.display = "block";
}

function getDeleteBtn() {
  return document.querySelector("#delete-btn");
}

// function fetchKantoPokemon() {
//   fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
//     .then((response) => response.json())
//     .then(function (allpokemon) {
//       console.log(allpokemon.results);
//       // 순서대로 보여주려면 어떻게 할까?
//       allpokemon.results.forEach(function (pokemon) {
//         fetchPokemonData(pokemon);
//       });
//     });
// }

function fetchKantoPokemonSorted() {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((response) => response.json())
    .then(function (allpokemon) {
      Promise.all(
        allpokemon.results.map((pokemon) => {
          return fetch(pokemon.url).then((r) => r.json());
        }),
      ).then((pokemons) => {
        pokemons.forEach((pokemon) => {
          renderPokemon(pokemon);
        });
      });
    });
}

function fetchPokemonData(pokemon) {
  let url = pokemon.url; // <--- this is saving the pokemon url to a variable to use in the fetch.
  //Example: https://pokeapi.co/api/v2/pokemon/1/"
  fetch(url)
    .then((response) => response.json())
    .then(function (pokeData) {
      renderPokemon(pokeData);
    });
}

function renderPokemon(pokeData) {
  let allPokemonContainer = document.getElementById("poke-container");
  let pokeContainer = document.createElement("div"); //div will be used to hold the data/details for indiviual pokemon.{}
  pokeContainer.classList.add("ui", "card");

  createPokeImage(pokeData, pokeContainer);

  let pokeName = document.createElement("h4");
  pokeName.innerText = pokeData.name;

  let pokeNumber = document.createElement("p");
  pokeNumber.innerText = `#${pokeData.id}`;

  let pokeTypes = document.createElement("ul"); //ul list will hold the pokemon types

  createTypes(pokeData.types, pokeTypes); // helper function to go through the types array and create li tags for each one

  pokeContainer.append(pokeName, pokeNumber, pokeTypes); //appending all details to the pokeContainer div
  allPokemonContainer.appendChild(pokeContainer); //appending that pokeContainer div to the main div which will                                                             hold all the pokemon cards
}

function createTypes(types, ul) {
  types.forEach(function (type) {
    let typeLi = document.createElement("li");
    typeLi.innerText = type["type"]["name"];
    ul.append(typeLi);
  });
}

function createPokeImage(pokeData, containerDiv) {
  let pokeImgContainer = document.createElement("div");
  pokeImgContainer.classList.add("image");

  let pokeImage = document.createElement("img");
  pokeImage.srcset = pokeData.sprites.front_default;

  pokeImgContainer.append(pokeImage);
  containerDiv.append(pokeImgContainer);
}

function deleteEverything(event) {
  event.target.style = "none";
  let allPokemonContainer = document.querySelector("#poke-container");
  allPokemonContainer.innerText = "";

  let generateBtn = document.createElement("button");
  generateBtn.innerText = "Generate Pokemon";
  generateBtn.id = "generate-pokemon";
  generateBtn.classList.add("ui", "secondary", "button");
  generateBtn.addEventListener("click", renderEverything);

  allPokemonContainer.append(generateBtn);
}
