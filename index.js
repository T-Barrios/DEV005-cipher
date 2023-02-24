import cipher from './cipher.js';

//VARIABLE DE LOS INPUT TEXTO Y NUMERO
let texto = ""
let numero = 0
let xtexto = ""
let xnumero = 0

//BOTONES CIFRAR Y DESCIFRAR
const buttonGoCipher = document.getElementById("goCifrar");
buttonGoCipher.addEventListener("click",cifrar)
buttonGoCipher.addEventListener("click",mostrarCipherScreen)

const buttonGoDecipher = document.getElementById("goDescifrar");
buttonGoDecipher.addEventListener("click",descifrar)
buttonGoDecipher.addEventListener("click",mostrarDecipherScreen)

//FUNCION CIFRAR MENSAJE
function cifrar(){
  texto = document.getElementById("inputNormal").value
  numero = document.getElementById("numeroCifrar").value
  const mensajeCifrado = cipher.encode(numero,texto)
  return document.getElementById("textoCifrado").innerHTML = mensajeCifrado
}

//FUNCIÓN DECIFRAR MENSAJE
function descifrar(){
  xtexto = document.getElementById("inputCifrado").value
  xnumero = parseInt(document.getElementById("numeroDescifrar").value)
  const xmensajeDescifrado = cipher.decode(xnumero,xtexto)
  return document.getElementById("textoDescifrado").innerHTML = xmensajeDescifrado
}


//console.log(cipher);

//document.getElementById("textoCifrado").innerHTML

//boton de cifrado (boton go)


//función para mostrar el cuadro con el texto cifrado y que lo demás no aparezca (excepto el título)
function mostrarCipherScreen(){
  document.getElementById("parteUno").style.display = "none";
  document.getElementById("parteDos").style.display = "none";
  document.getElementById("cipherScreen").style.display = "block";
}


//función para mostrar el cuadro con el texto cifrado y que lo demás no aparezca (excepto el título)
function mostrarDecipherScreen(){
  document.getElementById("parteUno").style.display = "none";
  document.getElementById("parteDos").style.display = "none";
  document.getElementById("decipherScreen").style.display = "block";
}