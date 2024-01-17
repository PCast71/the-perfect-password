// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword(length, useUppercase, useNumbers, useSymbols) {
  let charset = "abcdefghijklmnopqrstuvwxyz";

  if (useUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (useNumbers) charset += "0123456789";
  if (useSymbols) charset += "!@#$%^&*()_-+=<>?"

  let password = "";
  
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;

}

// This will gather user preferences and prompt the event listener
document.getElementById("generate").addEventListener("click", function() {
const length = parseInt(prompt("Enter password length:"));
const useUppercase = confirm("Include uppercase letters?");
const useNumbers = confirm("Include numbers?");
const useSymbols = confirm("Include symbols");

//Generates password based on preferences
const password = generatePassword(length, useUppercase, useNumbers, useSymbols);
console.log(password);

document.getElementById("password").value = password;
});



