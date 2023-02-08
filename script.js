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
  var numArr = [1,2,3,4,5,6,7,8]
  var randomNum = Math.floor(Math.random() * numArr.length)
  var numChoice =  confirm( 'include Numbers?');
    if (numChoice === true) {
      return randomNum;
    }
    console.log("It's Invalid")
    return null;
}


function generatePassword(){
  var passwordLength = getLength()
  // console.log(passwordLength)
  var randomNum = getNumChoices()
  console.log(randomNum)
  var password = ""
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
