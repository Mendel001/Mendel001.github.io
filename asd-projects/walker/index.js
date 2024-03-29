/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  const KEY = {
    "Left": 37,
    "UP": 38,
    "Right": 39,
    "Down": 40
  }
  
  // Game Item Objects
  var positionX = 0;
  var positionY = 0;
  var speedX = 0;
  var speedY = 0;
  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', keyUp);                           // change 'eventType' to the type of event you want to handle
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
  repositionGameItem();
redrawGameItem();

  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.Left) {
      speedX = -5
      console.log("Left pressed")
    }
    if (event.which === KEY.UP) {
      speedY = -5
      console.log("Up pressed")
    }
    if (event.which === KEY.Right) {
      speedX = 5
      console.log("Right pressed")
    }
    if (event.which === KEY.Down) {
      speedY = 5
      console.log("Down pressed")
    }
    console.log("keycode: " + event.which)
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
function repositionGameItem(){
  positionX += speedX
  positionY += speedY
}
function redrawGameItem(){
  $("#walker").css("left", positionX);
  $("#walker").css("top", positionY);
}

function keyUp(event){
  speedX = 0
  speedY = 0
}
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
