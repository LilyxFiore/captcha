var captcha = document.getElementById('captcha');
var recaptcha = document.getElementById("recaptcha");
var check = document.getElementById("validate");
var result = document.getElementById("result");
var textCaptcha = document.getElementById("text");

window.addEventListener("load", generatorCaptcha);
recaptcha.addEventListener("click", generatorCaptcha);

function generatorCaptcha(){
  var num1 = Math.round(Math.random() * 9);
  var letra1 = String.fromCharCode(Math.round(Math.random() * 25) + 65);  //[fromCharCode]Convierte numero unicode a caracteres
  var num2 = Math.round(Math.random() * 9);
  var letra2 = String.fromCharCode(Math.round(Math.random() * 25) + 65);
  var num3 = Math.round(Math.random() * 9);
  var letra3 = String.fromCharCode(Math.round(Math.random() * 25) + 65);
  var num4 = Math.round(Math.random() * 9);
  var color1 = Math.round(Math.random() * 255);
  var color2 = Math.round(Math.random() * 255);
  var color3 = Math.round(Math.random() * 255);
  captcha.setAttribute("style","color:rgb("+color1+","+color2+","+color3+")");
  captcha.value = num1+letra1+num2+letra2+num3+letra3+num4;
}

check.addEventListener("click", function(){
  if(textCaptcha.value!=captcha.value){
    result.innerHTML = "El captcha introducido es incorrecto, intente de nuevo";
  }
  else {
    result.innerHTML="El captcha introducido es correcto";
  }
})
