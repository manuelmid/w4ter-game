var button1 = document.getElementById("warm");
var button2 = document.getElementById("cold");

var rotorOne = document.getElementById("rotor-1");
var rotorTwon = document.getElementById("rotor-2");

console.log(button1);
console.log(button2);

button1.addEventListener('click', function(){
    rotorOne.style.animation = "rotarL 1s linear";
});

button2.addEventListener('click', function(){
    rotorTwon.style.animation = "rotarR 1s linear";
});