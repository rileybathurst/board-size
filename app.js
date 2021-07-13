// https://stackoverflow.com/questions/41174095/do-i-need-to-use-onload-to-start-my-webpack-bundled-code
function ready(fn) {
    if (document.readyState != 'loading'){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }
  
  ready(function() {
    console.log('ready');

    // grab what we need
    var heightInput = document.getElementById('height');
    var height = document.getElementById('height').value;
    var heightNumber = document.getElementById('heightNumber');
    
    var weightInput = document.getElementById('weight');
    var weight = document.getElementById('weight').value;
    var weightNumber = document.getElementById('weightNumber');
    
    var mountainInput = document.getElementById('mountain');
    var mountain = document.getElementById('mountain').value;
    var mountainous = document.getElementById('mountainous');
    
    var finalSize = document.getElementById('finalSize');

    heightInput.addEventListener('change', updateHeight);
    function updateHeight(e) {
        heightNumber.value = e.target.value; // show the height

        let guessWeight = height * 0.4;
        let newWeight = weight;
        let difference = newWeight - guessWeight;
        // console.log(difference);
        let weightOffset = difference * 0.3;

        var size = (e.target.value * 0.885) + weightOffset + (mountain * 1); // the basic close to idea that needs more math
        let sizeRounded = Math.round(size);
        finalSize.innerHTML = sizeRounded; // show the size based on height

    }
    
    weightInput.addEventListener('change', updateWeight);
    function updateWeight(e) {
        weightNumber.value = e.target.value; // show the weight

        var height = document.getElementById('height').value;

        let guessWeight = height * 0.4;
        let newWeight = e.target.value;
        let difference = newWeight - guessWeight;
        // console.log(difference);
        let weightOffset = difference * 0.3;
        // console.log(weightOffset);

        var size = (height * 0.885) + weightOffset + (mountain * 1); // the basic close to idea that needs more math
        let sizeRounded = Math.round(size);
        finalSize.innerHTML = sizeRounded; // show the size based on height

    }

    mountainInput.addEventListener('change', updateMountain);
    function updateMountain(e) {
        mountainous.value = e.target.value; // show the weight

        var height = document.getElementById('height').value;

        let guessWeight = height * 0.4;
        let newWeight = document.getElementById('weight').value;
        let difference = newWeight - guessWeight;
        // console.log(difference);
        let weightOffset = difference * 0.3;

        var size = (height * 0.885) + weightOffset + (e.target.value * 1); // the basic close to idea that needs more math
        let sizeRounded = Math.round(size);
        finalSize.innerHTML = sizeRounded; // show the size based on height

    }

}); // ready function
