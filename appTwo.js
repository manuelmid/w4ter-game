var button1 = document.getElementById("warm");
var button2 = document.getElementById("cold");
var fill = document.getElementById("fill")
var waterOut = document.getElementById("water")
const rotor1 = document.getElementById("rotor-1");
const rotor2 = document.getElementById("rotor-2");

let water = 20;
let activador = false;
let intervalo;
let intervaloOut;

    
function moreWater(){
    intervalo = setInterval(function() {
        if(water <= 180){
            fill.style.borderTop = `${water}px solid rgb(83 191 255)`;
            water++;
            console.log(water);
        }else{
            waterOut.classList.remove('warmW');
            waterOut.classList.remove('coldW');
        }
      }, 100);

     // return intervalo;
}

function animarElemento() {

    if(activador){
        rotor1.style.transform = 'rotate(60deg)';
        rotor1.style.transition = 'transform 1s';
        waterOut.classList.add('warmW');
    }else{
        rotor2.style.transform = 'rotate(-60deg)';
        rotor2.style.transition = 'transform 1s';
        waterOut.classList.add('coldW');
    }

    moreWater();

}

  
  button1.addEventListener('mousedown', () => {
    activador = true;
    animarElemento();
  
    document.addEventListener('mouseup', detenerAnimacion);
  });

  button2.addEventListener('mousedown', () => {
    activador = false;
    animarElemento()

    document.addEventListener('mouseup', detenerAnimacion);
  })
  
  function detenerAnimacion() {
    // Detener la animación
    rotor1.style.transform = 'rotate(0deg)';
    rotor1.style.transition = 'transform 1s';
    rotor2.style.transform = 'rotate(0deg)';
    rotor2.style.transition = 'transform 1s';
  
    // Eliminar el EventListener del documento para detener la detección del evento mouseup
    document.removeEventListener('mouseup', detenerAnimacion);
    clearInterval(intervalo);
    waterOut.classList.remove('warmW');
    waterOut.classList.remove('coldW');

    if(water > 179){
        alert("There is no more water")
    }

}

/* setTimeout(function() {
    clearInterval(intervalo);
    console.log("STOP☺")
  }, 5000);

 */