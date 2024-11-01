let pokeDex = (function () {
  let pokemonList = [
   {
     name: "Nidoran",
     height: 0.5,
     type: "Poison"
   },
   {
    name: "Nidorino",
    height: 0.9,
    type: "Poison"
   },
   {
     name: "Nidoking",
     height: 1.4,
     type: "Poison/Ground"
   }
  ];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();
console.log(pokeDex.getAll())
pokeDex.add({ name: 'Rhydon'});
console.log(pokeDex.getAll());
