function showCarnivores (carnivores) {
  let outputCarn = document.getElementById("outputCarnival");
  carnivores.forEach(function(animal){
    outputCarn.innerHTML += `${animal} `
  })
}

function showHerbivores (herbivores) {
  let outputHerb = document.getElementById("outputHerbivore");
  herbivores.forEach(function(animal){
    outputHerb.innerHTML += `${animal} `
  })
}

Predator.loadCarnivores(showCarnivores)
Predator.loadHerbivores(showHerbivores)
