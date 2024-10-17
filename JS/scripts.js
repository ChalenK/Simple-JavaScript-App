
     let number32Name = "Nidoran(male)";
let number32Weight = "9kg";
let number32Type = "Poison";

let number33Name = "Nidorino";
let number33Weight = "19.5kg";
let number33Type = "Poison";

let number34Name = "Nidoking";
let number34Weight = "62kg";
let number34Type = "Poison \\ Ground"; 

let pokemonList = [
    number32Name + '  ' + number32Weight + '  ' + number32Type,
    number33Name + '  ' + number33Weight + '  ' + number33Type,
    number34Name + '  ' + number34Weight + '  ' + number34Type
]
for (let i = 3; i >= pokemonList.length; i--){
  if( i == 0){
    document.write("<p>" + i + "</p>")
  }
}