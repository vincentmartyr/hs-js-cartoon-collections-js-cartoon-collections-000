function dwarfRollCall(dwarves){
var x = ""

for (let i = 0; i < dwarves.length; i++){
  x = x + `${i + 1}. ${dwarves[i]} `
}
return x
}
//1. Doc 2. Dopey 3. Bashful 4. Grumpy

function summonCaptainPlanet(planeteerCalls){

for (let i = 0; i < planeteerCalls.length; i++) {
  planeteerCalls[i]  = planeteerCalls[i].toUpperCase() + '!'
}

return planeteerCalls

}
//["EARTH!", "WIND!", "FIRE!", "WATER!", "HEART!"]

function longPlaneteerCalls(words) {

if (words.length > 4){

    return true
  } else{

    return false }
}

function findTheCheese (foods) {

var cheeses = ["cheddar", "gouda", "camembert"]

for(let i = 0; i < foods.length; i++){
  for (let k = 0; k < cheeses.length; k++){
    if(cheeses[k] === foods[i]){
      return foods[i]
    }
  }

}
return 'no cheese!'
}
