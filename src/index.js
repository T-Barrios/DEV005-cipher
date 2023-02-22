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
  const letterArray = []
  const numberArray = []
  const asciiArray = []
  let numberToLetter = 0
  let mensajeCifrado = ""
  for (let i = 0; i < texto.length; i++){
    letterArray.push(texto.slice(i,1+i))
    numberArray.push(letterArray[i].charCodeAt(0))
    asciiArray.push(cipher.encode((+numero),numberArray[i]))
    numberToLetter = String.fromCharCode(asciiArray[i])
    mensajeCifrado += numberToLetter
  }  
  return document.getElementById("textoCifrado").innerHTML = mensajeCifrado
}

//FUNCIÓN DECIFRAR MENSAJE
function descifrar(){
  xtexto = document.getElementById("inputCifrado").value
  xnumero = document.getElementById("numeroDescifrar").value
  const xletterArray = []
  const xnumberArray = []
  const xasciiArray = []
  let xnumberToLetter = 0
  let xmensajeDescifrado = ""
  for (let i = 0; i < xtexto.length; i++){
    xletterArray.push(xtexto.slice(i,1+i))
    xnumberArray.push(xletterArray[i].charCodeAt(0))
    xasciiArray.push(cipher.decode((+(xnumero)),xnumberArray[i]))
    xnumberToLetter = String.fromCharCode(xasciiArray[i])
    xmensajeDescifrado += xnumberToLetter
  }
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