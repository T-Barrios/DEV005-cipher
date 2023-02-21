import cipher from './cipher.js';

console.log(cipher);
//************************************************************************************************************************ */
//CIFRAR
//************************************************************************************************************************ */

//variables de cifrado (texto y numero)
let inputCipher = "";
let numberCipher = 0;

//variables de descifrado (texto y número)
let inputDecipher = "";
let numberDecipher = 0;

//obtener input de cifrado (texto y numero)
document.getElementById("inputNormal").addEventListener("input", function(e){
  inputCipher = e.target.value;
});
document.getElementById("numeroCifrar").addEventListener("input", function(e){
  numberCipher = e.target.value;
});

//obtener input de descifrado (texto y numero)
document.getElementById("inputCifrado").addEventListener("input", function(e){
  inputDecipher = e.target.value;
});
document.getElementById("numeroDescifrar").addEventListener("input", function(e){
  numberDecipher = e.target.value;
});

//boton de cifrado (boton go)
const buttonGoCipher = document.getElementById("goCifrar");
buttonGoCipher.addEventListener("click",cifrar)

//boton de descifrado (boton go)
const buttonGoDecipher = document.getElementById("goDescifrar");
buttonGoDecipher.addEventListener("click",descifrar)

//función para guardar cada letra del input por separado en un array
let letterArray = [];
let letter = ""
let a = 0
let z = 1

function getLetter(){
  for (let i = 0; i < inputCipher.length; i++){
    letter = inputCipher;
    let letterCut = letter.slice(a,z);
    letterArray.push(letterCut);
    a += 1;
    z += 1;
  }
}

//función para convertir cada letra del array en un numero ascii
let letra = ""
let asciNumber = 0
let numberArray = []

function letterToNumber(){
  for (let i =0; i < letterArray.length; i++){
    letra = letterArray[i]
    asciNumber = letra.charCodeAt(0)
    numberArray.push(asciNumber)    
  }
}

//función para realizar la fórmula de cifrado (sumar offset, convertir a letra)
let numberOfNumber = ""
let asciArray = []
let cipheredNumber = "" 
let cipheredMessage = ""

function numberPlusOffset(){
  for (let i =0; i < letterArray.length; i++){
    numberOfNumber = ((((numberArray[i])-65)+(+numberCipher))%26)+65
    asciArray.push(numberOfNumber)
    cipheredNumber = String.fromCharCode(asciArray[i])
    cipheredMessage += cipheredNumber 
  }
}

//función para mostrar el cuadro con el texto cifrado y que lo demás no aparezca (excepto el título)
function mostrarCipherScreen(){
  document.getElementById("parteUno").style.display = "none";
  document.getElementById("parteDos").style.display = "none";
  document.getElementById("cipherScreen").style.display = "block";
}

//función para cifrar el mensaje al hacer click en el botón cifrar
function cifrar(){
  getLetter()
  letterToNumber()
  numberPlusOffset()
  document.getElementById("textoCifrado").innerHTML = cipheredMessage
  mostrarCipherScreen()
}

//************************************************************************************************************************ */
//DESCIFRAR
//************************************************************************************************************************ */

//función para guardar cada letra del input por separado en un array
let xletterArray = [];
let xletter = ""
let xa = 0
let xz = 1

function getLetter2(){
  for (let i = 0; i < inputDecipher.length; i++){
    xletter = inputDecipher;
    let xletterCut = xletter.slice(xa,xz);
    xletterArray.push(xletterCut);
    xa += 1;
    xz += 1;
  }
}

//función para convertir cada letra del array en un numero ascii
let xletra = ""
let xasciNumber = 0
let xnumberArray = []

function letterToNumber2(){
  for (let i =0; i < xletterArray.length; i++){
    xletra = xletterArray[i]
    xasciNumber = xletra.charCodeAt(0)
    xnumberArray.push(xasciNumber)    
  }
  return console.log(xnumberArray)
}

//función para realizar la fórmula de cifrado (sumar offset, convertir a letra)
let xnumberOfNumber = ""
let xasciArray = []
let xdecipheredNumber = "" 
let xdecipheredMessage = ""

//

function numberPlusOffset2(){
  for (let i =0; i < xletterArray.length; i++){
    xnumberOfNumber = (((((xnumberArray[i])-65)+26)-(+numberDecipher))%26)+65
    xasciArray.push(xnumberOfNumber)
    xdecipheredNumber = String.fromCharCode(xasciArray[i])
    xdecipheredMessage += xdecipheredNumber 
  }
}

//función para mostrar el cuadro con el texto cifrado y que lo demás no aparezca (excepto el título)
function mostrarDecipherScreen(){
  document.getElementById("parteUno").style.display = "none";
  document.getElementById("parteDos").style.display = "none";
  document.getElementById("decipherScreen").style.display = "block";
}

function descifrar(){
  getLetter2()
  letterToNumber2()
  numberPlusOffset2()
  document.getElementById("textoDescifrado").innerHTML = xdecipheredMessage
  mostrarDecipherScreen()
}
