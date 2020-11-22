// Assignment Code

// declaring all variables for password characters

var charCount = ["lowerCaseChar", "upperCaseChar", "numericNumber", "specialChar",]
  lowerCaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  upperCaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  numericNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  specialChar = ['#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', '<', '=', '>', '?', '@', '[', '~', '|', '{', '}', ' ', '"']
  
  // var strLength=str.length;

  var charCount = parseInt(prompt('Please enter a password between 8 and 128 characters long.'))

  if (charCount >= 8 && charCount <= 128) { 
    var includeLowerUpperCaseChar = parseInt(prompt('Does password include uppercase letters?'))
    var includeLowerCaseChar = parseInt(prompt('Does password include lowercase letters?'))
    var includeSpecialChar = parseInt(prompt('Does password include special characters?'))
    var includeNumericNumbers = parseInt(prompt('Does password include numbers?'))
  }

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
document.getElementById("click").addEventListener('button', myFunction);

function myFunction() {
  document.getElementById("click").innerHTML = parseInt(prompt);
}