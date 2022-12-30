var button1 = document.getElementById("warm");
var button2 = document.getElementById("cold");
var rotorOne = document.getElementById("rotor-1");
var rotorTwon = document.getElementById("rotor-2");
var bola = document.getElementById("bola");

let pressHoldDuration = 10000;
let counter = 0;
let deg = 0;
let timerID;

let pressHoldEvent = new CustomEvent("pressHold");


// Listening for the mouse and touch events    
button1.addEventListener("mousedown", clickDown);
button1.addEventListener("mouseup", clickUp);

button2.addEventListener("mousedown", clickDown);
button2.addEventListener("mouseup", clickUp);

// Listening for our custom pressHold event
button2.addEventListener("pressHold", doSomething);

    function clickDown(e) {
      // Start the timer
      //Check this
      requestAnimationFrame(timer);
      e.preventDefault();

    }

    function clickUp(){
      console.log("up!!");
    }

    function timer() {
      console.log("Timer tick!");
      //mientras Onclick Counter++

      if (counter < pressHoldDuration) {
        timerID = requestAnimationFrame(timer);
        //mientras Onclick Counter++
        counter++;
        deg = counter;
        rotorOne.style.rotate = deg + 'deg';
        bola.style.width = deg;
        //bola.style.height = deg;
      } else {
        console.log("Press threshold reached!");
        button2.dispatchEvent(pressHoldEvent);
        button1.dispatchEvent(pressHoldEvent);
      }
    }

    function doSomething(e) {
      console.log("pressHold event fired!");
    }


    function print(e){
      let impri = document.getElementById(e).childNodes;
      console.log(impri);
    }

// button2.addEventListener('click', function(){
//     rotorTwon.style.transform = "rotateZ(-90deg)";
// });

