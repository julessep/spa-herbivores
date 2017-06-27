var Predator = (function () {
  let carnivores = [];
  let herbivores = [];

  return {
    loadCarnivores: function (showCarnivores) {
      var loader = new XMLHttpRequest();

      loader.addEventListener("load", function () {
        // Set the value of the private array
        carnivores = JSON.parse(this.responseText);
        showCarnivores(carnivores)
        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.

      });
      loader.open("GET", "carnivores.json")
      loader.send();
    },

    loadHerbivores: function (showHerbivores){
      var loader = new XMLHttpRequest();

      loader.addEventListener("load", function () {
        herbivores = JSON.parse(this.responseText);
        showHerbivores(herbivores)
      });
      loader.open("GET", "herbivores.json")
      loader.send();
    }
  }

})(Predator || {});