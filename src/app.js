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
    // start up your app

    /* // guess the height to start
    let height = 152;
    console.log('we guess you are ' + height + 'cms');

    // then grab it from the input

    // baseline board size

    // probably smart with a good guess
    // let size = 160;

    //  if (height > 190) {
    //     let size = height * 0.9;
    // }

    // if (height > 180) {
    //     let size = height * 0.91;
    // }

    // if (height > 170) {
    //     let size = height * 0.92;
    // }

    // if (height > 160) {
    //     let size = height * 0.93;
    // } 

    // need to sort out all the good else if statements
    // let size = height * 0.94;

    // there might be a super smart math formula to this i.e.
    // height * x = y 
    // if x is 190 y = 0.85 (/2 = .95)
    // if x is 180 y = 0.90 (/2 = .90)
    // if x is 170 y = 0.95 (/2 = .85)

    // this works but it goes too far I need to calm down the formula
    // if x is 190 y = 0.85 (*.5 = .95) + (180 - x) = 0.85
    // if x is 180 y = 0.90 (*.5 = .90) + (180 - x) = 0.90
    // if x is 170 y = 0.95 (*.5 = .85) + (180 - x) = 0.95

    // this is remarkably close for some random guessing
    math = (( height * 0.5 ) + (( 180 - height ) / 1.5) ) / 100; // guessing the numbers is there something smarter to do with these?
    console.log(math + ' trying');
    let size = height * math;
    console.log('size =' + size);

    // do the same thing and make something up for this
    let base_weight = height * 0.35; // there might be a universalequation for this

    // weight is a baseline but also shows up
    console.log('baseline weight =' + base_weight + 'kg');

    let weight = 94;

    let guess_weight = 93.5;

    if (weight > guess_weight) {
        // add some cms
        let size_weight = size + 2;
        console.log('with you weight we think your board should be ' + size_weight + 'cms');
    } 
    if (weight < guess_weight) {
        //subtract some cms
        let size_weight = size - 2;
        console.log('with you weight we think your board should be ' + size_weight + 'cms');
    }
        else {
        let size_weight = guess_weight
        console.log('with you weight we think your board should be ' + size_weight + 'cms');
    }

    if (weight > guess_weight && weight > (guess_weight * 1.1)) {
        console.log('tubby');
    } else {
        console.log('skiny');
    } */

    // setinnerhtml whateveer this code is


/*     function page() {
        document.getElementById("pageSize").innerHTML = math; 
    } */

/*     // make this happen when the page loads
    window.onload = function() {
        page();
    }; */



/*     rangeUpdate => {
        console.log("rangeUpdate");
    }; */

    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
    const input = document.getElementById('input'); // height element
    var heightNumber = document.getElementById('heightNumber'); // height element
    var weightNumber = document.getElementById('weightNumber'); // height element
    const exterior = document.getElementById('exterior'); // size

    input.addEventListener('change', updateValue);
    function updateValue(e) {
      // console.log(e.target.value);
      // exterior.innerHTML = e.target.value;

      // update the box that shows the height in cms
      heightNumber.value = e.target.value; // show the size based on height

      var size = e.target.value * 0.885; // the basic close to idea that needs more math
      exterior.innerHTML = size; // show the size based on height
      

      // this doesnt take into account the other boxes so its failing
    }
    















    // weight
    const wi = document.getElementById('weight'); // weight element not the value
    wi.addEventListener('change', updateWeight);
    
/*     if (wi.value >= (heightNumber * 0.4)) { // if bigger than guessed
        function updateWeight(e) {
            // size = (( height * 0.885 ) + ( ( value - ( height * 0.4 ) )) * something );
            // exterior.innerHTML = (( heightNumber * 0.885 ) + ( e.target.value - ( heightNumber * 0.4)))

            weightNumber.value = e.target.value;
       }; // updateWeight
    } else {
        function updateWeight(e) {
            weightNumber.value = e.target.value;
       }; // updateWeight
    }; */

    // try the other way around
    function updateWeight(e) {
        weightNumber.value = e.target.value; // always update the side box

        // var heightSize = input.value * 0.885;
        // console.log("heightSize " + heightSize);

        var guessWeight = input.value * 0.4;
        // console.log("guess weight " + guessWeight);

        var newWeight = wi.value;
        // console.log("new weight " + newWeight);

        var difference = newWeight - guessWeight;
        console.log("difference " + difference + " this can be negative");

        // doesnt need an if it can just deal with a negative

            // console.log("difference " + (newWeight - guessWeight));

            // size =            (   size                        + (difference * something ));
            // size =            (( height * 0.885 )             + (( value - ( height * 0.4 ) )) * something );
            // size =            (( height * 0.885 )             + (( value - ( guessW ) )) * something );
        exterior.innerHTML = (input.value * 0.885) + (difference * 0.3) // this is adding to the string not the number?

    };

/*     function updateWeight(e) {
        weightNumber.value = e.target.value;
   }; */

    // mountain add a little more for bigger mountain loose a little for smaller

   // this needs to account for the weight change

    const mi = document.getElementById('mountain'); // weight element not the value
    mi.addEventListener('change', updateMountain);
    
    function updateMountain(e) {
        // var guessMountain = input.value * 0.5; // im not sure of this math yet but middle slider
        // console.log("guess weight " + guessWeight);
        
        var height = input.value; // always go back to the default so we only update once
        console.log(height); 

        var miSize = exterior.innerHTML;
        console.log("input mountain " + e.target.value);
         if (e.target.value >= 67 ) { // also needs a couple more splits

            document.getElementById('mountainous').value = "big";

            var miSize = (height * 0.885) + 1; // always go back to the default
            exterior.innerHTML = miSize;

        } else if (e.target.value <= 33 ) {

            document.getElementById('mountainous').value = "small";

            var miSize = (height * 0.885) - 1;
            exterior.innerHTML = miSize;
        } else { // default
            document.getElementById('mountainous').value = "all";

            var miSize = (height * 0.885);
            exterior.innerHTML = miSize;
        };
    }; // updateWeight







    // RESART CLEANER BUT SAVE ABOVE


    // grab what we need
    var height = document.getElementById('height').value;
    var heightNumber = document.getElementById('heightNumber');
    
    var weight = document.getElementById('weight').value;
    var weightNumber = document.getElementById('weightNumber');
    
    var mountain = document.getElementById('mountain').value;
    var mountainous = document.getElementById('mountainous');
    
    var size = document.getElementById('size');

    input.addEventListener('change', updateValue);
    function updateValue(e) {
      heightNumber = e.target.value; // show the height


      let guessWeight = height * 0.4;
      let newWeight = weight;
      let difference = newWeight - guessWeight;

      var size = (e.target.value * 0.885) + difference + mountainChange; // the basic close to idea that needs more math
      exterior.innerHTML = size; // show the size based on height
      

      // this doesnt take into account the other boxes so its failing
    }

















    
}); // ready function



/* function() {
    console.log("rangeUpdate");
}; */