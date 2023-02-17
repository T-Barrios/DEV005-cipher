import cipher from './cipher.js';

console.log(cipher);
//************************************************************************************************************************ */
//CIFRAR
//************************************************************************************************************************ */

//variables de cifrado (texto y numero)
let inputCipher = "";
let numberCipher = "";

//obtener input de cifrado (texto y numero)
document.getElementById("inputNormal").addEventListener("input", function(e){
  inputCipher = e.target.value;
});
document.getElementById("numeroCifrar").addEventListener("input", function(e){
  numberCipher = e.target.value;
});
//boton de cifrado (boton go)
const buttonGoCipher = document.getElementById("goCifrar");
buttonGoCipher.addEventListener("click",cifrar)
//función para cifrar
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
let letra = ""
let asciNumber = ""

function letterToNumber(){
  for (let i =0; i < letterArray.length; i++){
    letra = letterArray[i]
    asciNumber = letra.charCodeAt(0)
    console.log(asciNumber)
  }

}

function cifrar(){
  getLetter()
  letterToNumber()
}

//function cifrar(){
  //for (let i=0; i<5; i++){
  //  "casa".charAt(i);
//return console.log(3);
  //}
  //const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

  //let text = [];
  //for (let i = 0; i < inputCipher.length; i++) {
    //text += inputCipher[i];
    //text.push(text);
    //console.log(text);
  //}
//}
//let b = 0
//let e = b+1




//************************************************************************************************************************ */
//DESCIFRAR
//************************************************************************************************************************ */

