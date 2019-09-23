var $pokeList = document.querySelector(".pokeList");

const pokemonRepository = (function () {
  const repository = [
    // {
    //   name: "Snorlax",
    //   height: 2.1,
    //   types: ["normal"],
    // },
    // {
    //   name: "Electabuzz",
    //   height: 1.1,
    //   types: ["electric"],
    // },
    // {
    //   name: "Slowbro",
    //   height: 2.1,
    //   types: ["psychic", "water"],
    // },
  ];
  
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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

    // showDetails(pokemon) {
    //   console.log(pokemon.name);
    // },

    function showDetails(item) {
      pokemonRepository.loadDetails(item).then(function () {
        console.log(item);   });
    },

    getAll() {
      return repository;
    },
    
    async function loadDetails(item) {
      var url = item.detailsUrl;
      try {
        const response = await fetch(url);
        const details = await response.json();
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = Object.keys(details.types);
      }
      catch (e) {
        console.error(e);
      }
    }
  
    return {
      add: add,
      getAll: getAll,
      search: search,
      loadList: loadList,
      loadDetails: loadDetails
    };
  })();

pokemonRepository.getAll().forEach((pokemon) => {
  pokemonRepository.addListItem(pokemon);
});

console.log(pokemonRepository.add({ name: "Pikachu" }));
console.log(pokemonRepository.addListItem({ name: "Pikachu" }));
console.log(pokemonRepository.getAll());
console.log(pokemonRepository.showDetails(pokemonRepository));