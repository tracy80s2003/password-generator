// Variables for password characters
var lowerCaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numericNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ['#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', '<', '=', '>', '?', '@', '[', '~', '|', '{', '}', ' ', '"'];

// Add event listener to generate button
document.getElementById("startBtn").addEventListener('click', myFunction);

function myFunction() {

  var charCount = parseInt(prompt('Please enter a password between 8 and 128 characters long.'))

  if (charCount >= 8 && charCount <= 128) { 
    var includeUpperCaseChar = confirm('Does password include uppercase letters?');
    var includeLowerCaseChar = confirm('Does password include lowercase letters?');
    var includeSpecialChar = confirm('Does password include special characters?');
    var includeNumericNumbers = confirm('Does password include numbers?');

    var charBank = [];

    if (includeLowerCaseChar == true){
      charBank = charBank.concat(lowerCaseChar);
    }
    if (includeUpperCaseChar){
      charBank = charBank.concat(upperCaseChar);
    }
    if (includeSpecialChar){
      charBank = charBank.concat(specialChar);
    }
    if (includeNumericNumbers){
      charBank = charBank.concat(numericNumber);
    }

    var randomPass = "";

    for(var i = 0; i<charCount ; i++){
      var newRandChar = charBank[Math.floor(Math.random() * charBank.length)];
      randomPass += newRandChar;
    }

    document.getElementById("password").value = randomPass;

  }else{
    alert("We only handle a length of 8 through 128 characters. Please try again!")
    myFunction()
  }

}