// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilter(reddify);
  
  applyFilter(reddify);
  applyFilter(decreaseBlue);
  applyFilter(increaseGreenByBlue);
  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (var i = 0; i < image.length; i++) {

    for (var j = 0; j < image[i].length; j++) {
      var rgbString = image[i][j];

      var rgbNumbers = rgbStringToArray(rgbString);
      //rgbNumbers[RED] = 255;
      filterFunction(rgbNumbers);
      rgbString = rgbArrayToString(rgbNumbers);
      image[i][j] = rgbString;
    }
  }
}


// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
  var backgroundColor = image[150];

  for (var i = 0; i < image.length; i++) {

    for (var j = 0; j < image[i].length; j++) {
      
      var rgbString = image[i][j];
      if (image[150] !== backgroundColor) {
      var rgbNumbers = rgbStringToArray(rgbString);
      //rgbNumbers[RED] = 255;
      filterFunction(rgbNumbers);
      rgbString = rgbArrayToString(rgbNumbers);
      image[i][j] = rgbString;
      }
    }
  }
}

// TODO 5: Create the keepInBounds function
function keepInBounds (num){
  return Math.min(255, Math.max(0, num));
}

// TODO 3: Create reddify function
function reddify (arr) {
arr[RED] = 200;
}

// TODO 6: Create more filter functions
function decreaseBlue (ar) {
  ar[BLUE] = keepInBounds(ar[BLUE] - 50)
}

function increaseGreenByBlue (ay) {
  ay[GREEN] = keepInBounds(ay[BLUE] + ay[GREEN])
}

// CHALLENGE code goes below here
