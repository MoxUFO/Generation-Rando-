// Assignment code here



function getLength(){
  var passwordLength = prompt("What's the desired number of characters between 8-128 as an integer")
  if(passwordLength >= 8 && passwordLength <= 128){
    return passwordLength
  } 
  console.log("It's invalid")
  return getLength()
}

function getNumChoices(){
  var randomNum = Math.floor(Math.random() * numArr.length)
  var numChoice =  confirm( 'include Numbers?');
    if (numChoice === true) {
      console.log(randomNum)
      return numArr[randomNum];
    }
    console.log("It's Invalid")
    return null;
}

function upCase(){
  var upCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P' ,'Q', 'R', 'S', 'T' , 'U', 'V', 'W', 'X', 'Y', 'Z']
  var randomUpCase = Math.floor(Math.random() * upCaseArr.length)
  var upCasePromt = confirm('Include Upper case Letters?');
  if ( upCasePromt === true){
  // console.log(upCaseArr[randomUpCase])
  return upCaseArr[randomUpCase]
  }
}

function lowCase(){
  var lowCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  randonLowCase = Math.floor(Math.random() * lowCaseArr.length)
  var lowCasePromt = confirm('Include Lower case Letters?')
  if (lowCasePromt === true){
    // console.log(lowCaseArr[randonLowCase])
    return lowCaseArr[randonLowCase]
  }
}

function specCharacters(){
  var specCharArr = ['!', '@', '#', '$', '%', '^', '&', '*', '/', '-', '+', '(', ')', '[', ']', '{', '}', '<', '>', '?', '~']
  randomSpecChar = Math.floor(Math.random() * specCharArr.length)
  var specCharPrompt = confirm('Include special Characters?')
  if ( specCharPrompt === true){
    // console.log(specCharArr[randomSpecChar])
   return specCharArr[randomSpecChar]
  }
  
}

function generatePassword(){
  var passwordLength = getLength()
  console.log(passwordLength)
  var randomNum = getNumChoices()
  // console.log(randomNum)
  var randomUpCase = upCase()
  //consol.log()
  var randonLowCase = lowCase()
  //console.log()
  var randomSpecChar = specCharacters()


  //generate it somehow
  return password
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
