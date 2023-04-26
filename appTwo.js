var button1 = document.getElementById("warm");
var button2 = document.getElementById("cold");
var fill = document.getElementById("fill");
var mark = document.getElementById("mark");
var waterOut = document.getElementById("water");

var waterTemperatur = document.getElementById("waterTemperatur");
var waterTemperaturValue = parseInt(waterTemperatur.innerText);

const rotor1 = document.getElementById("rotor-1");
const rotor2 = document.getElementById("rotor-2");

let water = 20;
let activador = false;
let intervalo;
let intervaloOut;

let temperatura = 30;




function moreWater(){

    intervalo = setInterval(function() {

        if(water <= 180){

            fill.style.borderTop = `${water}px solid rgb(83 191 255)`;
            water++;
            var fillRect = fill.getBoundingClientRect();
            var markRect = mark.getBoundingClientRect();
                let fillValue = fillRect.top;
                let markValue = markRect.top;

                if(fillValue < markValue){

                    alert("You have reached the limit")
                    clearInterval(intervalo);
                    detenerAnimacion();
                    console.log("NOS FUIMOS");

                }

                if(activador){

                    if(temperatura < 99){

                        temperatura = temperatura + 1;
                        waterTemperatur.innerText = `${temperatura} °`;

                    }

                }else{

                    if(temperatura > 0){

                        temperatura = temperatura - 1;
                        waterTemperatur.innerText = `${temperatura} °`;

                    }
                }

        }else{
            
            waterOut.classList.remove('warmW');
            waterOut.classList.remove('coldW');

        }

      }, 100);

     // return intervalo;
}

//CLICK
function animarElemento() {

    if(activador){
        rotor1.style.transform = 'rotate(60deg)';
        rotor1.style.transition = 'transform 1s';
        button1.classList.add('botonAnimation')
        waterOut.classList.add('warmW');

    }else{
        rotor2.style.transform = 'rotate(-60deg)';
        rotor2.style.transition = 'transform 1s';
        button2.classList.add('botonAnimation')
        waterOut.classList.add('coldW');
    }

    moreWater();

}

  button1.addEventListener('mousedown', () => {
    activador = true;
    animarElemento();
  
    document.addEventListener('mouseup', detenerAnimacion);
    
    //openNewWindow("https://github.com/manuelmid")

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
    document.removeEventListener('touchend', detenerAnimacion);

    clearInterval(intervalo);

    //ANIMATIONS FROM CSS
    button1.classList.remove('botonAnimation');
    button2.classList.remove('botonAnimation');
    waterOut.classList.remove('warmW');
    waterOut.classList.remove('coldW');

    if(water > 179){
        alert("There is no more water")
    }

}


function coldDown(){
        cooling = setInterval(function(){
            if(temperatura > 0){
                temperatura--;
            waterTemperatur.innerText = `${temperatura} °`;
            }else{
                temperatura == 0;
            }
        },1000)
        
}

coldDown()


//MOBIL CONFIG
button1.addEventListener('touchstart', () => {
    activador = true;
    animarElemento();
    openNewWindow();
    document.addEventListener('touchend', detenerAnimacion);
  });
  
  button2.addEventListener('touchstart', () => {
    activador = false;
    animarElemento();
  
    document.addEventListener('touchend', detenerAnimacion);
  });

// ---------------- ☺↓ TO LEARN ☺↓----------------------//
function openNewWindow(link){
    window.open(link);
    ww.alert("hihi")
}

function openWin() {
    myWindow = window.open("", "", "width=200, height=100");
}

function resizeWin() {
    myWindow.resizeTo(300, 300);
}

//console.log(screen.pixelDepthgit)
//console.log(screen.availHeight)
console.log(window.Cache)

// ---------------- ☺↓ CACHE ☺↓----------------------//

// Abre la caché
caches.open('mi-cache').then(function(cache) {
    // Agrega un recurso a la caché
    cache.add('imgs/glass.png');
  
    // Recupera un recurso de la caché
    cache.match('imgs/glass.png').then(function(response) {
      if (response) {
        // Utiliza la respuesta

        console.log(response);
        console.log(response.url);

      }
    });
  });

// ---------------- ☺↓ CACHE ☺↓----------------------//

// ---------------- ↓ Local Storage ↓----------------------//
localStorage.setItem("myCat", water);
const cat = localStorage.getItem("myCat");

localStorage.removeItem("myCat");

localStorage.clear(); 

function saluda(){
    alert("haha")
    console.log("as")
    console.log(Date);
    console.log(DataView)
}

// ---------------- ↓ Local Storage ↓----------------------//

// ---------------- ☺↓ TO LEARN ☺↓----------------------//