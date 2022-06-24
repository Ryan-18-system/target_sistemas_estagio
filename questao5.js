function reverseString(string){
    var newString = ''
    for(let i = string.length - 1; i >= 0; i--){
        newString += string[i]
    }
    return newString
}

console.log(reverseString('hello'))