var button1 = document.getElementById("warm");
var button2 = document.getElementById("cold");
var rotorOne = document.getElementById("rotor-1");
var rotorTwon = document.getElementById("rotor-2");

let deg = 30;

// let item = document.querySelector("#item");

let timerID;
let counter = 0;

let pressHoldEvent = new CustomEvent("pressHold");

let pressHoldDuration = 90;

// Listening for the mouse and touch events    
button1.addEventListener("mousedown", pressingDown);
button1.addEventListener("mouseup", notPressing);

button2.addEventListener("mousedown", pressingDown);
button2.addEventListener("mouseup", notPressing);

// Listening for our custom pressHold event
button2.addEventListener("pressHold", doSomething);

  while(button1.cli){
    console.log("gg")
  }

    function pressingDown(e) {
      // Start the timer

      requestAnimationFrame(timer);

      e.preventDefault();

    }

    function notPressing(){
      console.log("up!!")
      counter = 0;
    }

    function timer() {
      console.log("Timer tick!");

      if (counter < pressHoldDuration) {
        timerID = requestAnimationFrame(timer);
        counter++;
        deg = counter;
        rotorOne.style.rotate = deg + 'deg';
      } else {
        console.log("Press threshold reached!");
        button2.dispatchEvent(pressHoldEvent);
        button1.dispatchEvent(pressHoldEvent);
      }
    }

    function doSomething(e) {
      console.log("pressHold event fired!");
    }

// button2.addEventListener('click', function(){
//     rotorTwon.style.transform = "rotateZ(-90deg)";
// });

