const cipher ={
  encode: function(offset,string){
    let encoded = ""
    encoded = (((string-65)+offset)%26)+65
    return encoded
  },
  decode: function(offset,string){
    let decoded = ""
    decoded = ((((string-65)+52)-offset)%26)+65
    return decoded
  }
}

export default cipher;
