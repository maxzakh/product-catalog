var $pokeList = document.querySelector(".pokeList");

const pokemonRepository = (function () {
  const repository = [
    {
      name: "Snorlax",
      height: 2.1,
      types: ["normal"],
    },
    {
      name: "Electabuzz",
      height: 1.1,
      types: ["electric"],
    },
    {
      name: "Slowbro",
      height: 2.1,
      types: ["psychic", "water"],
    },
  ];

  return {
    add(pokemon) {
      repository.push(pokemon);
    },

    addListItem(pokemon) {
      var button = document.createElement("button");
      button.classList.add("pokeDex");
      button.innerHTML = pokemon.name;

      var listItem = document.createElement("li");
      $pokeList.appendChild(listItem);
      listItem.appendChild(button);

      button.addEventListener("click", function() {
        pokemonRepository.showDetails(pokemon);
      });
    },

    showDetails(pokemon) {
      console.log(pokemon.name);
    },

    getAll() {
      return repository;
    },
  };
}());

pokemonRepository.getAll().forEach((pokemon) => {
  // var button = document.createElement("button");
  // button.classList.add("pokeDex");
  // button.innerHTML = pokemon.name;

  // var listItem = document.createElement("li");
  // $pokeList.appendChild(listItem);
  // listItem.appendChild(button);
  pokemonRepository.addListItem(pokemon);

  // button.addEventListener("click", function() {
  //   pokemonRepository.showDetails(pokemon);
  // });
});

console.log(pokemonRepository.add({ name: "Pikachu" }));
console.log(pokemonRepository.addListItem({ name: "Pikachu" }));
console.log(pokemonRepository.getAll());
console.log(pokemonRepository.showDetails(pokemonRepository));