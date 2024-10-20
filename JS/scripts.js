let pokedex = [
  { name: "Nidoran", height: 0.5, type: "Poison" },
  { name: "Nidorino", height: 0.9, type: "Poison" },
  { name: "Nidoking", height: 1.4, type: "Poison/Ground" }
];


for (let i = 0; i < pokedex.length; i++) {
  // Access each Pokémon's details
  let pokemon = pokedex[i];
  let output = pokemon.name + " (height: " + pokemon.height + ") - " + pokemon.type;

  // Check if the height is greater than a certain value
  if (pokemon.height > 1) {
    output += " - Its Huge!";
  }

  // Output the result to console and document
  console.log(output);
  document.write(output + "<br>"); // Adds line breaks in document
}