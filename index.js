//The password 'switches' to generate the desired password
const passwordLength = 10;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

//The function to generate the password
function generatePassword(
  length,
  includeLowercase,
  includeUppercase,
  includeNumers,
  includeSymbols
) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXWYZ";
  const numberChars = "0123456789";
  const symbolsChars = "!@#$%^&*()-=_+";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowercase ? lowercaseChars : "";
  allowedChars += includeUppercase ? uppercaseChars : "";
  allowedChars += includeNumers ? numberChars : "";
  allowedChars += includeSymbols ? symbolsChars : "";

  if (length <= 0) {
    return `(passwrod length must be at least 1)`;
  }

  if (allowedChars.length === 0) {
    return `(At least 1 set of character needs to be selected)`;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }
}

//The outcome in the console log
const password = generatePassword(
  passwordLength,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
);

console.log(`Generated password: ${password}`);
