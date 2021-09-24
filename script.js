// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays
const charsToInclude = [];
const possibleChars = [];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const special = ["?", "@", "$", "#", "%", "!"];

//Generate Password Function
function generatePassword() {
  //reset variables for reruns and get password length
  let charsToInclude = [];
  let finalPassword = [];
  let length = parseInt(prompt("how many characters to inlude"))
  if (length <8 || length > 128) {
    return alert("Invalid length");
  }
  //Get user input for characters to include
  let shouldIncludeLower =  confirm("would you like to include lower case letter");
  let shouldIncludeUpper =  confirm("would you like to include upper case letter");
  let shouldIncludeNumbers =  confirm("would you like to include numbers");
  let shouldIncludeSymbols =  confirm("would you like to include symbols");
  //Test to make sure there is at least one selection 
  if (shouldIncludeLower === false &&
      shouldIncludeUpper === false &&
      shouldIncludeNumbers === false &&
      shouldIncludeSymbols === false) {
        return alert("You must make at least one selection")
      };
  //Create array with pool of possible letters to include in password
  if (shouldIncludeLower === true) {
    charsToInclude = charsToInclude.concat(lowercase);
  };

  if (shouldIncludeUpper === true) {
    charsToInclude = charsToInclude.concat(uppercase);
  };

  if (shouldIncludeNumbers === true) {
    charsToInclude = charsToInclude.concat(numbers);
  };

  if (shouldIncludeSymbols) {
    charsToInclude = charsToInclude.concat(special)
  };
  console.log(charsToInclude);
  //Iterate thru possible charaters by the desired password length
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random()*charsToInclude.length);
    let temp = charsToInclude[randomIndex];
    finalPassword.push(temp);
    console.log(finalPassword);
  }
  //return finalpassword without spaces
  return finalPassword.join("");

  };

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
