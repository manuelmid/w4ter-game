var button1 = document.getElementById("warm");
var button2 = document.getElementById("cold");
var rotorOne = document.getElementById("rotor-1");
var rotorTwon = document.getElementById("rotor-2");

let pressHoldDuration = 90;
let counter = 0;
let deg = 0;
let timerID;

let pressHoldEvent = new CustomEvent("pressHold");


// Listening for the mouse and touch events    
button1.addEventListener("mousedown", pressingDown);
button1.addEventListener("mouseup", notPressing);

button2.addEventListener("mousedown", pressingDown);
button2.addEventListener("mouseup", notPressing);

// Listening for our custom pressHold event
button2.addEventListener("pressHold", doSomething);

    function pressingDown(e) {
      // Start the timer

      requestAnimationFrame(timer);
      console.log(timer);
      e.preventDefault();
      console.log(e);
    }

    function notPressing(){
      console.log("up!!");
      //counter = 0;
    }

    function timer() {
      console.log("Timer tick!");
      //mientras Onclick Counter++
      if (counter < pressHoldDuration) {
        timerID = requestAnimationFrame(timer);
        //mientras Onclick Counter++
        counter++;
        deg = counter;
        //Creo que aqui necesito un ciclo while 
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

