let pokedex = [
  {
    name: "Nidoran",
    weight: 9,
    types: "Poison",
  },
  {
    name: "Nidorino",
    weight: 19.5,
    types: "Poison",
  },
  {
    name: "Nidoking",
    weight: 62,
    types: "Poison/Ground"
  }  
];
for (let i = 0; i < pokedex.length; i++){
  console.log(pokedex[i].name)
  document.write(pokedex[i].name)
  for (let w = 0; w < pokedex.length; w++){
console.log(pokedex[w].weight)
document.write(pokedex[i].name + '  ' + pokedex[w].weight + '  ' + "<br/>")
}
}
/* Array repeats names and I have no Idea why*/