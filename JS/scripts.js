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
  
  function addListItem(pokemon) {
 let pokemonList = document.querySelector('.pokemon-list');
 let listItem = document.createElement('li');
 let button = document.createElement('button');
 button.innerText = pokemon.name;
 button.classList.add('button')
 listItem.appendChild(button);
 pokemonList.appendChild(listItem)
 button.addEventListener('click', showDetails)
  }
  function showDetails(pokemon) {
    console.log(event.target)
  }
  
  
  
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  }
})();

console.log(pokeDex.getAll())
pokeDex.add(
  { 
  name: 'Rhydon',
  height: 1.9,
  type: "Rock/Ground"
  });
console.log(pokeDex.getAll());

pokeDex.getAll().forEach(function (pokemon) {
 pokeDex.addListItem(pokemon);
})