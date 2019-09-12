

// var repository2 = {
//   name: "Snorlax",
//   height: 2.1,
//   types: ["normal"]
// };

// // for (let i = 0; i <= repository.length; i++) {
// //     document.write(repository[i].name + " ");
// //     document.write("\(height: " + repository[i].height + "\) ");
// //     if (repository[i].height < 2) {
// //       document.write("- It"s so small ");
// //     }
// //   document.write("<br>");
// // }

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
      
      pokemonRepository.showDetails(pokemon);
    },

    showDetails(pokemon) {
      addEventListener("click", function() {
        console.log(pokemon.name);
      })
    },

    getAll() {
      return repository;
    },
  };
}());

pokemonRepository.getAll().forEach((pokemon) => {
  var button = document.createElement("button");
  button.classList.add("pokeDex");
  button.innerHTML = pokemon.name;

  var listItem = document.createElement("li");
  $pokeList.appendChild(listItem);
  listItem.appendChild(button);

  pokemonRepository.showDetails(pokemon);
});

console.log(pokemonRepository.add({ name: "Pikachu" }));
console.log(pokemonRepository.addListItem({ name: "Pikachu" }));
console.log(pokemonRepository.getAll());
console.log(pokemonRepository.showDetails());

// repository.forEach((pokemon) => {
//     var listItem = document.createElement("li");
//     $pokeList.appendChild(listItem);
//     var button = document.createElement("button");

//     function addListItem(pokemon) {
//         button.classList.add("pokeDex");
//         button.innerHTML = pokemon.name;
//         listItem.appendChild(button);
//     }
// });

// repository.forEach((pokemon) => {
//   Object.keys(pokemon).forEach(function(property) {
//     if (property === "name") {
//       document.write(`${pokemon[property]}<br>`);
//     } else {
//       document.write(`${property}: ${pokemon[property]} <br>`);
//     }
//   });
// });

// var pokemonRepository = (function () {
//   var repository = []; // empty array

//   return {
//     add: function(pokemon) {
//       if (typeof pokemon === "object") {
//       repository.push(pokemon);
//       }
//     },
//     getAll: function() {
//       return repository;
//     }
//   };
// })();

// pokemonRepository.getAll().forEach(pokemon => {
//   console.log(pokemon);
// });
