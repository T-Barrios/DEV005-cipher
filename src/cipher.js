const cipher = {
  encode: function (offset, string){
    if(typeof offset === "object" || parseInt(offset) === 0 || typeof string === "object" || string.length === 0 || offset.length === 0){
      throw new TypeError("OMG there's an error!")
    } else {
      console.log("no errors found")
    }

    let encoded = ""
    const letterArray = []
    const numberArray = []
    const asciiArray = []
    let numberToLetter = 0
    for (let i = 0; i < string.length; i++) {
      letterArray.push(string.slice(i, 1 + i))
      numberArray.push(letterArray[i].charCodeAt(0))
      asciiArray.push((((numberArray[i]-65)+parseInt(offset))% 26)+65)
      numberToLetter = String.fromCharCode(asciiArray[i])
      encoded += numberToLetter
    }
    return encoded
  },
  decode: function (offset, string) {
    if(typeof offset === "object" || parseInt(offset) === 0 || typeof string === "object" || string.length === 0 || offset.length === 0){
      throw new TypeError("OMG there's an error!")
    } else {
      console.log("no errors found")
    }

    let decoded = ""
    const xletterArray = []
    const xnumberArray = []
    const xasciiArray = []
    let xnumberToLetter = 0
    for (let i = 0; i < string.length; i++) {
      xletterArray.push(string.slice(i, 1 + i))
      xnumberArray.push(xletterArray[i].charCodeAt(0))
      xasciiArray.push(((((xnumberArray[i]-65)+52)-parseInt(offset))%26)+65)
      xnumberToLetter = String.fromCharCode(xasciiArray[i])
      decoded += xnumberToLetter
    }
    return decoded
  }
}

export default cipher;
