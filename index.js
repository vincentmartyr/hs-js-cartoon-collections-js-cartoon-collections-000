function dwarfRollCall(dwarves){
var x = ""

for (let i = 0; i < dwarves.length; i++){
  x = x + `${i + 1}. ${dwarves[i]} `
}
return x
}


function summonCaptainPlanet(planeteerCalls){

for (let i = 0; i < planeteerCalls.length; i++) {
  planeteerCalls [i] = planeteerCalls[i].toUpperCase() + '!'
}

return planeteerCalls

}

function longPlaneteerCalls(words) {

if (words.length > 4){

    return true
  } else{

    return false }
}

function findTheCheese (foods) {

var cheeses = ["cheddar", "gouda", "camembert"]
//var c = foods.include(cheeses)
for(let i = 0; i < foods.length; i++){
  for (let k = 0; k < cheeses.length; k++){
    if(cheeses[k] === foods[i]){
      return foods[i]
    }
  }

}
return 'no cheese!'
}
