var button1 = document.getElementById("warm");
var button2 = document.getElementById("cold");

var rotorOne = document.getElementById("rotor-1");
var rotorTwon = document.getElementById("rotor-2");


// let item = document.querySelector("#item");

let timerID;
    let counter = 0;

    let pressHoldEvent = new CustomEvent("pressHold");

    let pressHoldDuration = 50;

    // Listening for the mouse and touch events    
    button2.addEventListener("mousedown", pressingDown, false);
    button2.addEventListener("mouseup", notPressingDown, false);
    button2.addEventListener("mouseleave", notPressingDown, false);

    button2.addEventListener("touchstart", pressingDown, false);
    button2.addEventListener("touchend", notPressingDown, false);

    // Listening for our custom pressHold event
    button2.addEventListener("pressHold", doSomething, false);

    function pressingDown(e) {
      // Start the timer
      requestAnimationFrame(timer);

      e.preventDefault();

      console.log("Pressing!");
    }

    function notPressingDown(e) {
      // Stop the timer
      cancelAnimationFrame(timerID);
      counter = 0;

      console.log("Not pressing!");
    }

    //
    // Runs at 60fps when you are pressing down
    //
    function timer() {
      console.log("Timer tick!");

      if (counter < pressHoldDuration) {
        timerID = requestAnimationFrame(timer);
        counter++;
      } else {
        console.log("Press threshold reached!");
        button2.dispatchEvent(pressHoldEvent);
      }
    }

    function doSomething(e) {
      console.log("pressHold event fired!");
    }



console.log(button1);
console.log(button2);

button2.addEventListener('click', function(){
    rotorOne.style.animation = "rotarL 1s linear";
});

// button2.addEventListener('click', function(){
//     rotorTwon.style.transform = "rotateZ(-90deg)";
// });

button1.addEventListener("mousedown", pressingDown, false,);