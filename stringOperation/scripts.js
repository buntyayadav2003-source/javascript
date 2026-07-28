const inputElement = document.getElementById("inputPara")
const resultElement = document.getElementById("Result")

// 1. Uppercase Function
function convertToUpperCase() {
  const inputValue = inputElement.value; // Lowercase .value
  const outputText = inputValue.toUpperCase();
  resultElement.textContent = outputText;
}


function CheckPalindrom(){
    const inputValue = inputElement.value
       
    reverseSTR= ''
    for(let i=inputValue.length-1; i>=0; i--){
        reverseSTR = reverseSTR + inputValue
    }
    console.log(reverseSTR)
    if(inputValue == reverseSTR){
    console.log("******")
    outputText = "It is PALINDROM"
    }else{
        outputText = "It Not PALINDROM"
    }
    resultElement.textContent = outputText
}

function contVowels(){
    const inputValue = inputElement.value
    count = 0
    vowels = 'aeiouAEFIOU'


    len = inputValue.length

    for(i=0; i<len; i++){
        inputValue[i]
        if(vowels.includes(inputValue[i])){
            count++
        }
    }
    resultElement.textContent = "Vowels count :"+ count
}

function countConsonents(){
    const inputValue = inputElement.value
  const consonants = inputValue.match(/[a]/g)
  const count = consonants ? consonants.length : 0
  resultElement.textContent = `Consonant count: ${count}`
} 