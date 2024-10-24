let pokedex = [
  { name: "Nidoran", height: 0.5, type: "Poison" },
  { name: "Nidorino", height: 0.9, type: "Poison" },
  { name: "Nidoking", height: 1.4, type: "Poison/Ground" }
];
pokedex.forEach(function(pokemon) {
  console.log(pokemon.name + ' (height: ' + pokemon.height + ') - ' + pokemon.type);
  document.write(pokemon.name + ' (height: ' + pokemon.height + ') - ' + pokemon.type + ', ')
});
