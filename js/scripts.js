// var repository = [
//     {
//         name: 'Snorlax',
//         height: 2.1,
//         types: ['normal']
//     },
//     {
//         name: 'Electabuzz',
//         height: 1.1,
//         types: ['electric']
//     },
//     {
//         name: 'Slowbro',
//         height: 2.1,
//         types: ['psychic', 'water']
//     }
// ];

// var repository2 = {
//   name: 'Snorlax',
//   height: 2.1,
//   types: ['normal']
// };

// // for (let i = 0; i <= repository.length; i++) {
// //     document.write(repository[i].name + " ");
// //     document.write("\(height: " + repository[i].height + "\) ");
// //     if (repository[i].height < 2) {
// //       document.write("- It's so small ");
// //     }
// //   document.write("<br>");
// // }

// repository.forEach((pokemon) => {
//   Object.keys(pokemon).forEach(function(property) {
//     if (property === "name") {
//       document.write(`${pokemon[property]}<br>`);
//     } else {
//       document.write(`${property}: ${pokemon[property]} <br>`);
//     }
//   });
// });

var pokemonRepository = (function () {
  var repository = []; // empty array

  return {
    add: function(pokemon typeof {a: 1} === "Object") {
      repository.push(pokemon);
    },
    getAll: function() {
      return repository;
    }
  };
})();

console.log(pokemonRepository.getAll()); // []
pokemonRepository.add({ name: 'Pikachu' });
console.log(pokemonRepository.getAll()); // [ { name: 'Pikachu' } ]

pokemonRepository.getAll().forEach(pokemon => {
  console.log(pokemon);
});
