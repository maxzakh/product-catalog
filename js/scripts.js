var $pokeList = document.querySelector(".pokeList");

var pokemonRepository = (function () {
  var repository = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  // Other functions remain here
  return {
    function add(pokemon) {
      repository.push(pokemon);
    }

    function addListItem(pokemon) {
      var button = document.createElement("button");
      button.classList.add("pokeDex");
      button.innerHTML = pokemon.name;

      var listItem = document.createElement("li");
      $pokeList.appendChild(listItem);
      listItem.appendChild(button);

      button.addEventListener("click", function () {
        pokemonRepository.showDetails(pokemon);
      });
    }

    function showDetails(pokemon) {
      pokemonRepository.loadDetails(pokemon).then(function () {
        console.log(pokemon);
      });
    }

    function getAll() {
      return repository;
    }
  },

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        var pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  },

  function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = Object.keys(details.types);
    }).catch(function (e) {
      console.error(e);
    });
  }

  return {
    add: add,
    getAll: getAll,
    search: search,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();

pokemonRepository.loadList().then(function () {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function (pokemon) {
    addListItem(pokemon);
  });
});